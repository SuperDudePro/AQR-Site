import type { MouseEvent } from "react";
import "./QuarterDetail.css";

type QuarterPageKey = "q1" | "q2" | "q3" | "q4";

type QuarterDetailProps = {
  quarter: QuarterPageKey;
  onNavigateHome?: () => void;
  onNavigateOverview?: () => void;
};

type QuarterDetailRecord = {
  key: QuarterPageKey;
  title: string;
  navLabel: string;
  dates: string;
  focus: string;
  purpose: string;
  fit: string;
  href: string;
};

const quarterDetails: Record<QuarterPageKey, QuarterDetailRecord> = {
  q1: {
    key: "q1",
    title: "Quarter 1 — Know Yourself",
    navLabel: "Quarter 1",
    dates: "Aug 6 to Oct 8, 2026",
    focus: "AI-supported study/help tools and class-support tools",
    purpose:
      "Quarter 1 establishes course routines, tool norms, approval expectations, and the first useful AQR artifact. It is the opening build quarter, but it is supposed to stay structured and finishable.",
    fit:
      "This quarter introduces how AQR works: real tools, real workflow, and practical mathematical reasoning tied to useful outputs rather than abstract repetition.",
    href: "#/quarter-1",
  },
  q2: {
    key: "q2",
    title: "Quarter 2 — Track Yourself",
    navLabel: "Quarter 2",
    dates: "Oct 19 to Dec 17, 2026",
    focus: "Self-tracking, time use, survey/data analysis, and pattern finding",
    purpose:
      "Quarter 2 is the data quarter. Students collect, clean, display, and interpret real information tied to their own lives or a bounded class-approved question.",
    fit:
      "This is where the course becomes visibly quantitative: organizing data, showing patterns, making claims, and explaining what the data does and does not prove.",
    href: "#/quarter-2",
  },
  q3: {
    key: "q3",
    title: "Quarter 3 — Build a Decision Tool / App",
    navLabel: "Quarter 3",
    dates: "Jan 6 to Mar 11, 2027",
    focus: "Student-built decision tool, app-like workflow, or Gem",
    purpose:
      "Quarter 3 is the second major build quarter. Students make a working tool that helps a user compare options, make tradeoffs, and reach a clearer recommendation.",
    fit:
      "This is not startup theater or coding prestige. The goal is a decision tool that actually works and makes its logic visible.",
    href: "#/quarter-3",
  },
  q4: {
    key: "q4",
    title: "Quarter 4 — Don’t Get Played",
    navLabel: "Quarter 4",
    dates: "Mar 22 to May 24, 2027",
    focus: "Short anti-BS, media/data reasoning unit",
    purpose:
      "Quarter 4 is a short senior-ending unit focused on claim reading, evidence checks, bad graph detection, bias, and practical skepticism.",
    fit:
      "This quarter closes the course by pushing students to read media, numbers, and arguments more carefully and to explain what a reasonable person should trust, question, or reject.",
    href: "#/quarter-4",
  },
};

const quarterNavOrder: QuarterDetailRecord[] = [
  quarterDetails.q1,
  quarterDetails.q2,
  quarterDetails.q3,
  quarterDetails.q4,
];

function QuarterDetail({ quarter, onNavigateHome, onNavigateOverview }: QuarterDetailProps) {
  const detail = quarterDetails[quarter];

  const goHome = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    if (onNavigateHome) {
      onNavigateHome();
      return;
    }

    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const goOverview = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    if (onNavigateOverview) {
      onNavigateOverview();
      return;
    }

    window.location.hash = "#/course-overview";
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="quarter-site-shell">
      <a className="quarter-skip-link" href="#quarter-main-content">
        Skip to main content
      </a>

      <header className="quarter-site-header quarter-hero">
        <div className="quarter-topbar quarter-wrap">
          <a className="quarter-brand" href="#" onClick={goHome}>
            <span className="quarter-brand-mark">AQR</span>
            <span className="quarter-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="quarter-topnav" aria-label="Quarter page navigation">
            <a href="#" onClick={goHome}>Home</a>
            <a href="#/course-overview" onClick={goOverview}>Course Overview</a>
            <a href={detail.href} aria-current="page">{detail.navLabel}</a>
          </nav>
        </div>
      </header>

      <main className="quarter-page" id="quarter-main-content">
        <section className="quarter-hero quarter-hero-main" aria-labelledby="quarter-page-title">
          <div className="quarter-wrap quarter-hero-inner">
            <p className="quarter-kicker">Quarter Page</p>
            <h1 id="quarter-page-title">{detail.title}</h1>
            <h2 className="quarter-hero-lead">{detail.dates}</h2>
            <nav className="quarter-hero-links" aria-label="Jump to a quarter page">
              {quarterNavOrder.map((item) => (
                <a
                  key={item.key}
                  className="quarter-button-nav"
                  href={item.href}
                  aria-current={item.key === quarter ? "page" : undefined}
                >
                  {item.navLabel}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="quarter-section quarter-section-silver" aria-labelledby="quarter-focus-title">
          <div className="quarter-wrap quarter-grid">
            <div className="quarter-text-dark">
              <p className="quarter-section-kicker">Main focus</p>
              <h2 id="quarter-focus-title">{detail.focus}</h2>
              <p>{detail.purpose}</p>
              <p>{detail.fit}</p>
            </div>
            <aside className="quarter-callout-panel">
              <p className="quarter-panel-label">Check back soon</p>
              <p>
                This page is only a shell for now. More details about the sequence, artifacts,
                and internal logic of this quarter will be added soon.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="quarter-footer">
        <div className="quarter-wrap quarter-footer-inner">
          <p>
            © 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default QuarterDetail;
