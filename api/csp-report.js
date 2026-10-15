// Collects Content-Security-Policy-Report-Only violations so the policy can be tuned
// from Vercel function logs before it is enforced.
export const config = { api: { bodyParser: false } };

const MAX_BYTES = 16_384;

async function readRawBody(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > MAX_BYTES) return "";
    chunks.push(buffer);
  }
  return Buffer.concat(chunks).toString("utf8");
}

// Strip query strings and fragments: CSP reports may include analytics IDs or form data.
function safeUrl(value) {
  if (typeof value !== "string") return undefined;
  try {
    const parsed = new URL(value);
    return `${parsed.origin}${parsed.pathname.slice(0, 256)}`;
  } catch {
    return value.split(/[?#]/)[0].slice(0, 256);
  }
}

function summarize(report) {
  const body = report?.["csp-report"] ?? report?.body ?? report ?? {};
  return {
    documentUri: safeUrl(body["document-uri"] ?? body.documentURL),
    directive: body["effective-directive"] ?? body["violated-directive"] ?? body.effectiveDirective,
    blockedUri: safeUrl(body["blocked-uri"] ?? body.blockedURL),
    sourceFile: safeUrl(body["source-file"] ?? body.sourceFile),
    line: body["line-number"] ?? body.lineNumber,
  };
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).end();
  }

  try {
    const raw = await readRawBody(request);
    if (raw) {
      const parsed = JSON.parse(raw);
      for (const report of (Array.isArray(parsed) ? parsed : [parsed]).slice(0, 3)) {
        console.warn("CSP violation:", JSON.stringify(summarize(report)));
      }
    }
  } catch {
    // Malformed reports are ignored; this endpoint only feeds logs.
  }
  return response.status(204).end();
}
