import "./WhyAQR.css";

type WhyAQRProps = {
  onNavigateHome?: () => void;
};

const universityLinks = [
  {
    name: "Stanford",
    detail:
      "Applied Quantitative Reasoning is one of Stanford's eight Ways of Thinking / Ways of Doing categories.",
    href: "https://ways.stanford.edu/about/ways-categories/applied-quantitative-reasoning-aqr",
  },
  {
    name: "Harvard",
    detail: "Harvard requires one course in Quantitative Reasoning with Data.",
    href: "https://qrd.college.harvard.edu/requirement/",
  },
  {
    name: "Yale",
    detail: "Yale requires two course credits in quantitative reasoning.",
    href: "https://catalog.yale.edu/dus/distributional-requirements/quantitative-reasoning-courses/",
  },
  {
    name: "Michigan",
    detail: "Michigan has a Quantitative Reasoning requirement.",
    href: "https://lsa.umich.edu/lsa/academics/lsa-requirements/quantitative-reasoning-requirement.html",
  },
  {
    name: "Notre Dame",
    detail: "Notre Dame includes Quantitative Reasoning in its core curriculum.",
    href: "https://corecurriculum.nd.edu/our-core-curriculum/ways-of-knowing/quantitative-reasoning/",
  },
  {
    name: "CSU",
    detail: "The California State University GE pattern includes Mathematics / Quantitative Reasoning.",
    href: "https://www.calstate.edu/csu-system/administration/academic-and-student-affairs/academic-programs-innovation-and-faculty-development/program-development/Pages/csu-general-education.aspx",
  },
];

const workItems = [
  "Read data and graphs clearly",
  "Compare tradeoffs and options",
  "Work with digital tools",
  "Judge evidence and claims",
  "Make decisions under uncertainty",
  "Communicate reasoning clearly",
];

