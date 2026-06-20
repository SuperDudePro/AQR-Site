import type { MouseEvent } from "react";
import "./AQR.css";

type AQRProps = {
  onNavigateWhy?: () => void;
  onNavigateOverview?: () => void;
  onNavigatePosters?: () => void;
  onNavigateContact?: () => void;
};

type PreviewCard = {
  title: string;
  eyebrow: string;
  body: string;
  href: string;
  cta: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function AQR({ onNavigateWhy, onNavigateOverview, onNavigatePosters, onNavigateContact }: AQRProps) {
  const navigateWhy = () => {
    if (onNavigateWhy) {
      onNavigateWhy();
      return;
    }
    window.location.hash = "#/why-aqr";
  };

  const navigateOverview = () => {
    if (onNavigateOverview) {
      onNavigateOverview();
      return;
    }
    window.location.hash = "#/course-overview";
  };

  const navigatePosters = () => {
    if (onNavigatePosters) {
      onNavigatePosters();
      return;
    }
    window.location.hash = "#/classroom-posters";
  };

  const navigateContact = () => {
    if (onNavigateContact) {
      onNavigateContact();
      return;
    }
    window.location.hash = "#/contact";
  };

  const handleHomeAnchor =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      scrollToId(id);
    };

  const previewCards: PreviewCard[] = [
    {
      title: "Why AQR",
      eyebrow: "Why this course matters",
      body:
        "Colorado alignment, university recognition, and real-world relevance. This is the core signal page for the course.",
      href: "#/why-aqr",
      cta: "Open Why AQR",
      onClick: (event) => {
        event.preventDefault();
        navigateWhy();
      },
    },
    {
      title: "Course Overview",
      eyebrow: "How the year is structured",
      body:
        "A clear view of prerequisites, course positioning, quarter focus, mini-themes, and how the year fits together.",
      href: "#/course-overview",
      cta: "Open Course Overview",
      onClick: (event) => {
        event.preventDefault();
        navigateOverview();
      },
    },
    {
      title: "Classroom Posters",
      eyebrow: "AQR wall materials",
      body:
        "Printable poster files for classroom thinking moves, data skepticism, decision-making, AI use, and the visible pass path.",
      href: "#/classroom-posters",
      cta: "Open Posters",
      onClick: (event) => {
        event.preventDefault();
        navigatePosters();
      },
    },
  ];

  return (
    <div className="aqr-site-shell">
      <a className="aqr-skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="aqr-site-header aqr-hero">
        <div className="aqr-topbar aqr-wrap">
          <a className="aqr-brand" href="#top" onClick={handleHomeAnchor("top")}>
            <span className="aqr-brand-mark">AQR</span>
            <span className="aqr-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="aqr-topnav" aria-label="Primary" role="navigation">
            <a
              href="#/why-aqr"
              onClick={(event) => {
                event.preventDefault();
                navigateWhy();
              }}
            >
              Why AQR
            </a>
            <a
              href="#/course-overview"
              onClick={(event) => {
                event.preventDefault();
                navigateOverview();
              }}
            >
              Course Overview
            </a>
            <a
              href="#/classroom-posters"
              onClick={(event) => {
                event.preventDefault();
                navigatePosters();
              }}
            >
              Posters
            </a>
            <a
              href="#/contact"
              onClick={(event) => {
                event.preventDefault();
                navigateContact();
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="aqr-page" id="main-content">
        <section className="aqr-hero aqr-hero-main" id="top" aria-labelledby="aqr-home-title">
          <div className="aqr-wrap aqr-hero-inner">
            <p className="aqr-eyebrow">Vista PEAK Prep • Launching Fall 2026</p>
            <h1 className="aqr-mark" id="aqr-home-title">
              <span className="aqr-mark-text">AQR</span>
              <span className="aqr-full-name">Applied Quantitative Reasoning</span>
            </h1>
            <h2 className="aqr-lead">Serious math for real decisions.</h2>
            <p className="aqr-hero-text">
              A modern fourth-year math option built around real decisions, real data,
              real tools, and real communication.
            </p>
            <div className="aqr-hero-actions" role="group" aria-label="Page actions">
              <a
                className="aqr-button aqr-button-top"
                href="#/why-aqr"
                onClick={(event) => {
                  event.preventDefault();
                  navigateWhy();
                }}
              >
                Why AQR
              </a>
              <a
                className="aqr-button aqr-button-top"
                href="#/course-overview"
                onClick={(event) => {
                  event.preventDefault();
                  navigateOverview();
                }}
              >
                Course Overview
              </a>
              <a
                className="aqr-button aqr-button-top"
                href="#/classroom-posters"
                onClick={(event) => {
                  event.preventDefault();
                  navigatePosters();
                }}
              >
                Posters
              </a>
            </div>
          </div>
        </section>

        <section className="aqr-cards-section" aria-labelledby="aqr-preview-title">
          <div className="aqr-wrap">
            <h2 className="aqr-visually-hidden" id="aqr-preview-title">
              Page preview links
            </h2>
            <ul className="aqr-card-grid" role="list">
              {previewCards.map((card) => (
                <li key={card.title} className="aqr-card-list-item">
                  <div className="aqr-card">
                    <p className="aqr-card-eyebrow">{card.eyebrow}</p>
                    <h3 className="aqr-card-title">{card.title}</h3>
                    <p>{card.body}</p>
                    <a className="aqr-card-link" href={card.href} onClick={card.onClick}>
                      {card.cta}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="aqr-section aqr-section-silver" id="why-preview" aria-labelledby="aqr-why-preview-title">
          <div className="aqr-wrap aqr-split aqr-why-preview-copy">
            <div>
              <p className="aqr-kicker aqr-kicker-bright">Why AQR</p>
              <h2 className="aqr-heading-dark" id="aqr-why-preview-title">A real pathway in modern mathematics.</h2>
              <p>
                Applied Quantitative Reasoning belongs to the broader world of
                quantitative reasoning: data, modeling, evidence, uncertainty,
                decision-making, and practical application.
              </p>
              <a
                className="aqr-button aqr-button-dark"
                href="#/why-aqr"
                onClick={(event) => {
                  event.preventDefault();
                  navigateWhy();
                }}
              >
                Open the full Why AQR page
              </a>
            </div>
            <div className="aqr-quote-column">
              <div className="aqr-quote-panel aqr-quote-panel-bright">
                <p>"AQR is for students who want mathematics to do something."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="aqr-banner-section" aria-labelledby="aqr-banner-title">
          <div className="aqr-wrap aqr-banner-wrap">
            <h2 className="aqr-visually-hidden" id="aqr-banner-title">
              Course overview visual
            </h2>
            <div className="aqr-banner-card">
              <picture className="aqr-banner-picture">
                <source
                  type="image/webp"
                  srcSet="/AQR_How_It_Works_Banner-1024.webp 1024w, /AQR_How_It_Works_Banner-1600.webp 1600w, /AQR_How_It_Works_Banner.webp 2048w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1060px"
                />
                <img
                  src="/AQR_How_It_Works_Banner.png"
                  alt="Illustrated banner showing the AQR course overview"
                  width={2048}
                  height={868}
                  decoding="async"
                  fetchPriority="high"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1060px"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="aqr-section aqr-section-silver" id="course-overview-preview" aria-labelledby="aqr-course-overview-title">
          <div className="aqr-wrap aqr-overview-preview">
            <p className="aqr-kicker aqr-kicker-bright">Course Overview</p>
            <h2 className="aqr-heading-dark" id="aqr-course-overview-title">See the year structure at a glance.</h2>
            <p className="aqr-overview-preview-text">
              The course overview page lays out the course facts, the quarter-by-quarter structure, the mini-themes, and the tool focus.
            </p>
            <a
              className="aqr-button aqr-button-dark"
              href="#/course-overview"
              onClick={(event) => {
                event.preventDefault();
                navigateOverview();
              }}
            >
              Open Course Overview
            </a>
          </div>
        </section>

        <section className="aqr-section aqr-contact-section" aria-labelledby="aqr-contact-title">
          <div className="aqr-wrap aqr-overview-preview">
            <p className="aqr-kicker">Contact</p>
            <h2 className="aqr-heading-light" id="aqr-contact-title">Questions or comments?</h2>
            <a
              className="aqr-button aqr-button-top"
              href="#/contact"
              onClick={(event) => {
                event.preventDefault();
                navigateContact();
              }}
            >
              Contact AQR
            </a>
          </div>
        </section>
      </main>

      <footer className="aqr-footer">
        <div className="aqr-wrap aqr-footer-inner">
          <p>© 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span> • <a className="site-footer-link" href="#/contact">Contact</a></p>
        </div>
      </footer>
    </div>
  );
}

export default AQR;
