import "./StudentGuide.css";

const sections = [
  {
    id: "ready",
    number: "01",
    title: "Be ready and follow the room",
    lead: "AQR should feel predictable. Students should know where to look, what to do first, and how to get moving without waiting for a private explanation.",
    items: [
      "Check the posted agenda, learning objective, language objective, and current task.",
      "Bring the materials and charged device needed for the day.",
      "Start the entry task, discussion prompt, or checkpoint as directed.",
      "Use the posted locations for supplies, supports, examples, and submission links.",
      "Follow school policy for phones and tardies.",
      "Close class by saving work, submitting visible evidence, and completing the exit routine.",
    ],
  },
  {
    id: "progress",
    number: "02",
    title: "Do real work and show progress",
    lead: "AQR rewards evidence of thinking and movement through a project. Waiting for a perfect final product is not the safest way to pass.",
    items: [
      "Complete the small checkpoints that keep the project moving.",
      "Submit partial but real work instead of disappearing when the full task is not finished.",
      "Use screenshots, drafts, tables, notes, prototypes, and short explanations as proof of progress.",
      "Use the Weekly Catcher to show honest evidence of your work and progress.",
      "Revise after feedback, testing, or a conference.",
      "Use Gemini and other tools for help, not as a replacement for your decisions or explanations.",
      "Keep responsibility for the sources, numbers, claims, and final work you submit.",
    ],
  },
  {
    id: "support",
    number: "03",
    title: "Think, talk, and get support",
    lead: "Students are expected to contribute ideas, listen closely, ask questions, and use the supports that make rigorous work accessible.",
    items: [
      "Restate or summarize another person’s thinking before adding your own.",
      "Agree, disagree, question, or extend an idea with a reason.",
      "Use the vocabulary, sentence starters, visuals, models, translations, and organizers provided.",
      "Respond through writing, speaking, visuals, tables, screenshots, or digital artifacts when the task allows it.",
      "Ask for a conference, model, chunked next step, or clarification before giving up.",
      "Use extension choices to deepen the reasoning, not just add decoration.",
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
          <nav className="guide-topnav" aria-label="Student Guide navigation">
            <a href="/">Home</a>
            <a href="/course-overview">Course Overview</a>
            <a href="/student-guide" aria-current="page">Student Guide</a>
            <a href="/classroom-posters">Posters</a>
          </nav>
        </div>
      </header>

      <main id="guide-main-content">
        <section className="guide-hero">
          <div className="guide-wrap guide-hero-inner">
            <p className="guide-kicker">Student Guide</p>
            <h1>How to work, make progress, and get support in AQR.</h1>
            <p className="guide-hero-lead">One page for the routines, supports, and expectations students actually need. The goal is not more rules. The goal is a class that is clear, usable, and hard to get lost in.</p>
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
