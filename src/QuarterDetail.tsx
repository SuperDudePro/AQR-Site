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
    focus: "AI-supported study/help tools and class-support tools",
    purpose:
      "Quarter 1 establishes the course culture, tool norms, approval routines, and first useful AQR artifact. Students learn how to use school-approved tools responsibly while building something that helps with real class work or a real personal school need.",
    fit:
      "The point is not to make a flashy AI product. The point is to build a practical support tool, explain how it helps, and show that the source material and workflow are trustworthy enough to use.",
    plainLanguage:
      "Students learn how this class works, how to use AI and Google tools without outsourcing their thinking, and how to build one useful support system they can actually revise and use.",
    studentWork: [
      "a learner or support-needs profile",
      "a school-tool workflow for getting useful help, feedback, or explanations",
      "a source-grounded study/help tool or class-support tool",
      "a short test-and-revision note explaining what improved",
    ],
    mathFocus: [
      "organizing information so it can be used",
      "identifying quantities, units, comparisons, and relationships",
      "checking whether a visual or number is trying to mislead",
      "explaining a tool's usefulness in plain language",
    ],
    miniThemes: [
      {
        title: "Misleading graphs / visual tricks",
        question: "What is the visual trying to make me believe?",
        description:
          "Students practice reading displays carefully so they notice scale choices, missing context, and visual tricks before trusting a graph.",
      },
      {
        title: "Units, quantities, and what is being measured",
        question: "What exactly is being counted, measured, compared, or converted?",
        description:
          "Students learn to slow down around units, denominators, rates, labels, and reasonableness before treating a number as meaningful.",
      },
    ],
    closing:
      "By the end of Q1, students should have a useful artifact, a clearer sense of how they work, and a better understanding of how tools can support thinking without replacing it.",
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
      "separating association from proof of cause",
    ],
    miniThemes: [
      {
        title: "Correlation vs causation",
        question: "What is actually proven here?",
        description:
          "Students look at patterns in student data, surveys, and media claims and practice saying what the evidence can and cannot prove.",
      },
      {
        title: "Sampling, bias, and bad survey questions",
        question: "Who is included, who is missing, and why does that matter?",
        description:
          "Students examine survey design, biased questions, response bias, and the limits of data collected from a small or uneven group.",
      },
    ],
    closing:
      "By the end of Q2, students should be able to make a supported claim from data and be honest about the limitations, bias, or uncertainty around that claim.",
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
      "This is no longer a business-modeling quarter. The central question is whether the tool makes a real decision clearer by showing options, criteria, tradeoffs, assumptions, and reasons.",
    plainLanguage:
      "Students build a tool that helps someone decide. The tool does not need to be fancy, but its logic has to be visible and it has to survive at least one real test and revision.",
    studentWork: [
      "one clear decision question for a real or realistic user",
      "a comparison of options, criteria, and tradeoffs",
      "a visible rule set, prompt structure, or decision logic",
      "a tested and revised recommendation workflow",
    ],
    mathFocus: [
      "defining variables, criteria, and constraints",
      "weighting or prioritizing what matters",
      "testing how sensitive a recommendation is to changed inputs",
      "using evidence and assumptions responsibly",
    ],
    miniThemes: [
      {
        title: "Risk and uncertainty",
        question: "How sure are we, and what could go wrong?",
        description:
          "Students practice using confidence language, risk checks, likely failure cases, and simple probability or consequence thinking when decisions are uncertain.",
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
      "bias, sampling, or source-trust notes",
      "a final explanation of what a reasonable person should believe or question",
    ],
    mathFocus: [
      "reading claims before reacting to them",
      "checking evidence, sources, samples, and displays",
      "spotting weak comparisons and overclaims",
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
              <p className="quarter-section-kicker">Recurring QR lenses</p>
              <h2 id="quarter-lenses-title">Two short-focus themes run alongside the main project.</h2>
              <p>
                These are not separate full units. They show up through warm-ups, short examples,
                quick investigations, small artifacts, and project-connected questions.
              </p>
            </div>
            <div className="quarter-lens-grid">
              {detail.miniThemes.map((theme) => (
                <article className="quarter-lens-card" key={theme.title}>
                  <p className="quarter-card-kicker">Mini-theme lens</p>
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
