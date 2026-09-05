import { type FormEvent, useEffect, useRef, useState } from "react";
import "./ContactPage.css";

type FormState = "idle" | "sending" | "sent" | "error";

// Set VITE_TURNSTILE_SITE_KEY in the environment to turn on the bot check.
// When it is unset, the widget is not rendered and the form behaves exactly as before.
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: { sitekey: string; theme?: "light" | "dark" | "auto" }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    let cancelled = false;
    let pollId = 0;

    function renderWidget() {
      if (cancelled || widgetIdRef.current !== null) return;
      if (!turnstileRef.current || !window.turnstile) return;
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY as string,
        theme: "auto",
      });
    }

    if (window.turnstile) {
      renderWidget();
      return () => {
        cancelled = true;
      };
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${TURNSTILE_SCRIPT_SRC}"]`
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = TURNSTILE_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    pollId = window.setInterval(() => {
      if (window.turnstile) {
        window.clearInterval(pollId);
        renderWidget();
      }
    }, 200);

    return () => {
      cancelled = true;
      if (pollId) window.clearInterval(pollId);
    };
  }, []);

  function resetTurnstile() {
    if (widgetIdRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "The message did not send.");
      }

      form.reset();
      resetTurnstile();
      setFormState("sent");
    } catch (error) {
      resetTurnstile();
      setFormState("error");
      setErrorMessage(error instanceof Error ? error.message : "The message did not send.");
    }
  }

  const isSending = formState === "sending";

  return (
    <div className="contact-site-shell">
      <a className="aqr-skip-link" href="#contact-main-content">
        Skip to main content
      </a>

      <header className="contact-header">
        <div className="contact-topbar contact-wrap contact-header-wrap">
          <a className="contact-brand" href="#/">
            <span className="contact-brand-mark">AQR</span>
            <span className="contact-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="contact-topnav" aria-label="Contact navigation">
            <a href="#/">Home</a>
            <a href="#/why-aqr">Why AQR</a>
            <a href="#/course-overview">Course Overview</a>
            <a href="#/classroom-posters">Posters</a>
            <a href="#/contact" aria-current="page">Contact</a>
          </nav>
        </div>
      </header>

      <main className="contact-main" id="contact-main-content">
        <section className="contact-section" aria-labelledby="contact-page-title">
          <div className="contact-wrap contact-content-wrap">
            <div className="contact-intro">
              <p className="contact-kicker">Contact</p>
              <h1 className="contact-title" id="contact-page-title">Questions and comments are welcome.</h1>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-hidden-field" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required maxLength={120} />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required maxLength={180} />
              </div>

              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" maxLength={160} />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required maxLength={4000} rows={8} />
              </div>

              {TURNSTILE_SITE_KEY && (
                <div className="contact-field">
                  <div ref={turnstileRef} className="cf-turnstile" />
                </div>
              )}

              <button className="contact-button" type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send note"}
              </button>

              {formState === "sent" && <p className="contact-status">Message sent.</p>}
              {formState === "error" && <p className="contact-status contact-status-error">{errorMessage}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="contact-footer">
        <div className="contact-wrap contact-footer-inner">
          <p>© 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span></p>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
