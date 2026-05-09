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
      "Students learn how AQR works, build routines for using school-approved tools well, and create one useful support tool for studying, organizing, or getting better help.",
    href: "#/quarter-1",
  },
  {
    key: "q2",
    title: "Quarter 2 — Track Yourself",
    dates: "Oct 19 to Dec 17, 2026",
    focus: "Self-tracking, time use, survey/data analysis, and pattern finding",
    body:
      "Students collect real data, organize it, create displays, and make one honest claim about what the data shows while also explaining what it does not prove.",
    href: "#/quarter-2",
  },
  {
    key: "q3",
    title: "Quarter 3 — Build a Decision Tool / App",
    dates: "Jan 6 to Mar 11, 2027",
    focus: "Student-built decision tool, app-like workflow, or Gem",
    body:
      "Students build a tool that helps a real user compare options, weigh criteria, see tradeoffs, test the logic, and reach a clearer recommendation.",
    href: "#/quarter-3",
  },
  {
    key: "q4",
    title: "Quarter 4 — Don’t Get Played",
    dates: "Mar 22 to May 24, 2027",
    focus: "Short anti-BS, media/data reasoning unit",
    body:
      "Students practice reading claims, graphs, statistics, sources, and AI output more carefully so they can decide what to trust, question, or reject.",
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
              real data, real tools, and real communication. Students use quantitative reasoning to build useful
              artifacts, interpret evidence, compare options, and explain decisions in plain language.
            </p>
          </div>
        </section>

        <section className="overview-section overview-section-silver" aria-labelledby="overview-basics-title">
          <div className="overview-wrap overview-basics-grid">
            <div className="overview-text-dark">
              <p className="overview-section-kicker">At a glance</p>
              <h2 id="overview-basics-title">What this course is, who it is for, and how it is positioned.</h2>
              <p>
                AQR is a math elective for grades 11-12 and may count toward the fourth-year math requirement.
                It is designed as a serious math option for students who want math to connect more clearly
                to real decisions, data, tools, and communication.
              </p>
              <p>
                At Vista PEAK, the course will likely serve a senior-heavy group. It is built for students who need
                a practical fourth-year math option, including students who have not always been well served by
                traditional upper-math courses, while still leaving room for stronger extension work.
              </p>
              <p>
                The year is organized around one main project family per quarter. Each quarter also uses two short,
                recurring quantitative-reasoning lenses so students repeatedly practice reading numbers, evidence,
                models, and claims more carefully.
              </p>
            </div>
            <div className="overview-facts-panel">
              <p className="overview-panel-label">Course facts</p>
              <ul className="overview-facts-list">
                <li><strong>Credit:</strong> Math elective</li>
                <li><strong>Counts toward:</strong> 4th-year math pathway</li>
                <li><strong>Grades:</strong> 11-12</li>
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
                The year moves from self-knowledge and tool use, to real data, to decision-tool design, to practical
                skepticism about claims, graphs, statistics, sources, and evidence.
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
