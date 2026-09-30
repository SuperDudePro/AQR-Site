const DEFAULT_TIMEOUT_MS = 8_000;
const MAX_BODY_BYTES = 8_192;

function firstHeader(request, name) {
  const value = request.headers?.[name];
  return Array.isArray(value) ? value[0] : value;
}

function clientIp(request) {
  return String(firstHeader(request, "x-forwarded-for") || request.socket?.remoteAddress || "unknown")
    .split(",")[0]
    .trim();
}

// Browsers send Origin on cross-site POSTs; reject any that do not match this host.
function validSameSiteOrigin(request) {
  const origin = firstHeader(request, "origin");
  if (!origin) return true;
  try {
    const originUrl = new URL(origin);
    const host = String(firstHeader(request, "x-forwarded-host") || firstHeader(request, "host") || "")
      .split(",")[0]
      .trim()
      .toLowerCase();
    return originUrl.host.toLowerCase() === host;
  } catch {
    return false;
  }
}

function requestTooLarge(request) {
  const length = Number(firstHeader(request, "content-length"));
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) return true;
  if (typeof request.body === "string") return Buffer.byteLength(request.body, "utf8") > MAX_BODY_BYTES;
  if (request.body && typeof request.body === "object") {
    return Buffer.byteLength(JSON.stringify(request.body), "utf8") > MAX_BODY_BYTES;
  }
  return false;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// Durable per-key limit through Upstash/Vercel KV REST when KV_REST_API_URL and KV_REST_API_TOKEN are set.
// Without them the check is skipped so the form keeps working; configure KV to turn rate limiting on.
async function rateLimited(key, limit, windowMs) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return false;
  try {
    const script = 'local c = redis.call("INCR", KEYS[1]) if c == 1 then redis.call("PEXPIRE", KEYS[1], ARGV[1]) end return c';
    const response = await fetchWithTimeout(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(["EVAL", script, "1", `rate:${key}`, String(windowMs)]),
    }, 3_000);
    if (!response.ok) throw new Error(`Redis returned ${response.status}.`);
    const payload = await response.json();
    return Number(payload.result) > limit;
  } catch (error) {
    console.error("Contact rate limit check failed:", error);
    return false;
  }
}

function getString(body, key) {
  const value = body && typeof body === "object" ? body[key] : undefined;
  return typeof value === "string" ? value.trim() : "";
}

async function readBody(request) {
  if (request.body && typeof request.body === "object") return request.body;

  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      return {};
    }
  }

  return {};
}

function json(response, status, body) {
  return response.status(status).json(body);
}

// Verifies a Cloudflare Turnstile token when TURNSTILE_SECRET is configured.
// Returns { ok: true } to allow, or { ok: false, error } to reject.
// If TURNSTILE_SECRET is not set, verification is skipped (backward compatible).
async function verifyTurnstile(body, request) {
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) return { ok: true };

  const token = getString(body, "cf-turnstile-response");
  if (!token) {
    return { ok: false, error: "Please complete the verification challenge and try again." };
  }

  const remoteip =
    (request.headers && (request.headers["cf-connecting-ip"] || request.headers["x-forwarded-for"])) ||
    "";

  try {
    const params = new URLSearchParams({ secret, response: token });
    if (remoteip) params.set("remoteip", String(remoteip).split(",")[0].trim());

    const verifyResponse = await fetchWithTimeout(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
      }
    );

    const data = await verifyResponse.json().catch(() => ({ success: false }));
    if (!data || data.success !== true) {
      console.warn("Turnstile verification failed:", data && data["error-codes"]);
      return { ok: false, error: "Verification failed. Please try again." };
    }
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return { ok: false, error: "Verification is temporarily unavailable. Please try again shortly." };
  }

  return { ok: true };
}

export default async function handler(request, response) {
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return json(response, 405, { ok: false, error: "Method not allowed." });
  }
  if (!validSameSiteOrigin(request)) {
    return json(response, 403, { ok: false, error: "Request origin was not accepted." });
  }
  if (requestTooLarge(request)) {
    return json(response, 413, { ok: false, error: "Request is too large." });
  }

  const body = await readBody(request);

  if (getString(body, "website")) {
    return json(response, 200, { ok: true });
  }

  const name = getString(body, "name");
  const email = getString(body, "email").toLowerCase();
  const subject = getString(body, "subject") || "New contact message";
  const message = getString(body, "message");

  if (!name || !email || !message) {
    return json(response, 400, { ok: false, error: "Name, email, and message are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(response, 400, { ok: false, error: "Use a valid email address." });
  }

  if (message.length > 4000) {
    return json(response, 400, { ok: false, error: "Message is too long." });
  }

  // Mirror the form's maxLength limits; the browser limits are not a server control.
  if (name.length > 120 || email.length > 180 || subject.length > 160) {
    return json(response, 400, { ok: false, error: "One of the fields is too long." });
  }

  const [ipLimited, emailLimited] = await Promise.all([
    rateLimited(`aqr:contact:ip:${clientIp(request)}`, 8, 60 * 60 * 1000),
    rateLimited(`aqr:contact:email:${email}`, 4, 24 * 60 * 60 * 1000),
  ]);
  if (ipLimited || emailLimited) {
    response.setHeader("Retry-After", "3600");
    return json(response, 429, { ok: false, error: "Please wait before sending another message." });
  }

  const turnstile = await verifyTurnstile(body, request);
  if (!turnstile.ok) {
    return json(response, 400, { ok: false, error: turnstile.error });
  }

  const {
    CONTACT_FROM_EMAIL,
    CONTACT_SUBJECT_PREFIX = "AQR",
    CONTACT_TO_EMAIL,
    RESEND_API_KEY,
  } = process.env;

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Missing contact form environment variables.");
    return json(response, 500, { ok: false, error: "Contact form is not configured yet." });
  }

  const safeSubject = `${CONTACT_SUBJECT_PREFIX}: ${subject}`.slice(0, 160);
  const text = [`Name: ${name}`, `Email: ${email}`, `Subject: ${subject}`, "", message].join("\n");
  const endpoint = "https://api." + "resend.com" + "/emails";

  let sendResponse;
  try {
    sendResponse = await fetchWithTimeout(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: safeSubject,
        text,
      }),
    });
  } catch (error) {
    console.error("Contact email request failed:", error);
    return json(response, 502, { ok: false, error: "Message could not be sent. Please try again later." });
  }

  if (!sendResponse.ok) {
    const errorText = await sendResponse.text();
    console.error(`Contact email failed (${sendResponse.status}):`, errorText);
    return json(response, 502, { ok: false, error: "Message could not be sent. Please try again later." });
  }

  return json(response, 200, { ok: true });
}
