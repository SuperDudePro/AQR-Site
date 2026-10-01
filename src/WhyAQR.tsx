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
            <a href="/why-ai">Why AI?</a>
            <a href="#/classroom-posters">Posters</a>
            <a href="#/contact">Contact</a>
            <a href="#/why-aqr" aria-current="page">
              Why AQR
            </a>
          </nav>
        </div>
      </header>

      <main className="why-page" id="why-main-content">
        <section className="why-hero why-hero-main" aria-labelledby="why-page-title">
          <div className="why-wrap why-hero-inner">
            <p className="why-kicker">What is AQR?</p>
            <h1 id="why-page-title">What Is AQR Math? Applied Quantitative Reasoning Explained</h1>
            <p className="why-hero-lead">
              <strong>AQR stands for Applied Quantitative Reasoning.</strong> It is a project-based
              fourth-year high school math class built around real decisions, real data, real tools,
              and real communication. Students use mathematics to analyze information, work with data
              and models, weigh evidence and uncertainty, and make defensible decisions.
            </p>
          </div>
        </section>

        <section className="why-section why-section-silver" aria-labelledby="why-class-title">
          <div className="why-wrap why-grid">
            <div>
              <p className="why-section-kicker">Inside the class</p>
              <h2 id="why-class-title">What do students do in an AQR class?</h2>
              <p>
                AQR uses real contexts to make students practice quantitative reasoning instead of
                treating mathematics as a list of isolated procedures.
              </p>
            </div>
            <aside className="why-callout-panel">
              <ul className="why-check-list">
                <li>work with real data, graphs, statistics, rates, probability, and models</li>
                <li>examine assumptions, risk, uncertainty, and tradeoffs</li>
                <li>build and test decision tools</li>
                <li>evaluate claims and evidence</li>
                <li>use digital and AI tools while remaining responsible for the reasoning</li>
                <li>explain, test, and revise conclusions</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="why-section why-section-black" aria-labelledby="why-pathway-title">
          <div className="why-wrap why-grid">
            <div>
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

        <section className="why-section why-section-silver" aria-labelledby="why-students-title">
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
            <div>
              <p className="why-section-kicker">Colorado standards</p>
              <h2 id="why-colorado-title">Colorado has adopted this kind of math too.</h2>
              <p>
                On May 14, 2026, the Colorado State Board of Education unanimously approved revised
                high school mathematics standards organized around two years of foundational
                mathematics followed by advanced pathways in quantitative reasoning, statistics, and
                advanced algebra/calculus.
              </p>
              <p>
                The Quantitative Reasoning Pathway emphasizes deeper understanding through practical
                applications and using mathematics as a tool for understanding the world. Students
                build on and integrate quantity, algebra, statistics, and geometry when they face
                unfamiliar contexts. The revised standards also place increased attention on modeling
                and technology.
              </p>
              <p>
                The revised standards take effect statewide in the 2028-29 school year after a
                two-year transition.
              </p>
              <a
                className="why-standards-link"
                href="https://ed.cde.state.co.us/fs/resource-manager/view/8f93be6f-603c-494c-bd7a-12ef019547db"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Colorado&apos;s revised high school mathematics standards
              </a>
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

        <section className="why-section why-ai-section" aria-labelledby="why-ai-title">
          <div className="why-wrap">
            <div className="why-ai-heading">
              <p className="why-section-kicker">The AI Question</p>
              <h2 id="why-ai-title">Students should never surrender their thinking to artificial intelligence.</h2>
              <p className="why-ai-lead">
                AI is part of AQR on purpose. Students learn to question it, test it, use it when it helps, and remain responsible for their own understanding and judgment.
              </p>
              <p>
                The goal is not to make student work look smarter. The goal is to help students become more capable. That means learning where AI is useful, where it fails, how to challenge its answers, and when to stop listening to it and think for yourself.
              </p>
              <a className="why-standards-link" href="/why-ai">Read the full AQR position on AI</a>
            </div>
          </div>
        </section>

        <section className="why-section why-section-silver" aria-labelledby="why-faq-title">
          <div className="why-wrap">
            <div className="why-section-head">
              <p className="why-section-kicker">Common questions</p>
              <h2 id="why-faq-title">AQR math: quick answers</h2>

              <h3>What does AQR stand for?</h3>
              <p>Applied Quantitative Reasoning.</p>

              <h3>What is AQR math in high school?</h3>
              <p>
                AQR is a fourth-year high school mathematics option focused on using quantitative
                reasoning, data, models, evidence, and mathematical tools in real decisions and
                unfamiliar situations.
              </p>

              <h3>Is AQR a real math class?</h3>
              <p>
                Yes. The mathematics has a different shape from a traditional Algebra 2 or calculus
                course, but students work with quantities, data, models, statistics, probability,
                rates, measurement, assumptions, uncertainty, and mathematical reasoning.
              </p>

              <h3>Is AQR an easy math class?</h3>
              <p>
                AQR is designed to be accessible, but it is not a non-math or watered-down
                alternative. Students are expected to reason with evidence, use mathematics in
                unfamiliar contexts, explain decisions, test ideas, and revise their work.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="why-footer">
        <div className="why-wrap why-footer-inner">
          <p>
            © 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span> • <a className="site-footer-link" href="#/contact">Contact</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default WhyAQR;
