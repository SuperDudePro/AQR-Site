import type { MouseEvent } from "react";
import "./AQR.css";

type AQRProps = {
  onNavigateWhy?: () => void;
  onNavigateOverview?: () => void;
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

function AQR({ onNavigateWhy, onNavigateOverview }: AQRProps) {
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
        "A clear view of prerequisites, course positioning, quarter focus, and how the year fits together.",
      href: "#/course-overview",
      cta: "Open Course Overview",
      onClick: (event) => {
        event.preventDefault();
        navigateOverview();
      },
    },
    {
      title: "Student Course Space",
      eyebrow: "Course access",
      body: "This area is for student course access.",
      href: "#enter-course",
      cta: "Open Student Course Space",
      onClick: handleHomeAnchor("enter-course"),
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
            <a href="#enter-course" onClick={handleHomeAnchor("enter-course")}>
              Student Course Space
            </a>
          </nav>
        </div>
      </header>

      <main className="aqr-page" id="main-content">
        <section className="aqr-hero aqr-hero-main" id="top" aria-labelledby="aqr-home-title">
          <div className="aqr-wrap aqr-hero-inner">
            <p className="aqr-eyebrow">Vista PEAK Prep • Launching Fall 2026</p>
            <h1 className="aqr-mark" id="aqr-home-title">AQR</h1>
            <p className="aqr-full-name">Applied Quantitative Reasoning</p>
            <p className="aqr-lead">Serious math for real decisions.</p>
            <p className="aqr-hero-text">
              A modern fourth-year math option built around real decisions, real data,
              real tools, and real communication.
            </p>
            <div className="aqr-hero-actions" aria-label="Page actions">
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
              <a className="aqr-button aqr-button-top" href="#enter-course" onClick={handleHomeAnchor("enter-course")}>
                Student Course Space
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
                <p>“AQR is for students who want mathematics to do something.”</p>
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

        <section className="aqr-section aqr-section-black" id="course-overview-preview" aria-labelledby="aqr-course-overview-title">
          <div className="aqr-wrap aqr-overview-preview">
            <p className="aqr-kicker aqr-kicker-bright">Course Overview</p>
            <h2 className="aqr-heading-blue" id="aqr-course-overview-title">See the year structure at a glance.</h2>
            <p className="aqr-overview-preview-text">
              The course overview page lays out the basic course facts and the quarter-by-quarter structure.
            </p>
            <a
              className="aqr-button aqr-button-top"
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

        <section className="aqr-section aqr-section-silver" id="enter-course" aria-labelledby="aqr-student-entry-title">
          <div className="aqr-wrap aqr-enter-grid">
            <div>
              <p className="aqr-kicker aqr-kicker-bright">Student Course Space</p>
              <h2 className="aqr-heading-dark" id="aqr-student-entry-title">Student Course Space</h2>
              <p>This area is for student course access.</p>
            </div>
            <div className="aqr-enter-card aqr-enter-card-bright">
              <p className="aqr-panel-label">Live student access</p>
              <div className="aqr-password-chip">Enter with course passcode</div>
              <p className="aqr-fine-print">
                Use the current class passcode to open the live student course space, weekly materials, and project links.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="aqr-footer">
        <div className="aqr-wrap aqr-footer-inner">
          <p>© 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span></p>
        </div>
      </footer>
    </div>
  );
}

export default AQR;
