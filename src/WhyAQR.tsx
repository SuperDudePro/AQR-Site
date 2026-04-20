import "./WhyAQR.css";

const HOME_PAGE = "?";

const universityLinks = [
  { name: "Stanford", detail: "Applied Quantitative Reasoning is one of Stanford's eight Ways of Thinking / Ways of Doing categories.", href: "https://ways.stanford.edu/about/ways-categories/applied-quantitative-reasoning-aqr" },
  { name: "Harvard", detail: "Harvard requires one course in Quantitative Reasoning with Data.", href: "https://qrd.college.harvard.edu/requirement/" },
  { name: "Yale", detail: "Yale requires two course credits in quantitative reasoning.", href: "https://catalog.yale.edu/dus/distributional-requirements/quantitative-reasoning-courses/" },
  { name: "Michigan", detail: "Michigan includes a Quantitative Reasoning requirement.", href: "https://lsa.umich.edu/lsa/academics/lsa-requirements/quantitative-reasoning-requirement.html" },
  { name: "Notre Dame", detail: "Notre Dame includes Quantitative Reasoning in its core curriculum.", href: "https://corecurriculum.nd.edu/our-core-curriculum/ways-of-knowing/quantitative-reasoning/" },
  { name: "CSU", detail: "The California State University GE pattern includes Mathematics / Quantitative Reasoning.", href: "https://www.calstate.edu/csu-system/administration/academic-and-student-affairs/academic-programs-innovation-and-faculty-development/program-development/Pages/csu-general-education.aspx" },
];

const workItems = [
  "Read data and graphs clearly",
  "Compare tradeoffs and options",
  "Work with digital tools",
  "Judge evidence and claims",
  "Make decisions under uncertainty",
  "Communicate reasoning clearly",
];

const sourceLinks = [
  ["Stanford Applied Quantitative Reasoning", "https://ways.stanford.edu/about/ways-categories/applied-quantitative-reasoning-aqr"],
  ["Harvard Quantitative Reasoning with Data", "https://qrd.college.harvard.edu/requirement/"],
  ["Yale Quantitative Reasoning Courses", "https://catalog.yale.edu/dus/distributional-requirements/quantitative-reasoning-courses/"],
  ["Michigan Quantitative Reasoning Requirement", "https://lsa.umich.edu/lsa/academics/lsa-requirements/quantitative-reasoning-requirement.html"],
  ["Notre Dame Quantitative Reasoning", "https://corecurriculum.nd.edu/our-core-curriculum/ways-of-knowing/quantitative-reasoning/"],
  ["California State University General Education", "https://www.calstate.edu/csu-system/administration/academic-and-student-affairs/academic-programs-innovation-and-faculty-development/program-development/Pages/csu-general-education.aspx"],
  ["World Economic Forum — Future of Jobs 2025", "https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/"],
  ["NACE Career Readiness Competencies", "https://www.naceweb.org/career-readiness/competencies/career-readiness-defined/"],
] as const;

