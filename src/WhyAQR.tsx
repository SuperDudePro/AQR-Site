import "./WhyAQR.css";

const goHome = () => {
  window.location.hash = "";
};

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const sources = [
  {
    label: "Stanford Applied Quantitative Reasoning",
    href: "https://ways.stanford.edu/about/ways-categories/applied-quantitative-reasoning-aqr",
  },
  {
    label: "Harvard Quantitative Reasoning with Data",
    href: "https://qrd.college.harvard.edu/requirement/",
  },
  {
    label: "Yale Quantitative Reasoning Requirements",
    href: "https://college.yale.edu/academics/academic-requirements",
  },
  {
    label: "Michigan Quantitative Reasoning Requirement",
    href: "https://lsa.umich.edu/lsa/academics/lsa-requirements/quantitative-reasoning-requirement.html",
  },
  {
    label: "Notre Dame Quantitative Reasoning",
    href: "https://corecurriculum.nd.edu/our-core-curriculum/ways-of-knowing/quantitative-reasoning/",
  },
  {
    label: "Colorado Draft High School Math Standards",
    href: "https://www.cde.state.co.us/standardsandinstruction/cas-ma-912draft-2026",
  },
  {
    label: "World Economic Forum: Future of Jobs",
    href: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/",
  },
  {
    label: "NACE Career Readiness Competencies",
    href: "https://www.naceweb.org/career-readiness/competencies/career-readiness-defined/",
  },
];

