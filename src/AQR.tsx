import "./AQR.css";

type AQRProps = {
  onNavigateWhy?: () => void;
};

type PreviewCard = {
  title: string;
  eyebrow: string;
  body: string;
  href: string;
  cta: string;
  onClick?: (event: any) => void;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function AQR({ onNavigateWhy }: AQRProps) {
  const navigateWhy = () => {
    if (onNavigateWhy) {
      onNavigateWhy();
      return;
    }
    window.location.hash = "#/why-aqr";
  };

  const handleHomeAnchor =
    (id: string) => (event: any) => {
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
      cta: "Read the full page",
      onClick: (event) => {
        event.preventDefault();
        navigateWhy();
      },
    },
    {
      title: "Course Overview",
      eyebrow: "What is coming next",
      body:
        "A single holding section for the year structure, project families, and course details as the site keeps getting built.",
      href: "#course-overview",
      cta: "See the section",
      onClick: handleHomeAnchor("course-overview"),
    },
    {
      title: "Student Entry",
      eyebrow: "Course access",
      body:
        "A reserved space for the live student-facing course area so enrolled students can get straight to the work.",
      href: "#enter-course",
      cta: "Go there",
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

          <nav className="aqr-topnav" aria-label="Primary">
            <a href="#/why-aqr" onClick={(event) => { event.preventDefault(); navigateWhy(); }}>
              Why AQR
            </a>
            <a href="#enter-course" onClick={handleHomeAnchor("enter-course")}>
              Student Entry
            </a>
            <a href="#course-overview" onClick={handleHomeAnchor("course-overview")}>
              Course Overview
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
              <a className="aqr-button aqr-button-top" href="#enter-course" onClick={handleHomeAnchor("enter-course")}>
                Student Entry
              </a>
              <a className="aqr-button aqr-button-top" href="#course-overview" onClick={handleHomeAnchor("course-overview")}>
                Course Overview
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
          <div className="aqr-wrap aqr-split">
            <div>
              <p className="aqr-kicker aqr-kicker-bright">Why AQR</p>
              <h2 className="aqr-heading-dark" id="aqr-why-preview-title">A real pathway in modern mathematics.</h2>
              <p>
                Applied Quantitative Reasoning belongs to the broader world of
                quantitative reasoning: data, modeling, evidence, uncertainty,
                decision-making, and practical application.
              </p>
              <p>
                This section previews the argument. The full Why AQR page goes deeper
                into Colorado pathway alignment, university recognition, and workforce relevance.
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
              <img
                src="/AQR_How_It_Works_Banner.png"
                alt="Illustrated banner showing the AQR course overview"
              />
            </div>
          </div>
        </section>

        <section className="aqr-section aqr-section-black" id="course-overview" aria-labelledby="aqr-course-overview-title">
          <div className="aqr-wrap aqr-overview-hold">
            <h2 className="aqr-heading-blue" id="aqr-course-overview-title">Course Overview</h2>
            <p className="aqr-coming-soon">More information soon!</p>
          </div>
        </section>

        <section className="aqr-section aqr-section-silver" id="enter-course" aria-labelledby="aqr-student-entry-title">
          <div className="aqr-wrap aqr-enter-grid">
            <div>
              <p className="aqr-kicker aqr-kicker-bright">Student Entry</p>
              <h2 className="aqr-heading-blue" id="aqr-student-entry-title">Reserved space for entering the course.</h2>
              <p>
                This area is being held for the student-facing course entry. When ready,
                it can use a simple passcode and become the direct path into the live materials.
              </p>
            </div>
            <div className="aqr-enter-card aqr-enter-card-bright">
              <p className="aqr-panel-label">Held for later</p>
              <div className="aqr-password-chip">AQRVPP</div>
              <p className="aqr-fine-print">
                A simple student-facing gate can live here later without changing the overall site structure.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="aqr-footer">
        <div className="aqr-wrap aqr-footer-inner">
          <p>Applied Quantitative Reasoning • Vista PEAK Prep • Site in progress</p>
        </div>
      </footer>
    </div>
  );
}

export default AQR;
