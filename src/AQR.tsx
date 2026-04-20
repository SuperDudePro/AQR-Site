import "./AQR.css";

type AQRProps = {
  onNavigateWhy?: () => void;
};

const previewCards = [
  {
    title: "Why AQR",
    eyebrow: "Why this course matters",
    body:
      "Colorado alignment, university recognition, and real-world relevance. This is the core signal page for the course.",
    targetId: null,
    cta: "Read the full page",
  },
  {
    title: "Course Overview",
    eyebrow: "What is coming next",
    body:
      "A single holding section for the year structure, project families, and course details as the site keeps getting built.",
    targetId: "course-overview",
    cta: "See the section",
  },
  {
    title: "Student Entry",
    eyebrow: "Course access",
    body:
      "A reserved space for the live student-facing course area so enrolled students can get straight to the work.",
    targetId: "enter-course",
    cta: "Go there",
  },
];

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

  return (
    <main className="aqr-page">
      <section className="aqr-hero" id="top">
        <header className="aqr-topbar aqr-wrap">
          <button className="aqr-brand" onClick={() => scrollToId("top")} type="button">
            <span className="aqr-brand-mark">AQR</span>
            <span className="aqr-brand-name">Applied Quantitative Reasoning</span>
          </button>
          <nav className="aqr-topnav" aria-label="Primary">
            <button onClick={navigateWhy} type="button">Why AQR</button>
            <button onClick={() => scrollToId("enter-course")} type="button">Student Entry</button>
            <button onClick={() => scrollToId("course-overview")} type="button">Course Overview</button>
          </nav>
        </header>

        <div className="aqr-wrap aqr-hero-inner">
          <p className="aqr-eyebrow">Vista PEAK Prep • Launching Fall 2026</p>
          <h1 className="aqr-mark">AQR</h1>
          <p className="aqr-full-name">Applied Quantitative Reasoning</p>
          <p className="aqr-lead">Serious math for real decisions.</p>
          <p className="aqr-hero-text">
            A modern fourth-year math option built around real decisions, real data,
            real tools, and real communication.
          </p>
          <div className="aqr-hero-actions">
            <button className="aqr-button aqr-button-top" onClick={navigateWhy} type="button">
              Why AQR
            </button>
            <button className="aqr-button aqr-button-top" onClick={() => scrollToId("enter-course")} type="button">
              Student Entry
            </button>
            <button className="aqr-button aqr-button-top" onClick={() => scrollToId("course-overview")} type="button">
              Course Overview
            </button>
          </div>
        </div>
      </section>

      <section className="aqr-cards-section" aria-label="Homepage preview links">
        <div className="aqr-wrap aqr-card-grid">
          {previewCards.map((card) => (
            <article key={card.title} className="aqr-card">
              <p className="aqr-card-eyebrow">{card.eyebrow}</p>
              <h3 className="aqr-card-title">{card.title}</h3>
              <p>{card.body}</p>
              <button
                className="aqr-card-link"
                onClick={() => (card.targetId ? scrollToId(card.targetId) : navigateWhy())}
                type="button"
              >
                {card.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="aqr-section aqr-section-silver" id="why-preview">
        <div className="aqr-wrap aqr-split">
          <div>
            <p className="aqr-kicker aqr-kicker-bright">Why AQR</p>
            <h2 className="aqr-heading-dark">A real pathway in modern mathematics.</h2>
            <p>
              Applied Quantitative Reasoning belongs to the broader world of
              quantitative reasoning: data, modeling, evidence, uncertainty,
              decision-making, and practical application.
            </p>
            <p>
              This section previews the argument. The full Why AQR page goes deeper
              into Colorado pathway alignment, university recognition, and workforce relevance.
            </p>
            <button className="aqr-button aqr-button-dark" onClick={navigateWhy} type="button">
              Open the full Why AQR page
            </button>
          </div>
          <div className="aqr-quote-column">
            <div className="aqr-quote-panel aqr-quote-panel-bright">
              <p>“AQR is for students who want mathematics to do something.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aqr-banner-section" aria-label="Course overview visual">
        <div className="aqr-wrap aqr-banner-wrap">
          <div className="aqr-banner-card">
            <img src="/AQR_How_It_Works_Banner.png" alt="AQR course overview visual" />
          </div>
        </div>
      </section>

      <section className="aqr-section aqr-section-black" id="course-overview">
        <div className="aqr-wrap aqr-overview-hold">
          <h2 className="aqr-heading-blue">Course Overview</h2>
          <p className="aqr-coming-soon">More information soon!</p>
        </div>
      </section>

      <section className="aqr-section aqr-section-silver" id="enter-course">
        <div className="aqr-wrap aqr-enter-grid">
          <div>
            <p className="aqr-kicker aqr-kicker-bright">Student Entry</p>
            <h2 className="aqr-heading-blue">Reserved space for entering the course.</h2>
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
  );
}

export default AQR;
