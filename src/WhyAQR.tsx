import "./WhyAQR.css";

type SourceCard = {
  name: string;
  title: string;
  summary: string;
  href: string;
};

const sourceCards: SourceCard[] = [
  {
    name: "Stanford",
    title: "Applied Quantitative Reasoning is one of Stanford's Ways categories.",
    summary:
      "Stanford names Applied Quantitative Reasoning as a recognized way students use mathematics, data, models, and evidence.",
    href: "https://ways.stanford.edu/about/ways-categories/applied-quantitative-reasoning-aqr",
  },
  {
    name: "Harvard",
    title: "Harvard requires Quantitative Reasoning with Data.",
    summary:
      "Harvard's general education structure includes a quantitative reasoning requirement focused on data and evidence.",
    href: "https://qrd.college.harvard.edu/requirement/",
  },
  {
    name: "Yale",
    title: "Yale College requires quantitative reasoning course credits.",
    summary:
      "Yale College treats quantitative reasoning as part of the broader foundation students need across fields.",
    href: "https://catalog.yale.edu/ycps/yale-college/distributional-requirements/",
  },
  {
    name: "Michigan",
    title: "Michigan has a Quantitative Reasoning requirement.",
    summary:
      "The University of Michigan recognizes quantitative reasoning as a general education requirement for students across disciplines.",
    href: "https://lsa.umich.edu/lsa/academics/lsa-requirements/quantitative-reasoning-requirement.html",
  },
  {
    name: "Notre Dame",
    title: "Notre Dame includes Quantitative Reasoning in its core curriculum.",
    summary:
      "Notre Dame frames quantitative reasoning as part of a core intellectual toolkit, not just a narrow STEM skill.",
    href: "https://corecurriculum.nd.edu/our-core-curriculum/ways-of-knowing/quantitative-reasoning/",
  },
  {
    name: "CSU",
    title: "California State University includes Mathematical Concepts and Quantitative Reasoning in GE.",
    summary:
      "CSU's current general education structure also points toward quantitative reasoning as a durable college-readiness skill.",
    href: "https://transferprograms.calstate.edu/general-education/csu-general-education-ge-requirements",
  },
];

function WhyAQR() {
  return (
    <div className="why-site-shell">
      <a className="why-skip-link" href="#why-main-content">
        Skip to main content
      </a>

      <header className="why-site-header why-hero">
        <div className="why-topbar why-wrap">
          <a className="why-brand" href="#/">
            <span className="why-brand-mark">AQR</span>
            <span className="why-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="why-topnav" aria-label="Why AQR navigation">
            <a href="#/">Home</a>
            <a href="#/course-overview">Course Overview</a>
            <a href="#/classroom-posters">Posters</a>
            <a href="#/why-aqr" aria-current="page">
              Why AQR
            </a>
          </nav>
        </div>
      </header>

      <main className="why-page" id="why-main-content">
        <section className="why-hero why-hero-main" aria-labelledby="why-page-title">
          <div className="why-wrap why-hero-inner">
            <p className="why-kicker">Why AQR</p>
            <h1 id="why-page-title">Applied Quantitative Reasoning is serious math for real decisions.</h1>
            <p className="why-hero-lead">
              AQR is a project-based fourth-year math option built around real decisions, real data,
              real tools, and real communication. It is designed for students who want mathematics
              to connect to life, work, information, and the choices they actually have to make.
            </p>
          </div>
        </section>

        <section className="why-section why-section-silver" aria-labelledby="why-pathway-title">
          <div className="why-wrap why-grid">
            <div className="why-text-dark">
              <p className="why-section-kicker">A real pathway</p>
              <h2 id="why-pathway-title">This direction is not random, local, or fake-easy.</h2>
              <p>
                Quantitative reasoning is a legitimate modern mathematics pathway centered on data,
                modeling, evidence, uncertainty, decision-making, and practical application.
              </p>
              <p>
                The strongest version of AQR is not a watered-down Algebra 2 repeat and not a vague
                life-skills class. It is rigorous through reasoning, communication, evidence, tools,
                artifacts, revision, and judgment.
              </p>
            </div>

            <aside className="why-callout-panel">
              <p className="why-panel-label">AQR in one line</p>
              <p>
                Students use numbers, data, tools, and evidence to make better sense of choices,
                claims, risks, and tradeoffs.
              </p>
            </aside>
          </div>
        </section>

        <section className="why-section why-section-black" aria-labelledby="why-college-title">
          <div className="why-wrap">
            <div className="why-section-head">
              <p className="why-section-kicker">College signal</p>
              <h2 id="why-college-title">Quantitative reasoning already shows up in major college frameworks.</h2>
              <p>
                These links are examples, not name-dropping. They show that quantitative reasoning is
                a recognized academic direction beyond high school.
              </p>
            </div>

            <div className="why-card-grid">
              {sourceCards.map((source) => (
                <a
                  className="why-card"
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={source.name}
                >
                  <p className="why-card-kicker">{source.name}</p>
                  <h3>{source.title}</h3>
                  <p>{source.summary}</p>
                  <span className="why-card-link-text">Open source in a new tab</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section why-section-silver" aria-labelledby="why-colorado-title">
          <div className="why-wrap why-grid">
            <div className="why-text-dark">
              <p className="why-section-kicker">Colorado direction</p>
              <h2 id="why-colorado-title">Colorado is moving toward this kind of math too.</h2>
              <p>
                Colorado's draft high school math standards identify quantitative reasoning,
                statistics, and advanced algebra/calculus as advanced pathways. The QR pathway is
                about connecting mathematics to practical applications, justifying reasoning, and
                evaluating quantitative arguments.
              </p>
            </div>

            <aside className="why-callout-panel">
              <p className="why-panel-label">What students practice</p>
              <ul className="why-check-list">
                <li>tracking and interpreting data</li>
                <li>building and testing decision tools</li>
                <li>critiquing graphs, claims, and evidence</li>
                <li>using AI and Google tools with judgment</li>
                <li>explaining reasoning clearly to a real audience</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="why-section why-section-black" aria-labelledby="why-students-title">
          <div className="why-wrap">
            <div className="why-section-head">
              <p className="why-section-kicker">Student fit</p>
              <h2 id="why-students-title">AQR gives students another serious way to do fourth-year math.</h2>
              <p>
                Traditional math still matters, especially for students heading toward fields that
                require that route. AQR exists for students who need a rigorous, usable pathway
                focused on interpreting information, weighing options, using tools, and making
                defensible decisions.
              </p>
              <p>
                That is real math. It just has a different shape.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="why-footer">
        <div className="why-wrap why-footer-inner">
          <p>
            © 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default WhyAQR;
