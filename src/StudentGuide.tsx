import ResponsiveNav from "./ResponsiveNav";
import "./StudentGuide.css";

const sections = [
  {
    id: "ready",
    number: "01",
    title: "Be ready and follow the room",
    lead: "AQR should feel predictable. Students should know where to look, what to do first, and how to get moving without waiting for a private explanation.",
    items: [
      "Bring the materials and charged device needed for the day.",
      "Use the First Five to get seated, get set up, and get ready. The First Five is setup time, not the day’s lesson.",
      "Use the day’s Slides, Daily Brief, and Google Classroom materials as the lesson path.",
      "Open the posted examples, files, forms, and submission links when the Slides or Daily Brief direct you there.",
      "Follow school policy for phones and tardies.",
      "Close class by saving work, submitting visible evidence, and completing the exit routine.",
    ],
  },
  {
    id: "progress",
    number: "02",
    title: "Do real work and show progress",
    lead: "AQR rewards demonstrated reasoning, completed assessments, honest evidence, and improvement through feedback. Waiting for a perfect project is not a substitute for submitting the assigned work.",
    items: [
      "Complete the actual Classroom assessments and checkpoints; use the Daily Brief and your Grade Tracker to see what comes next.",
      "Submit partial but real work instead of disappearing when the full task is not finished.",
      "Use screenshots, drafts, tables, notes, prototypes, and short explanations as proof of progress.",
      "Use the Learning Catcher to show honest evidence of your work and progress.",
      "Revise after feedback, testing, or a conference.",
      "Use Gemini and other tools for help, not as a replacement for your decisions or explanations.",
      "Keep responsibility for the sources, numbers, claims, and final work you submit.",
    ],
  },
  {
    id: "ai",
    number: "03",
    title: "Use AI to learn — not to avoid thinking",
    lead: "AI is allowed in AQR because learning how to use powerful tools responsibly is part of the course. The student must still understand, check, explain, and defend the work.",
    items: [
      "Use AI to get another explanation, organize information, brainstorm approaches, recall a method, test an idea, revise, or get unstuck.",
      "Do not submit AI-produced work that you cannot explain, check, defend, or use again.",
      "Stay responsible for every source, number, claim, assumption, choice, and conclusion in the work you submit.",
      "Be ready to explain why you chose an approach, where a number came from, what changed, and what the result means.",
      "Helping you gain understanding is allowed. Doing the thinking for you is failing.",
    ],
  },
  {
    id: "support",
    number: "04",
    title: "Think, talk, and get support",
    lead: "Students are expected to contribute ideas, listen closely, ask questions, and use the supports that make rigorous work accessible.",
    items: [
      "Restate or summarize another person’s thinking before adding your own.",
      "Agree, disagree, question, or extend an idea with a reason.",
      "Use the vocabulary, sentence starters, visuals, models, translations, and organizers provided.",
      "Respond through writing, speaking, visuals, tables, screenshots, or digital artifacts when the task allows it.",
      "When you get stuck, start with the permanent AQR Help Gem to find the right resource, then use that day's Q1D# or Q2D# Help Gem when available. Your classroom work and protected answers stay your responsibility.",
      "If you are still stuck, ask for a conference, model, chunked next step, or clarification before giving up.",
      "Use extension choices to deepen the reasoning, not just add decoration.",
    ],
  },
  {
    id: "graduation",
    number: "05",
    title: "Math graduation option and Q1 recovery",
    lead: "AQR offers two different things: an approved way to demonstrate the district's math graduation competency and an independent route to recover an unsuccessful first quarter.",
    items: [
      "The district-approved AQR Quarter 1 performance task provides a Mathematics Menu of Options pathway. Regular Quarter 2–4 assessments and credit recovery should not be assumed to satisfy that separate requirement.",
      "For the approved performance task, the documented C-level (70%) threshold and separate Infinite Campus recording are required. Passing the AQR course alone is not a Menu of Options record.",
      "Students who did not pass Q1 can complete independent recovery and show their work in a teacher Final Check. Successful Q1 recovery is capped at a D; it does not automatically meet the C-level Menu of Options threshold.",
      "Current AQR students: in Google Classroom, open Classwork → Credit Recovery → AQR Q1 Recovery - Student Start Here. Follow the posted steps and deadline; the Gem Directory is also near the top of Classroom.",
    ],
  },
];

export default function StudentGuide() {
  return (
    <div className="guide-site-shell">
      <a className="guide-skip-link" href="#guide-main-content">Skip to main content</a>
      <header className="guide-site-header">
        <div className="guide-topbar guide-wrap">
          <a className="guide-brand" href="/"><span className="guide-brand-mark">AQR</span><span className="guide-brand-name">Applied Quantitative Reasoning</span></a>
          <ResponsiveNav className="guide-topnav" ariaLabel="Student Guide navigation">
            <a href="/">Home</a><a href="/why-aqr">What is AQR?</a><a href="/why-ai">Why AI?</a>
            <a href="/course-overview">Course Overview</a>
            <a href="/student-guide" aria-current="page">Student Guide</a>
            <a href="/classroom-posters">Posters</a>
          </ResponsiveNav>
        </div>
      </header>

      <main id="guide-main-content">
        <section className="guide-hero">
          <div className="guide-wrap guide-hero-inner">
            <p className="guide-kicker">Student Guide</p>
            <h1>How to work, make progress, and get support in AQR.</h1>
            <p className="guide-hero-lead">One page for the routines, supports, and expectations students actually need. The goal is not more rules. The goal is a class that is clear, usable, and hard to get lost in.</p>
            <p className="guide-hero-lead">Looking for a course page, quarter plan, vocabulary, or classroom poster? <a href="/resources">Find it in the AQR Resource Finder</a>.</p>
            <nav className="guide-jump-links" aria-label="Jump to a guide section">
              {sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.number} {section.title}</a>)}
            </nav>
          </div>
        </section>

        <section className="guide-principles">
          <div className="guide-wrap guide-principles-grid">
            <article><strong>Predictable</strong><span>Know where to look and what happens next.</span></article>
            <article><strong>Belonging</strong><span>Your ideas and perspective are part of the work.</span></article>
            <article><strong>Supported</strong><span>Use scaffolds that help you reach the real task.</span></article>
          </div>
        </section>

        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className={`guide-section ${index % 2 === 0 ? "guide-section-silver" : "guide-section-black"}`} aria-labelledby={`${section.id}-title`}>
            <div className="guide-wrap guide-section-grid">
              <div className="guide-section-copy">
                <p className="guide-section-number">{section.number}</p>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                <p>{section.lead}</p>
              </div>
              <ul className="guide-checklist">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>
        ))}

        <section className="guide-policy-note" aria-labelledby="guide-policy-title">
          <div className="guide-wrap guide-policy-card">
            <p className="guide-kicker">Schoolwide consistency</p>
            <h2 id="guide-policy-title">AQR follows school policy for phones and tardies.</h2>
          </div>
        </section>
      </main>

      <footer className="guide-footer"><div className="guide-wrap"><p>© 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span></p></div></footer>
    </div>
  );
}
