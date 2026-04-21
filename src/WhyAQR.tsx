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
            <button onClick={() => scrollToId("beyond-school")}>Beyond School</button>
          </nav>
        </header>

        <div className="why-wrap why-hero-inner">
          <p className="why-kicker">Why AQR</p>
          <h1>Applied Quantitative Reasoning is serious math for real decisions.</h1>
          <p className="why-hero-lead">
            AQR is a project-based fourth-year math option built around real decisions,
            real data, real tools, and real communication.
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

      <section className="why-section why-section-dark" id="pathway">
        <div className="why-wrap why-grid">
          <div>
            <p className="why-section-kicker">A real pathway in modern mathematics</p>
            <h2>AQR belongs to a real and growing kind of math.</h2>
            <p>
              Applied Quantitative Reasoning belongs to a broader and increasingly important family of mathematics often called
              quantitative reasoning: work centered on data, modeling, evidence, uncertainty, decision-making, and practical application.
            </p>
            <p>
              That path already shows up at major universities. Stanford includes Applied Quantitative Reasoning as one of its eight
              Ways of Thinking / Ways of Doing categories. Harvard requires one course in Quantitative Reasoning with Data. Yale requires
              two course credits in quantitative reasoning. Michigan has a Quantitative Reasoning requirement. Notre Dame includes
              Quantitative Reasoning in its core curriculum.
            </p>
            <p>
              And it is not limited to a small handful of elite schools. Quantitative reasoning also shows up in broader college frameworks,
              including the California State University general education pattern.
            </p>
          </div>
          <aside className="why-quote-panel">
            <p>
              “This is a legitimate academic path.”
            </p>
          </aside>
        </div>
      </section>

      <section className="why-section why-section-silver" id="colorado">
        <div className="why-wrap why-grid">
          <div>
            <p className="why-section-kicker">Colorado is moving this way too</p>
            <h2>Colorado now names this direction explicitly.</h2>
            <p>
              Colorado’s draft high school math standards identify three advanced pathways in the later years of high school:
              quantitative reasoning, statistics, and advanced algebra/calculus.
            </p>
            <p>
              The Quantitative Reasoning Pathway is for students who want to connect mathematical concepts with practical applications,
              justify their reasoning, and evaluate quantitative arguments. The draft also says those pathways are meant to align advanced
              math study with students’ interests and postsecondary plans.
            </p>
            <p>
              That matters. It means this direction is not random, local, or made up. It is part of where serious math education is already going.
              AQR is built to prepare students for that kind of work.
            </p>
          </div>
          <aside className="why-list-panel">
            <p className="why-panel-label">Why this matters</p>
            <ul>
              <li>Quantitative reasoning is named as an advanced pathway.</li>
              <li>Applied work is part of the state-level conversation now.</li>
              <li>AQR is aligned to that pathway on purpose.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="why-section why-section-light" id="what-students-do">
        <div className="why-wrap why-grid why-grid-equal">
          <div>
            <p className="why-section-kicker">What students do in AQR</p>
            <h2>Students work with real inputs, real data, and real artifacts.</h2>
            <p>
              Students track time and habits, analyze patterns, build decision tools, and learn how to evaluate claims,
              graphs, comparisons, and evidence. The goal is to help students get better at making sense of the world and
              making decisions with clearer reasoning.
            </p>
            <p>
              AQR is built with one common course structure and room for different levels of support, challenge, and independence.
              More specific details about the year structure can live on the main course page.
            </p>
          </div>
          <div>
            <p className="why-section-kicker">Preparation for what comes next</p>
            <h2>AQR is a high school course. The point is preparation.</h2>
            <p>
              Most high school math courses are not designed primarily to prepare students for the Quantitative Reasoning Pathway.
              AQR is.
            </p>
            <p>
              It gives students practice with the kind of thinking they will meet later in college, in work, and in adult life:
              weighing options, interpreting information, using digital tools, and making decisions with evidence.
            </p>
          </div>
        </div>
        <div className="why-wrap why-image-wrap">
          <div className="why-image-card">
            <picture className="why-image-picture">
              <source
                type="image/webp"
                srcSet="/AQR_What_Students_Do_Banner-1024.webp 1024w, /AQR_What_Students_Do_Banner-1600.webp 1600w, /AQR_What_Students_Do_Banner.webp 2048w"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1200px"
              />
              <img
                src="/AQR_What_Students_Do_Banner.png"
                alt="AQR students using data, tools, and reasoning to make decisions"
                width={2048}
                height={868}
                decoding="async"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1200px"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="why-section why-section-graphite" id="beyond-school">
        <div className="why-wrap why-grid">
          <div>
            <p className="why-section-kicker">Why this matters beyond school</p>
            <h2>Many jobs now ask people to read data, compare tradeoffs, and make decisions under uncertainty.</h2>
            <p>
              Employers are moving in that direction as well. The World Economic Forum identifies analytical thinking as the top core skill for employers
              and points to AI and data skills as the fastest-growing skill areas over the next five years. NACE includes Critical Thinking and Technology
              among its career-readiness competencies.
            </p>
            <p>
              This matters well beyond STEM. It matters in business, health care, education, public policy, logistics,
              marketing, entrepreneurship, and any field where people need to interpret information and make sound decisions.
            </p>
          </div>
          <aside className="why-callout-panel">
            <p className="why-panel-label">Real-world signal</p>
            <p>
              AQR is built for the kind of work students will actually encounter: evaluating information, using tools well,
              and making thoughtful decisions with evidence.
            </p>
          </aside>
        </div>
      </section>

      <section className="why-section why-section-silver" id="strong-route">
        <div className="why-wrap why-grid">
          <div>
            <p className="why-section-kicker">A strong fourth-year math route</p>
            <h2>None of this is an argument against traditional math.</h2>
            <p>
              Traditional math still matters, especially for students heading into fields that require that route.
              But it is not the only serious endpoint for high school mathematics.
            </p>
            <p>
              AQR is another strong route: one that emphasizes reasoning, interpretation, modeling, communication,
              technology, and decision-making. That is why universities recognize quantitative reasoning,
              why Colorado is naming it, and why employers increasingly value it.
            </p>
          </div>
          <aside className="why-quote-panel">
            <p>
              “That is real math. And it matters.”
            </p>
          </aside>
        </div>
      </section>

      <section className="why-section why-section-black" id="sources">
        <div className="why-wrap why-sources-wrap">
          <p className="why-section-kicker">Sources</p>
          <h2>Links behind the page.</h2>
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
