import type { MouseEvent } from "react";
import "./CourseOverview.css";

type CourseOverviewProps = {
  onNavigateHome?: () => void;
  onNavigateWhy?: () => void;
  onNavigatePosters?: () => void;
};

type QuarterCard = {
  key: "q1" | "q2" | "q3" | "q4";
  title: string;
  dates: string;
  focus: string;
  toolFocus: string;
  miniThemes: string[];
  body: string;
  href: string;
};

const quarterCards: QuarterCard[] = [
  {
    key: "q1",
    title: "Quarter 1 - Know Yourself",
    dates: "Aug 6 to Oct 8, 2026",
    focus: "Portable learner profile and personalized learning agent",
    toolFocus: "Drive, Calendar, email, Gemini, profile files, screenshots, and a simple pass-path spreadsheet model",
    miniThemes: [
      "What are we measuring? Self-data, scales, units, and meaning",
      "Misleading visuals, claims, and AI confidence",
    ],
    body:
      "Students build a portable profile of how they learn, what helps, what gets in the way, and what kind of support they need. They use that evidence to create, test, and revise a personalized learning agent or structured support workflow.",
    href: "#/quarter-1",
  },
  {
    key: "q2",
    title: "Quarter 2 - Track Yourself",
    dates: "Oct 19 to Dec 17, 2026",
    focus: "Self-tracking, time use, survey/data analysis, and pattern finding",
    toolFocus: "Google Forms and Sheets for collecting, cleaning, displaying, and explaining real data",
    miniThemes: ["Sampling, bias, and bad survey questions", "Correlation vs causation"],
    body:
      "Students collect real data, organize it, create a useful display, and make one honest claim about what the data shows. The work stays tight: one question, one manageable dataset, one supported claim, and one clear limitation.",
    href: "#/quarter-2",
  },
  {
    key: "q3",
    title: "Quarter 3 - Build a Decision Tool / App",
    dates: "Jan 6 to Mar 11, 2027",
    focus: "Student-built decision tool, app-like workflow, or Gem",
    toolFocus: "Gemini, Docs, Sheets, Slides, Forms, or structured workflows that make decision logic visible",
    miniThemes: ["Risk, cost, and uncertainty", "Model assumptions, weighting, and sensitivity"],
    body:
      "Students build a tool that helps a real user compare options, weigh criteria, see tradeoffs, test the logic, and reach a clearer recommendation. The point is not coding prestige. The point is a useful decision process that can be explained, tested, and improved.",
    href: "#/quarter-3",
  },
  {
    key: "q4",
    title: "Quarter 4 - Don't Get Played",
    dates: "Mar 22 to May 24, 2027",
    focus: "Short anti-BS, media/data reasoning unit",
    toolFocus: "Search, source checks, screenshots, Docs/Slides, and AI as a critique assistant rather than an answer machine",
    miniThemes: [
      "Claim/evidence critique and misleading displays",
      "Causation, sampling, risk, source trust, and reasonable belief",
    ],
    body:
      "Students practice reading claims, graphs, statistics, sources, and AI output more carefully. The year closes with practical skepticism: what should a reasonable person believe, question, or reject?",
    href: "#/quarter-4",
  },
];

function CourseOverview({ onNavigateHome, onNavigateWhy, onNavigatePosters }: CourseOverviewProps) {
  const goHome = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    if (onNavigateHome) {
      onNavigateHome();
      return;
    }

    window.location.hash = "#/";
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

  const goPosters = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    if (onNavigatePosters) {
      onNavigatePosters();
      return;
    }

    window.location.hash = "#/classroom-posters";
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="overview-site-shell">
      <a className="overview-skip-link" href="#overview-main-content">
        Skip to main content
      </a>

      <header className="overview-site-header overview-hero">
        <div className="overview-topbar overview-wrap">
          <a className="overview-brand" href="#/" onClick={goHome}>
            <span className="overview-brand-mark">AQR</span>
            <span className="overview-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="overview-topnav" aria-label="Course Overview navigation" role="navigation">
            <a href="#/" onClick={goHome}>Home</a>
            <a href="#/why-aqr" onClick={goWhy}>Why AQR</a>
            <a href="#/course-overview" aria-current="page">Course Overview</a>
            <a href="#/classroom-posters" onClick={goPosters}>Posters</a>
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
              <h2 id="overview-basics-title">One year arc, four project families, and a visible path through the work.</h2>
              <p>
                AQR is a math elective for grades 11-12 and may count toward the fourth-year math requirement.
                It is designed as a serious math option for students who want math to connect more clearly
                to real decisions, data, tools, and communication.
              </p>
              <p>
                The course uses one common backbone with different levels of support, challenge, and independence.
                Students work toward real artifacts, show progress through checkpoints, and revise based on evidence.
              </p>
              <p>
                Each quarter has one main project family and two sequential quantitative-reasoning focus windows.
                The focus windows appear through warm-ups, short investigations, small artifacts, project prompts,
                and checkpoints rather than becoming separate full units.
              </p>
            </div>
            <div className="overview-facts-panel">
              <p className="overview-panel-label">Course facts</p>
              <ul className="overview-facts-list">
                <li><strong>Credit:</strong> Math elective</li>
                <li><strong>Counts toward:</strong> 4th-year math pathway</li>
                <li><strong>Grades:</strong> 11-12</li>
                <li><strong>Prerequisite:</strong> Integrated 2 / Geometry or teacher recommendation</li>
                <li><strong>Format:</strong> Project-based with checkpoints, artifacts, testing, and revision</li>
                <li><strong>Tools:</strong> Google Workspace, Gemini, and source-grounded workflows</li>
                <li><strong>Course lanes:</strong> Supported pass path, standard successful work, and extension opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="overview-section overview-section-black" aria-labelledby="overview-quarters-title">
          <div className="overview-wrap">
            <div className="overview-section-head">
              <p className="overview-section-kicker">Quarter structure</p>
              <h2 id="overview-quarters-title">Know yourself. Track yourself. Build a decision tool. Don&apos;t get played.</h2>
              <p className="overview-section-intro">
                The year moves from self-knowledge and personalized support, to real data, to visible decision logic,
                to practical skepticism about claims, graphs, statistics, sources, AI output, and evidence.
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
                    >
                      <p className="overview-card-kicker">{quarter.title.split(" - ")[0]}</p>
                      <h3 id={headingId} className="overview-quarter-card-title">{quarter.title}</h3>
                      <p id={metaId} className="overview-quarter-card-dates">{quarter.dates}</p>
                      <p id={focusId} className="overview-quarter-card-focus">
                        <strong>Main project:</strong> {quarter.focus}
                      </p>
                      <p className="overview-quarter-card-tools">
                        <strong>Tool focus:</strong> {quarter.toolFocus}
                      </p>
                      <div className="overview-quarter-card-mini" role="group" aria-label={`${quarter.title} mini-themes`}>
                        <strong>Focus windows:</strong>
                        <ul className="overview-chip-list">
                          {quarter.miniThemes.map((theme) => (
                            <li key={theme}>{theme}</li>
                          ))}
                        </ul>
                      </div>
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