function WhyAQR() {
  return (
    <main className="why-page">
      <section className="why-hero">
        <header className="why-topbar why-wrap">
          <button className="why-brand" onClick={goHome}>
            <span className="why-brand-mark">AQR</span>
            <span className="why-brand-name">Applied Quantitative Reasoning</span>
          </button>
          <nav className="why-topnav" aria-label="Why AQR navigation">
            <button onClick={goHome}>Home</button>
            <button onClick={() => scrollToId("pathway")}>Pathway</button>
            <button onClick={() => scrollToId("colorado")}>Colorado</button>
            <button onClick={() => scrollToId("what-students-do")}>Students Do</button>
            <button onClick={() => scrollToId("beyond-school")}>Beyond School</button>
          </nav>
        </header>

        <div className="why-wrap why-hero-inner">
          <p className="why-kicker">Why AQR</p>
          <h1>Applied Quantitative Reasoning is serious math for real decisions.</h1>
          <p className="why-hero-lead">
            Not every student wants the same kind of fourth-year math. Some students want a math course that helps them analyze information,
            compare options, use tools well, question claims, and make sound decisions in the real world. That is what AQR is built to do.
          </p>
          <p className="why-hero-lead why-hero-lead-secondary">
            AQR is a project-based fourth-year math option built around real decisions, real data, real tools, and real communication.
            It is designed for students who want mathematics to connect to life, work, information, and the choices they actually have to make.
          </p>
          <div className="why-actions">
            <button className="why-button why-button-primary" onClick={goHome}>
              Back to home
            </button>
            <button className="why-button why-button-secondary" onClick={() => scrollToId("pathway")}>
              Jump to the argument
            </button>
          </div>
        </div>
      </section>

      <section className="why-section why-section-silver" id="pathway">
        <div className="why-wrap why-grid why-grid-centered">
          <div>
            <p className="why-section-kicker">A real pathway in modern mathematics</p>
            <h2>AQR belongs to a broader and increasingly important family of mathematics often called quantitative reasoning.</h2>
            <p>
              That work centers on data, modeling, evidence, uncertainty, decision-making, and practical application. This is a legitimate academic path.
            </p>
            <p>
              That path already shows up at major universities. Stanford includes Applied Quantitative Reasoning as one of its eight Ways of Thinking / Ways of Doing categories.
              Harvard requires one course in Quantitative Reasoning with Data. Yale requires two course credits in quantitative reasoning.
              Michigan has a Quantitative Reasoning requirement. Notre Dame includes Quantitative Reasoning in its core curriculum.
            </p>
            <p>
              And it is not limited to a small handful of elite schools. Quantitative reasoning also shows up in broader college frameworks,
              including the California State University general education pattern.
            </p>
          </div>
          <aside className="why-quote-panel why-quote-panel-blue">
            <p>“This is a legitimate academic path.”</p>
          </aside>
        </div>
      </section>

      <section className="why-section why-section-graphite why-image-section">
        <div className="why-wrap why-image-section-inner">
          <div className="why-image-card why-image-card-clean">
            <img src="/AQR_What_Students_Do_Banner.png" alt="AQR students using data, tools, and reasoning to make decisions" />
          </div>
        </div>
      </section>

      <section className="why-section why-section-black" id="colorado">
        <div className="why-wrap why-grid">
          <div>
            <p className="why-section-kicker">Colorado is moving this way too</p>
            <h2>Colorado’s draft high school math standards identify three advanced pathways in the later years of high school.</h2>
            <p>
              Those pathways are quantitative reasoning, statistics, and advanced algebra/calculus. The Quantitative Reasoning Pathway is for students who want to connect
              mathematical concepts with practical applications, justify their reasoning, and evaluate quantitative arguments.
            </p>
            <p>
              The draft also says those pathways are meant to align advanced math study with students&apos; interests and postsecondary plans.
            </p>
            <p>
              That matters. It means this direction is not random, local, or made up. It is part of where serious math education is already going.
              AQR is built to prepare students for that kind of work.
            </p>
          </div>
          <aside className="why-list-panel why-list-panel-dark">
            <p className="why-panel-label">Why this matters</p>
            <ul>
              <li>Quantitative reasoning is named as an advanced pathway.</li>
              <li>Applied work is part of the state-level conversation now.</li>
              <li>AQR is built to align with that direction on purpose.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="why-section why-section-silver" id="what-students-do">
        <div className="why-wrap why-grid why-grid-equal">
          <div>
            <p className="why-section-kicker">What students do in AQR</p>
            <h2>Students work with real inputs, real data, and real artifacts.</h2>
            <p>
              They track time and habits, analyze patterns, build decision tools, and learn how to evaluate claims, graphs, comparisons, and evidence.
              The goal is to help students get better at making sense of the world and making decisions with clearer reasoning.
            </p>
            <p>
              AQR is built with one common course structure and room for different levels of support, challenge, and independence.
              More specific details about the year structure are linked on the main course page.
            </p>
          </div>
          <div>
            <p className="why-section-kicker">Preparation for what comes next</p>
            <h2>AQR at Vista PEAK is a high school course. The point is preparation.</h2>
            <p>
              Most high school math courses are not designed primarily to prepare students for the Quantitative Reasoning Pathway. AQR is.
            </p>
            <p>
              It gives students practice with the kind of thinking they will meet later in college, in work, and in adult life:
              weighing options, interpreting information, using digital tools, and making decisions with evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="why-section why-section-graphite" id="beyond-school">
        <div className="why-wrap why-grid">
          <div>
            <p className="why-section-kicker">Why this matters beyond school</p>
            <h2>Many jobs now ask people to read data, compare tradeoffs, work with technology, judge evidence, and make decisions under uncertainty.</h2>
            <p>
              Employers are moving in that direction as well. The World Economic Forum identifies analytical thinking as the top core skill for employers and points to AI and data skills
              as the fastest-growing skill areas over the next five years. NACE includes Critical Thinking and Technology among its career-readiness competencies.
            </p>
            <p>
              This matters well beyond STEM. It matters in business, health care, education, public policy, logistics, marketing, entrepreneurship,
              and any field where people need to interpret information and make sound decisions.
            </p>
          </div>
          <aside className="why-callout-panel">
            <p className="why-panel-label">Real-world signal</p>
            <p>
              AQR is built for the kind of work students will actually encounter: interpreting information, using tools well,
              and making thoughtful decisions with evidence.
            </p>
          </aside>
        </div>
      </section>

      <section className="why-section why-section-black" id="strong-route">
        <div className="why-wrap why-grid">
          <div>
            <p className="why-section-kicker">A strong fourth-year math route</p>
            <h2>None of this is an argument against traditional math.</h2>
            <p>
              Traditional math still matters, especially for students heading into fields that require that route. But it is not the only serious endpoint for high school mathematics.
            </p>
            <p>
              AQR is another strong route: one that emphasizes reasoning, interpretation, modeling, communication, technology, and decision-making.
              That is why universities recognize quantitative reasoning, why Colorado is naming it, and why employers increasingly value it.
            </p>
          </div>
          <aside className="why-quote-panel why-quote-panel-outline">
            <p>AQR is for students who want mathematics to do something.</p>
          </aside>
        </div>
      </section>

      <section className="why-section why-section-silver" id="bottom-line">
        <div className="why-wrap why-bottom-line">
          <p className="why-section-kicker">The bottom line</p>
          <h2>It is for students who want math to connect to real choices, real information, and real life.</h2>
          <p>
            It is for students who should leave high school better able to think clearly, use tools well, and make sense of the world around them.
          </p>
          <p className="why-bottom-line-close">That is real math. And it matters.</p>
        </div>
      </section>

      <section className="why-section why-section-graphite why-sources">
        <div className="why-wrap why-sources-wrap">
          <p className="why-section-kicker">Selected references</p>
          <h2>Outside signals that back up the case for AQR.</h2>
          <div className="why-sources-grid">
            {sources.map((source) => (
              <a key={source.href} className="why-source-link" href={source.href} target="_blank" rel="noreferrer">
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhyAQR;
