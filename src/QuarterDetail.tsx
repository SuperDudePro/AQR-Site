import type { MouseEvent } from "react";
import "./QuarterDetail.css";

type QuarterPageKey = "q1" | "q2" | "q3" | "q4";

type QuarterDetailProps = {
  quarter: QuarterPageKey;
  onNavigateHome?: () => void;
  onNavigateOverview?: () => void;
};

type MiniTheme = {
  title: string;
  question: string;
  description: string;
};

type QuarterDetailRecord = {
  key: QuarterPageKey;
  title: string;
  navLabel: string;
  dates: string;
  focus: string;
  purpose: string;
  fit: string;
  plainLanguage: string;
  studentWork: string[];
  mathFocus: string[];
  miniThemes: MiniTheme[];
  closing: string;
  href: string;
};

const quarterDetails: Record<QuarterPageKey, QuarterDetailRecord> = {
  q1: {
    key: "q1",
    title: "Quarter 1 — Know Yourself",
    navLabel: "Quarter 1",
    dates: "Aug 6 to Oct 8, 2026",
    focus: "Portable learner profile and personalized learning agent",
    purpose:
      "Quarter 1 establishes the course culture, tool norms, pass-path expectations, and first major AQR build. Students gather evidence about how they learn, what helps, what creates friction, and what kind of support they need.",
    fit:
      "The learner profile is the source material for the tool. Students use it to create a personalized learning agent, Gemini workflow, Gem, NotebookLM workflow if approved, or structured fallback support system. The goal is useful customization, not a generic chatbot.",
    plainLanguage:
      "Students figure out what kind of help actually works for them, build that knowledge into a reusable profile, and use it to create a support tool they can test and improve.",
    studentWork: [
      "a simple pass-path spreadsheet model",
      "a portable learner profile built from surveys, inventories, reflections, and self-data",
      "personalized learning-agent instructions tied to profile evidence",
      "a working support tool or structured fallback workflow",
      "one real test, one revision, and a short explanation of what changed",
    ],
    mathFocus: [
      "modeling the pass path and testing scenarios in a simple spreadsheet",
      "interpreting self-data without confusing confidence, preference, habit, mood, and ability",
      "questioning what a scale, survey, or rating actually measures",
      "organizing evidence into a usable profile",
      "testing and revising a tool based on evidence",
    ],
    miniThemes: [
      {
        title: "What are we measuring? Self-data, scales, units, and meaning",
        question: "What exactly is being measured, counted, rated, or compared?",
        description:
          "Students examine the meaning and limits of their own survey results, ratings, comfort checks, and self-data before using those results to make decisions about support.",
      },
      {
        title: "Misleading visuals, claims, and AI confidence",
        question: "What is this trying to make me believe?",
        description:
          "Students check graph tricks, dashboard claims, fake precision, and confident AI output while they build and test their learning agents.",
      },
    ],
    closing:
      "By the end of Q1, students should have a portable learner profile, a useful personalized support workflow, real proof-of-progress habits, and evidence that testing changed the tool.",
    href: "#/quarter-1",
  },
  q2: {
    key: "q2",
    title: "Quarter 2 — Track Yourself",
    navLabel: "Quarter 2",
    dates: "Oct 19 to Dec 17, 2026",
    focus: "Self-tracking, time use, survey/data analysis, and pattern finding",
    purpose:
      "Quarter 2 is the data quarter. Students collect, clean, display, and interpret real information tied to their own lives, habits, time use, or a bounded class-approved question.",
    fit:
      "The goal is one honest data story: a clear question, real collected data, at least one useful display, one supported claim, and a careful explanation of what the data does and does not prove.",
    plainLanguage:
      "Students stop guessing and start measuring. They use their own data or class data to find patterns, make a claim, and explain the limits of that claim.",
    studentWork: [
      "a simple tracking system or class-approved survey",
      "a cleaned dataset in a manageable format",
      "a chart, table, or summary that reveals a pattern",
      "a short data story with one supported claim and one limitation",
    ],
    mathFocus: [
      "collecting and organizing real data",
      "choosing displays that match the data",
      "summarizing patterns without overstating them",
      "identifying sample, bias, and measurement problems",
      "separating association from proof of cause",
    ],
    miniThemes: [
      {
        title: "Sampling, bias, and bad survey questions",
        question: "Who is included, who is missing, and why does that matter?",
        description:
          "Students examine survey design, biased questions, response bias, and the limits of data collected from a small or uneven group before they make claims.",
      },
      {
        title: "Correlation vs causation",
        question: "What is actually proven here?",
        description:
          "Students look at patterns in student data, surveys, and media claims and practice saying what the evidence can and cannot prove.",
      },
    ],
    closing:
      "By the end of Q2, students should be able to make a supported claim from data and be honest about the limitations, bias, uncertainty, or alternative explanations around that claim.",
    href: "#/quarter-2",
  },
  q3: {
    key: "q3",
    title: "Quarter 3 — Build a Decision Tool / App",
    navLabel: "Quarter 3",
    dates: "Jan 6 to Mar 11, 2027",
    focus: "Student-built decision tool, app-like workflow, or Gem",
    purpose:
      "Quarter 3 is the second major build quarter. Students create a decision-support tool, app-like workflow, or Gem that helps a real user compare options and make a clearer recommendation.",
    fit:
      "The central question is whether the tool makes a real decision clearer by showing options, criteria, tradeoffs, costs, risks, assumptions, and reasons. The interface can stay simple as long as the logic is visible and testable.",
    plainLanguage:
      "Students build a tool that helps someone decide. The tool does not need to be fancy, but its reasoning has to be visible and it has to survive at least one real test and revision.",
    studentWork: [
      "one clear decision question for a real or realistic user",
      "a comparison of at least three options and three criteria",
      "a visible rule set, criteria table, prompt structure, or decision logic",
      "a risk, cost, or uncertainty check",
      "a tested and revised recommendation workflow",
    ],
    mathFocus: [
      "defining variables, criteria, constraints, and tradeoffs",
      "comparing costs, risks, consequences, and uncertainty",
      "weighting or prioritizing what matters",
      "testing how sensitive a recommendation is to changed inputs",
      "using evidence and assumptions responsibly",
    ],
    miniThemes: [
      {
        title: "Risk, cost, and uncertainty",
        question: "What could this cost, what could go wrong, and how sure are we?",
        description:
          "Students examine money, time, effort, opportunity cost, failure cases, confidence, and uncertainty before treating a recommendation as settled.",
      },
      {
        title: "Model assumptions, weighting, and sensitivity",
        question: "What rule is driving the answer, and would the answer change if one input changed?",
        description:
          "Students make the tool's logic visible by naming assumptions, setting priorities, checking weights, and testing whether the output still makes sense.",
      },
    ],
    closing:
      "By the end of Q3, students should have a working decision tool and a clear explanation of how it makes a recommendation, what it leaves out, and how testing changed it.",
    href: "#/quarter-3",
  },
  q4: {
    key: "q4",
    title: "Quarter 4 — Don’t Get Played",
    navLabel: "Quarter 4",
    dates: "Mar 22 to May 24, 2027",
    focus: "Short anti-BS, media/data reasoning unit",
    purpose:
      "Quarter 4 is a short senior-ending unit focused on claim reading, evidence checks, misleading displays, source trust, bias, sampling, and practical skepticism.",
    fit:
      "This is not a giant capstone. It is a sharp closing unit where students use the year's thinking tools to decide what a reasonable person should believe, question, or reject.",
    plainLanguage:
      "Students practice not getting played by bad charts, weak evidence, cherry-picked numbers, vague sources, and claims that sound stronger than the data actually supports.",
    studentWork: [
      "short claim and evidence checks",
      "misleading graph or media critiques",
      "bias, sampling, causation, risk, or source-trust notes",
      "a final explanation of what a reasonable person should believe, question, or do next",
    ],
    mathFocus: [
      "reading claims before reacting to them",
      "checking evidence, sources, samples, and displays",
      "spotting weak comparisons and overclaims",
      "distinguishing association from causation",
      "using plain language to explain reasonable belief",
    ],
    miniThemes: [
      {
        title: "Claim/evidence critique and misleading displays",
        question: "What is the claim, what is the evidence, and how might the display be shaping belief?",
        description:
          "Students critique media examples, graphs, infographics, and statistics by separating the claim from the evidence and noticing how design choices shape belief.",
      },
      {
        title: "Synthesis: causation, sampling, risk, source trust, and reasonable belief",
        question: "What should a reasonable person believe, question, or do next?",
        description:
          "Students bring back the year's main reasoning moves and use them together to make careful judgments about real-world claims.",
      },
    ],
    closing:
      "By the end of Q4, students should leave with a sharper filter for graphs, statistics, claims, AI output, and public arguments they will keep seeing after high school.",
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

    window.location.hash = "#/";
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
          <a className="quarter-brand" href="#/" onClick={goHome}>
            <span className="quarter-brand-mark">AQR</span>
            <span className="quarter-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="quarter-topnav" aria-label="Quarter page navigation">
            <a href="#/" onClick={goHome}>Home</a>
            <a href="#/course-overview" onClick={goOverview}>Course Overview</a>
            <a href="#/classroom-posters">Posters</a>
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
              <p className="quarter-panel-label">In plain language</p>
              <p>{detail.plainLanguage}</p>
            </aside>
          </div>
        </section>

        <section className="quarter-section quarter-section-black" aria-labelledby="quarter-work-title">
          <div className="quarter-wrap">
            <div className="quarter-section-head">
              <p className="quarter-section-kicker">What students do</p>
              <h2 id="quarter-work-title">The quarter stays practical and artifact-based.</h2>
              <p>{detail.closing}</p>
            </div>
            <div className="quarter-detail-grid">
              <article className="quarter-detail-card">
                <p className="quarter-card-kicker">Students build</p>
                <ul>
                  {detail.studentWork.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="quarter-detail-card">
                <p className="quarter-card-kicker">Math / QR lift</p>
                <ul>
                  {detail.mathFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="quarter-section quarter-section-silver" aria-labelledby="quarter-lenses-title">
          <div className="quarter-wrap">
            <div className="quarter-section-head quarter-section-head-dark">
              <p className="quarter-section-kicker">Sequential QR focus windows</p>
              <h2 id="quarter-lenses-title">Two short-focus themes support the main project.</h2>
              <p>
                These are not separate full units or two hidden courses running at once. One focus window usually
                carries the first half of the quarter and the second carries the next half, with short callbacks later.
              </p>
            </div>
            <div className="quarter-lens-grid">
              {detail.miniThemes.map((theme) => (
                <article className="quarter-lens-card" key={theme.title}>
                  <p className="quarter-card-kicker">Focus window</p>
                  <h3>{theme.title}</h3>
                  <p className="quarter-lens-question">{theme.question}</p>
                  <p>{theme.description}</p>
                </article>
              ))}
            </div>
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