function WhyAQR() {
  return (
    <main className="why-page-shell">
      <section className="why-hero" id="top">
        <header className="why-topbar">
          <a className="why-brand" href={HOME_PAGE} aria-label="Back to AQR home">
            <span className="why-brand-mark">AQR</span>
            <span className="why-brand-name">Applied Quantitative Reasoning</span>
          </a>
          <nav className="why-nav" aria-label="Page navigation">
            <a href={HOME_PAGE}>Home</a>
            <a href="#pathway">Pathway</a>
            <a href="#colorado">Colorado</a>
            <a href="#sources">Sources</a>
          </nav>
        </header>

        <div className="why-hero-inner">
          <p className="why-kicker">Why AQR</p>
          <h1>Serious math for real decisions.</h1>
          <p className="why-hero-lead">
            Applied Quantitative Reasoning is built for students who want math to connect
            to life, work, information, and the choices they actually have to make.
          </p>
          <div className="why-actions">
            <a className="why-button why-button-primary" href="#pathway">Read the case</a>
            <a className="why-button why-button-secondary" href={HOME_PAGE}>Back to home</a>
          </div>
        </div>
      </section>

      <section className="why-section why-section-silver" id="pathway">
        <div className="why-wrap why-grid">
          <div>
            <p className="why-kicker">A real pathway in modern mathematics</p>
            <h2>AQR belongs to something bigger.</h2>
            <p>
              AQR belongs to a broader and increasingly important family of mathematics often called
              <strong> quantitative reasoning</strong>: work centered on data, modeling, evidence,
              uncertainty, decision-making, and practical application. This is a legitimate academic path.
            </p>
            <p>
              That path already shows up at major universities, and not as a side note. It shows up as
              required work, recognized coursework, and a real part of what colleges now expect educated
              students to be able to do.
            </p>
          </div>
          <div className="why-card-grid">
            {universityLinks.map((item) => (
              <a key={item.name} className="why-uni-card" href={item.href} target="_blank" rel="noreferrer">
                <span className="uni-name">{item.name}</span>
                <span>{item.detail}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section why-section-black" id="colorado">
        <div className="why-wrap why-grid why-grid-wide">
          <div>
            <p className="why-kicker">Colorado is moving this way too</p>
            <h2>Three advanced pathways. One clear fit.</h2>
            <p>
              Colorado's draft high school math standards identify three advanced pathways in the later years
              of high school: quantitative reasoning, statistics, and advanced algebra/calculus.
            </p>
            <p>
              The Quantitative Reasoning Pathway is for students who want to connect mathematical concepts with
              practical applications, justify their reasoning, and evaluate quantitative arguments. That matters.
              It means this direction is not random, local, or made up. It is part of where serious math education
              is already going.
            </p>
          </div>
          <div className="why-callout-panel">
            <p className="callout-label">What AQR prepares students to do</p>
            <p>
              Most high school math courses are not designed primarily to prepare students for the Quantitative
              Reasoning Pathway. AQR is. It gives students practice with the kind of thinking they will meet later
              in college, in work, and in adult life.
            </p>
          </div>
        </div>
      </section>

      <section className="why-section why-section-silver">
        <div className="why-wrap why-grid why-grid-image">
          <div>
            <p className="why-kicker">What students do in AQR</p>
            <h2>Real inputs. Real data. Real decisions.</h2>
            <p>
              Students work with real inputs, real data, and real artifacts. They track time and habits,
              analyze patterns, build decision tools, and learn how to evaluate claims, graphs, comparisons,
              and evidence. The goal is to help students get better at making sense of the world and making
              decisions with clearer reasoning.
            </p>
            <p>
              AQR is built with one common course structure and room for different levels of support,
              challenge, and independence. More specific details about the year structure are linked on the main course page.
            </p>
          </div>
          <div className="why-image-card">
            <img src="/AQR_What_Students_Do_Banner.png" alt="AQR students comparing options, analyzing patterns, evaluating claims, and making real decisions" />
          </div>
        </div>
      </section>

      <section className="why-section why-section-graphite">
        <div className="why-wrap why-grid why-grid-wide">
          <div>
            <p className="why-kicker">Why this matters beyond school</p>
            <h2>These are the skills real life keeps asking for.</h2>
            <p>
              Many jobs now ask people to read data, compare tradeoffs, work with technology,
              judge evidence, and make decisions under uncertainty. The World Economic Forum identifies
              analytical thinking as the top core skill for employers and points to AI and data skills as the
              fastest-growing skill areas over the next five years.
              NACE includes Critical Thinking and Technology among its career-readiness competencies.
            </p>
            <p>
              This matters well beyond STEM. It matters in business, health care, education, public policy, logistics,
              marketing, entrepreneurship, and any field where people need to interpret information and make sound decisions.
            </p>
          </div>
          <div className="why-list-panel">
            <p className="callout-label">What this work actually asks people to do</p>
            <ul>
              {workItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="why-section why-section-dark">
        <div className="why-wrap why-grid why-grid-wide">
          <div>
            <p className="why-kicker">A strong fourth-year math route</p>
            <h2>Another serious route through mathematics.</h2>
            <p>
              None of this is an argument against traditional math. Traditional math still matters, especially for students
              heading into fields that require that route. But it is not the only serious endpoint for high school mathematics.
            </p>
            <p>
              AQR is another strong route: one that emphasizes reasoning, interpretation, modeling, communication,
              technology, and decision-making. That is why universities recognize quantitative reasoning, why Colorado is naming it,
              and why employers increasingly value it.
            </p>
          </div>
          <div className="why-bottom-callout">
            <p className="callout-label">The bottom line</p>
            <p>AQR is for students who want mathematics to <strong>do something</strong>.</p>
            <p>It is for students who want math to connect to real choices, real information, and real life.</p>
          </div>
        </div>
      </section>

      <section className="why-section why-section-black" id="sources">
        <div className="why-wrap why-sources-wrap">
          <p className="why-kicker">Sources</p>
          <h2>Reference links</h2>
          <div className="why-sources-grid">
            {sourceLinks.map(([label, href]) => (
              <a key={label} className="why-source-link" href={href} target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhyAQR;