function WhyAQR({ onNavigateHome }: WhyAQRProps) {
  const goHome = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) {
      event.preventDefault();
    }

    if (onNavigateHome) {
      onNavigateHome();
      return;
    }

    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="why-site-shell">
      <a className="why-skip-link" href="#why-main-content">
        Skip to main content
      </a>

      <header className="why-site-header why-hero">
        <div className="why-topbar why-wrap">
          <a className="why-brand" href="#" onClick={goHome}>
            <span className="why-brand-mark">AQR</span>
            <span className="why-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="why-topnav" aria-label="Why AQR navigation" role="navigation">
            <a href="#" onClick={goHome}>Home</a>
            <a href="#pathway">Pathway</a>
            <a href="#colorado">Colorado</a>
            <a href="#students-do">Students</a>
            <a href="#beyond-school">Beyond School</a>
          </nav>
        </div>
      </header>

      <main className="why-page" id="why-main-content">
        <section className="why-hero why-hero-main" id="top" aria-labelledby="why-aqr-title">
          <div className="why-wrap why-hero-inner">
            <p className="why-kicker">Why AQR</p>
            <h1 id="why-aqr-title">Serious math for real decisions.</h1>
            <p className="why-hero-lead">
              Not every student wants the same kind of fourth-year math. Some students want a math course that helps them analyze
              information, compare options, use tools well, question claims, and make sound decisions in the real world. That is what AQR is
              built to do.
            </p>
            <p className="why-hero-lead why-hero-lead-secondary">
              AQR is a project-based fourth-year math option built around real decisions, real data, real tools, and real communication. It is
              designed for students who want mathematics to connect to life, work, information, and the choices they actually have to make.
            </p>
            <div className="why-actions" aria-label="Page actions">
              <a className="why-button why-button-primary" href="#pathway">
                Read the case
              </a>
              <a className="why-button why-button-primary" href="#" onClick={goHome}>
                Back to home
              </a>
            </div>
          </div>
        </section>

        <section className="why-section why-section-silver" id="pathway" aria-labelledby="why-pathway-title">
          <div className="why-wrap why-grid">
            <div className="why-text-dark">
              <p className="why-section-kicker">A real pathway in modern mathematics</p>
              <h2 id="why-pathway-title">AQR belongs to something bigger.</h2>
              <p>
                AQR belongs to a broader and increasingly important family of mathematics often called quantitative reasoning: work centered on
                data, modeling, evidence, uncertainty, decision-making, and practical application. This is a legitimate academic path.
              </p>
              <p>
                That path already shows up at major universities. Stanford includes Applied Quantitative Reasoning as one of its eight Ways of
                Thinking / Ways of Doing categories. Harvard requires one course in Quantitative Reasoning with Data. Yale requires two course
                credits in quantitative reasoning. Michigan has a Quantitative Reasoning requirement. Notre Dame includes Quantitative
                Reasoning in its core curriculum.
              </p>
              <p>
                And it is not limited to a small handful of elite schools. Quantitative reasoning also shows up in broader college frameworks,
                including the California State University general education pattern.
              </p>
            </div>
            <aside className="why-callout-panel why-callout-panel-pathway">
              <p className="why-panel-label">The point</p>
              <p>
                AQR is not an isolated idea. It sits inside a larger movement toward applied quantitative reasoning, data literacy, modeling,
                and decision-making.
              </p>
            </aside>
          </div>
        </section>

        <section className="why-section why-section-graphite" aria-labelledby="why-university-title">
          <div className="why-wrap">
            <div className="why-section-head">
              <p className="why-section-kicker">Recognized by major universities</p>
              <h2 id="why-university-title">This work is already part of serious higher education.</h2>
            </div>
            <div className="why-card-grid">
              {universityLinks.map((item) => (
                <a
                  className="why-card"
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${item.name}: open source in a new tab`}
                >
                  <p className="why-card-name">{item.name}</p>
                  <p>{item.detail}</p>
                  <span className="why-card-link">Open source ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section why-section-black" id="colorado" aria-labelledby="why-colorado-title">
          <div className="why-wrap why-grid why-grid-wide">
            <div>
              <p className="why-section-kicker">Colorado is moving this way too</p>
              <h2 id="why-colorado-title">The state is naming quantitative reasoning directly.</h2>
              <p>
                Colorado’s draft high school math standards identify three advanced pathways in the later years of high school: quantitative
                reasoning, statistics, and advanced algebra/calculus. The Quantitative Reasoning Pathway is for students who want to connect
                mathematical concepts with practical applications, justify their reasoning, and evaluate quantitative arguments. The draft also
                says those pathways are meant to align advanced math study with students’ interests and postsecondary plans.
              </p>
              <p>
                That matters. It means this direction is not random, local, or made up. It is part of where serious math education is already
                going. AQR is built to prepare students for that kind of work.
              </p>
            </div>
            <div className="why-quote-panel why-quote-panel-dark why-quote-panel-colorado">
              <p>
                “The Quantitative Reasoning Pathway is for students who want to connect mathematical concepts with practical applications,
                justify their reasoning, and evaluate quantitative arguments.”
              </p>
            </div>
          </div>
        </section>

        <section className="why-section why-section-silver why-image-section" id="students-image" aria-labelledby="why-students-image-title">
          <div className="why-wrap why-image-section-inner">
            <h2 className="why-visually-hidden" id="why-students-image-title">
              What students do in AQR visual
            </h2>
            <div className="why-image-card">
              <picture className="why-image-picture">
                <source
                  type="image/webp"
                  srcSet="/AQR_What_Students_Do_Banner-1024.webp 1024w, /AQR_What_Students_Do_Banner-1600.webp 1600w, /AQR_What_Students_Do_Banner.webp 2048w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1040px"
                />
                <img
                  src="/AQR_What_Students_Do_Banner.png"
                  alt="AQR students using data, tools, and reasoning to make decisions"
                  width={1855}
                  height={799}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1040px"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="why-section why-section-graphite" id="students-do" aria-labelledby="why-students-title">
          <div className="why-wrap why-copy-block">
            <p className="why-section-kicker">What students do in AQR</p>
            <h2 id="why-students-title">Real inputs. Real data. Real artifacts.</h2>
            <p>
              Students work with real inputs, real data, and real artifacts. They track time and habits, analyze patterns, build decision
              tools, and learn how to evaluate claims, graphs, comparisons, and evidence. The goal is to help students get better at making
              sense of the world and making decisions with clearer reasoning.
            </p>
            <p>
              AQR is built with one common course structure and room for different levels of support, challenge, and independence. More
              specific details about the year structure are linked on the main course page.
            </p>
          </div>
        </section>

        <section className="why-section why-section-black" id="preparation" aria-labelledby="why-preparation-title">
          <div className="why-wrap why-copy-block">
            <p className="why-section-kicker">Preparation for what comes next</p>
            <h2 id="why-preparation-title">Built for college, work, and adult decision-making.</h2>
            <p>AQR at Vista PEAK is a high school course. The point is preparation.</p>
            <p>
              Most high school math courses are not designed primarily to prepare students for the Quantitative Reasoning Pathway. AQR is. It
              gives students practice with the kind of thinking they will meet later in college, in work, and in adult life: weighing options,
              interpreting information, using digital tools, and making decisions with evidence.
            </p>
          </div>
        </section>

        <section className="why-section why-section-silver" id="beyond-school" aria-labelledby="why-beyond-school-title">
          <div className="why-wrap why-grid why-grid-wide">
            <div className="why-text-dark">
              <p className="why-section-kicker">Why this matters beyond school</p>
              <h2 id="why-beyond-school-title">Modern work keeps moving toward this kind of math.</h2>
              <p>
                Many jobs now ask people to read data, compare tradeoffs, work with technology, judge evidence, and make decisions under
                uncertainty. Employers are moving in that direction as well. The World Economic Forum identifies analytical thinking as the top
                core skill for employers and points to AI and data skills as the fastest-growing skill areas over the next five years. NACE
                includes Critical Thinking and Technology among its career-readiness competencies.
              </p>
              <p>
                This matters well beyond STEM. It matters in business, health care, education, public policy, logistics, marketing,
                entrepreneurship, and any field where people need to interpret information and make sound decisions.
              </p>
            </div>
            <aside className="why-list-panel why-list-panel-work">
              <p className="why-panel-label">What this work actually asks people to do</p>
              <ul>
                {workItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="why-section why-section-graphite" id="strong-route" aria-labelledby="why-route-title">
          <div className="why-wrap why-grid why-grid-wide">
            <div>
              <p className="why-section-kicker">A strong fourth-year math route</p>
              <h2 id="why-route-title">Another serious way to finish high school math.</h2>
              <p>None of this is an argument against traditional math.</p>
              <p>
                Traditional math still matters, especially for students heading into fields that require that route. But it is not the only
                serious endpoint for high school mathematics.
              </p>
              <p>
                AQR is another strong route: one that emphasizes reasoning, interpretation, modeling, communication, technology, and
                decision-making. That is why universities recognize quantitative reasoning, why Colorado is naming it, and why employers
                increasingly value it.
              </p>
            </div>
            <aside className="why-bottom-callout">
              <p className="why-panel-label">The bottom line</p>
              <p>AQR is for students who want mathematics to do something.</p>
              <p>It is for students who want math to connect to real choices, real information, and real life.</p>
              <p>
                It is for students who should leave high school better able to think clearly, use tools well, and make sense of the world
                around them.
              </p>
              <p className="why-bottom-callout-close">That is real math. And it matters.</p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="why-footer">
        <div className="why-wrap why-footer-inner">
          <p>Applied Quantitative Reasoning • Vista PEAK Prep • Site in progress</p>
        </div>
      </footer>
    </div>
  );
}

export default WhyAQR;
