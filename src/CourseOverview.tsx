import type { MouseEvent } from "react";
import "./CourseOverview.css";

type CourseOverviewProps = {
  onNavigateHome?: () => void;
  onNavigateWhy?: () => void;
};

type QuarterCard = {
  key: "q1" | "q2" | "q3" | "q4";
  title: string;
  dates: string;
  focus: string;
  body: string;
  href: string;
};

const quarterCards: QuarterCard[] = [
  {
    key: "q1",
    title: "Quarter 1 — Know Yourself",
    dates: "Aug 6 to Oct 8, 2026",
    focus: "AI-supported study/help tools and class-support tools",
    body:
      "Students build usable support tools, learn the Gemini / NotebookLM split, and establish routines for how the course works.",
    href: "#/quarter-1",
  },
  {
    key: "q2",
    title: "Quarter 2 — Track Yourself",
    dates: "Oct 19 to Dec 17, 2026",
    focus: "Self-tracking, time use, survey/data analysis, and pattern finding",
    body:
      "Students collect and interpret real data tied to their own lives or a class-approved question, then turn that into a supported claim.",
    href: "#/quarter-2",
  },
  {
    key: "q3",
    title: "Quarter 3 — Build a Decision Tool / App",
    dates: "Jan 6 to Mar 11, 2027",
    focus: "Student-built decision tool, app-like workflow, or Gem",
    body:
      "Students build a tool that helps a user make a real decision more clearly by comparing options, criteria, and tradeoffs.",
    href: "#/quarter-3",
  },
  {
    key: "q4",
    title: "Quarter 4 — Don’t Get Played",
    dates: "Mar 22 to May 24, 2027",
    focus: "Short anti-BS, media/data reasoning unit",
    body:
      "Students read claims critically, check evidence, and practice spotting misleading comparisons, visuals, and conclusions.",
    href: "#/quarter-4",
  },
];

function CourseOverview({ onNavigateHome, onNavigateWhy }: CourseOverviewProps) {
  const goHome = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    if (onNavigateHome) {
      onNavigateHome();
      return;
    }

    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const goWhy = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    if (onNavigateWhy) {
      onNavigateWhy();
      return;
    }

    window.location.hash = "#/why-aqr";
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="overview-site-shell">
      <a className="overview-skip-link" href="#overview-main-content">
        Skip to main content
      </a>

      <header className="overview-site-header overview-hero">
        <div className="overview-topbar overview-wrap">
          <a className="overview-brand" href="#" onClick={goHome}>
            <span className="overview-brand-mark">AQR</span>
            <span className="overview-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="overview-topnav" aria-label="Course Overview navigation" role="navigation">
            <a href="#" onClick={goHome}>Home</a>
            <a href="#/why-aqr" onClick={goWhy}>Why AQR</a>
            <a href="#/course-overview" aria-current="page">Course Overview</a>
          </nav>
        </div>
      </header>

      <main className="overview-page" id="overview-main-content">
        <section className="overview-hero overview-hero-main" aria-labelledby="overview-page-title">
          <div className="overview-wrap overview-hero-inner">
            <p className="overview-kicker">Course Overview</p>
            <h1 id="overview-page-title">A clear look at how AQR is built.</h1>
            <p className="overview-hero-lead">
              Applied Quantitative Reasoning is a project-based math elective built around real decisions,
              real data, real tools, and real communication. This page lays out the broad shape of the course
              without turning it into the full set of internal teaching materials.
            </p>
          </div>
        </section>

        <section className="overview-section overview-section-silver" aria-labelledby="overview-basics-title">
          <div className="overview-wrap overview-basics-grid">
            <div className="overview-text-dark">
              <p className="overview-section-kicker">At a glance</p>
              <h2 id="overview-basics-title">What this course is, who it is for, and how it is positioned.</h2>
              <p>
                AQR is a math elective for grades 11–12 and may count toward the fourth-year math requirement.
                It is designed as a serious math option for students who want math to connect more clearly
                to real decisions, data, tools, and communication.
              </p>
              <p>
                At Vista PEAK, the course will likely serve a senior-heavy group. It is designed as a strong fourth-year
                math option with room for different levels of support and challenge inside the same course.
              </p>
              <p>
                The working prerequisite is Integrated 2 / Geometry or teacher recommendation. Honors extensions are
                available by quarter through deeper independence, richer analysis, and more polished final work for
                students seeking more challenge.
              </p>
            </div>
            <div className="overview-facts-panel">
              <p className="overview-panel-label">Course facts</p>
              <ul className="overview-facts-list">
                <li><strong>Credit:</strong> Math elective</li>
                <li><strong>Counts toward:</strong> 4th-year math pathway</li>
                <li><strong>Grades:</strong> 11–12</li>
                <li><strong>Prerequisite:</strong> Integrated 2 / Geometry or teacher recommendation</li>
                <li><strong>Format:</strong> Project-based with checkpoints and milestone work</li>
                <li><strong>Honors option:</strong> Available through quarter-level extensions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="overview-section overview-section-black" aria-labelledby="overview-quarters-title">
          <div className="overview-wrap">
            <div className="overview-section-head">
              <p className="overview-section-kicker">Quarter structure</p>
              <h2 id="overview-quarters-title">Four quarters, each with a distinct focus.</h2>
              <p className="overview-section-intro">
                Each quarter has one main project family. The quarter pages are light for now, but the structure is real.
              </p>
            </div>
            <ul className="overview-quarter-grid" role="list">
              {quarterCards.map((quarter) => {
                const headingId = `${quarter.key}-title`;
                const metaId = `${quarter.key}-meta`;
                const focusId = `${quarter.key}-focus`;
                return (
                  <li key={quarter.key} className="overview-quarter-list-item">
                    <a
                      className="overview-quarter-card"
                      href={quarter.href}
                      aria-labelledby={`${headingId} ${metaId}`}
                      aria-describedby={focusId}
                    >
                      <p className="overview-card-kicker">{quarter.title.split(" — ")[0]}</p>
                      <h3 id={headingId} className="overview-quarter-card-title">{quarter.title}</h3>
                      <p id={metaId} className="overview-quarter-card-dates">{quarter.dates}</p>
                      <p id={focusId} className="overview-quarter-card-focus">
                        <strong>Main focus:</strong> {quarter.focus}
                      </p>
                      <p className="overview-quarter-card-body">{quarter.body}</p>
                      <span className="overview-quarter-card-link">Open quarter page</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      <footer className="overview-footer">
        <div className="overview-wrap overview-footer-inner">
          <p>
            © 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CourseOverview;
