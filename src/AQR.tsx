import "./AQR.css";

type AQRProps = {
  onNavigateWhy: () => void;
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
    eyebrow: "Practical details",
    body:
      "The future home for grade levels, credit, prerequisite, year-long format, and honors or extension information.",
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

const overviewItems = [
  "Project-based fourth-year math",
  "Real decisions, real data, real tools",
  "Reasoning, communication, and decision-making",
  "Built with multiple levels of support and challenge",
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function AQR({ onNavigateWhy }: AQRProps) {
  return (
    <main className="aqr-page">
      <section className="aqr-hero" id="top">
        <header className="aqr-topbar aqr-wrap">
          <button className="aqr-brand" onClick={() => scrollToId("top")} type="button">
            <span className="aqr-brand-mark">AQR</span>
            <span className="aqr-brand-name">Applied Quantitative Reasoning</span>
          </button>
          <nav className="aqr-topnav" aria-label="Primary">
            <button onClick={onNavigateWhy} type="button">Why AQR</button>
            <button onClick={() => scrollToId("enter-course")} type="button">Student Entry</button>
            <button onClick={() => scrollToId("course-overview")} type="button">Course Overview</button>
            <button onClick={() => scrollToId("how-it-works")} type="button">How It Works</button>
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
            <button className="aqr-button aqr-button-top" onClick={onNavigateWhy} type="button">
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
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <button
                className="aqr-card-link"
                onClick={() => (card.targetId ? scrollToId(card.targetId) : onNavigateWhy())}
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
            <h2>A real pathway in modern mathematics.</h2>
            <p>
              Applied Quantitative Reasoning belongs to the broader world of
              quantitative reasoning: data, modeling, evidence, uncertainty,
              decision-making, and practical application.
            </p>
            <p>
              This section previews the argument. The full Why AQR page goes deeper
              into Colorado pathway alignment, university recognition, and workforce relevance.
            </p>
            <button className="aqr-button aqr-button-dark" onClick={onNavigateWhy} type="button">
              Open the full Why AQR page
            </button>
          </div>
          <div className="aqr-quote-panel">
            <p>“AQR is for students who want mathematics to do something.”</p>
          </div>
        </div>
      </section>

      <section className="aqr-section aqr-section-graphite" id="how-it-works">
        <div className="aqr-wrap">
          <p className="aqr-kicker aqr-kicker-bright">How It Works</p>
          <h2>Built for applied learning.</h2>
          <p className="aqr-section-lead">
            Students work with real inputs, real data, and real artifacts. Later,
            this section can point directly into the course structure and project pages.
          </p>
          <div className="aqr-pill-row">
            {overviewItems.map((item) => (
              <div key={item} className="aqr-pill-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aqr-section aqr-section-black" id="course-overview">
        <div className="aqr-wrap aqr-overview-grid">
          <div>
            <p className="aqr-kicker">Course Overview</p>
            <h2>Space held for the practical course page.</h2>
            <p>
              This is where the public-facing course details will live next: grade levels,
              credit, prerequisite, course length, and the honors or extension path.
            </p>
            <p>
              A later Course Structure page can carry the year flow and project arc without
              turning the homepage into a junk drawer.
            </p>
          </div>
          <div className="aqr-overview-card">
            <p className="aqr-panel-label">Coming next</p>
            <ul>
              <li>Quick facts</li>
              <li>Course structure</li>
              <li>Sample projects</li>
              <li>Student course entry</li>
              <li>Family-facing overview language</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="aqr-section aqr-section-silver" id="enter-course">
        <div className="aqr-wrap aqr-enter-grid">
          <div>
            <p className="aqr-kicker">Student Entry</p>
            <h2>Reserved space for entering the course.</h2>
            <p>
              This area is being held for the student-facing course entry. When ready,
              it can use a simple passcode and become the direct path into the live materials.
            </p>
          </div>
          <div className="aqr-enter-card">
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
