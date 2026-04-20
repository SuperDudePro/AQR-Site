import "./AQR.css";

const navLinks = [
  { label: "Why AQR", href: "#why-aqr" },
  { label: "Course Overview", href: "#course-overview" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Enter the Course", href: "#enter-course" },
];

const previewCards = [
  {
    title: "Why AQR",
    eyebrow: "Why this course matters",
    body:
      "The big argument: legitimacy, Colorado pathway alignment, university recognition, and why applied quantitative reasoning matters now.",
    href: "#why-aqr",
    cta: "Preview section",
  },
  {
    title: "Course Overview",
    eyebrow: "Practical details",
    body:
      "The future home for grade levels, credit, prerequisite, year-long format, and honors or extension information.",
    href: "#course-overview",
    cta: "See structure",
  },
  {
    title: "Enter the Course",
    eyebrow: "Student access",
    body:
      "A reserved space for the student-facing course area. This will eventually be password-protected and function as the course entry point.",
    href: "#enter-course",
    cta: "View placeholder",
  },
];

const overviewItems = [
  "Project-based fourth-year math",
  "Built for real-world quantitative reasoning",
  "Designed to connect math to life, work, and decision-making",
  "Structured for multiple levels of support and challenge",
];

const futureLinks = [
  "Course Overview",
  "Year Structure",
  "Quarter Themes",
  "Sample Projects",
  "Student Course Entry",
];

function AQR() {
  return (
    <main className="site-shell">
      <section className="hero-section" id="top">
        <header className="topbar">
          <a className="brand-lockup" href="#top" aria-label="AQR home">
            <span className="brand-mark">AQR</span>
            <span className="brand-name">Applied Quantitative Reasoning</span>
          </a>
          <nav className="topnav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-grid hero-grid-single">
          <div className="hero-copy hero-copy-single">
            <p className="eyebrow">Vista PEAK Prep • Launching Fall 2026</p>
            <h1 className="mark">AQR</h1>
            <p className="full-name">Applied Quantitative Reasoning</p>
            <p className="hero-lead">Serious math for real decisions.</p>
            <p className="hero-text">
              A modern fourth-year math option built around real decisions,
              real data, real tools, and real communication.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#why-aqr">
                Why AQR
              </a>
              <a className="button button-secondary" href="#course-overview">
                Course Overview
              </a>
              <a className="button button-ghost" href="#enter-course">
                Enter the Course
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="nav-cards-section" aria-label="Site pathways">
        <div className="content-wrap card-grid">
          {previewCards.map((card) => (
            <article key={card.title} className="feature-card">
              <p className="card-eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <a className="card-link" href={card.href}>
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="silver-section" id="why-aqr">
        <div className="content-wrap split-layout">
          <div>
            <p className="section-kicker">Why AQR</p>
            <h2>A real pathway in modern mathematics.</h2>
            <p>
              Applied Quantitative Reasoning belongs to the broader world of
              quantitative reasoning: data, modeling, evidence, uncertainty,
              decision-making, and practical application.
            </p>
            <p>
              This page will link to the full Why AQR argument. For now, the
              homepage holds the main signal: this is a serious academic path
              with a clear purpose.
            </p>
            <a className="button button-dark" href="#course-overview">
              Continue to course details
            </a>
          </div>
          <div className="quote-block">
            <p>“AQR is for students who want mathematics to do something.”</p>
          </div>
        </div>
      </section>

      <section className="dark-band" id="how-it-works">
        <div className="content-wrap">
          <p className="section-kicker">How it works</p>
          <h2>Built for applied learning.</h2>
          <p className="section-lead">
            Students work with real inputs, real data, and real artifacts.
            Later, this section can point directly into the quarter and project
            structure pages.
          </p>
          <div className="pill-row">
            {overviewItems.map((item) => (
              <div key={item} className="pill-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overview-section" id="course-overview">
        <div className="content-wrap overview-grid">
          <div>
            <p className="section-kicker">Course overview</p>
            <h2>Space held for the practical course page.</h2>
            <p>
              This is where the public-facing course details will live next:
              grade levels, credit, prerequisite, course length, and the
              honors/extension path.
            </p>
            <p>
              The homepage can introduce those details without turning the hero
              into a junk drawer.
            </p>
          </div>
          <div className="overview-card">
            <p className="panel-label">Coming next</p>
            <ul>
              {futureLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="enter-section" id="enter-course">
        <div className="content-wrap enter-grid">
          <div>
            <p className="section-kicker">Student access</p>
            <h2>Reserved space for entering the course.</h2>
            <p>
              This area is being held for the student-facing course entry. When
              ready, it can use a simple password gate and point students into
              the live class materials.
            </p>
          </div>
          <div className="enter-card">
            <p className="panel-label">Planned entry</p>
            <div className="password-chip">AQRVPP</div>
            <p className="fine-print">
              Placeholder only for now. The actual student-entry experience can
              be added once the course materials are ready.
            </p>
            <button className="button button-primary" type="button" disabled>
              Enter the Course
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="content-wrap footer-inner">
          <p className="footer-mark">AQR</p>
          <p>Applied Quantitative Reasoning • Vista PEAK Prep</p>
        </div>
      </footer>
    </main>
  );
}

export default AQR;
