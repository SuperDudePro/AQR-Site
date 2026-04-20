import "./WhyAQR.css";

type WhyAQRProps = {
  onNavigateHome?: () => void;
};

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function WhyAQR({ onNavigateHome }: WhyAQRProps) {
  const goHome = () => {
    if (onNavigateHome) {
      onNavigateHome();
      return;
    }
    window.location.hash = "";
  };

  return (
    <main className="why-page">
      <section className="why-hero" id="top">
        <header className="why-topbar why-wrap">
          <button className="why-brand" onClick={goHome} type="button">
            <span className="why-brand-mark">AQR</span>
            <span className="why-brand-name">Applied Quantitative Reasoning</span>
          </button>

          <nav className="why-topnav" aria-label="Why AQR navigation">
            <button onClick={goHome} type="button">Home</button>
            <button onClick={() => scrollToId("pathway")} type="button">Pathway</button>
            <button onClick={() => scrollToId("colorado")} type="button">Colorado</button>
            <button onClick={() => scrollToId("students-do")} type="button">Students Do</button>
            <button onClick={() => scrollToId("preparation")} type="button">Preparation</button>
            <button onClick={() => scrollToId("beyond-school")} type="button">Beyond School</button>
            <button onClick={() => scrollToId("bottom-line")} type="button">Bottom Line</button>
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
            AQR is a project-based fourth-year math option built around real decisions, real data, real tools, and real communication. It is
            designed for students who want mathematics to connect to life, work, information, and the choices they actually have to make.
          </p>

          <div className="why-actions">
            <button className="why-button why-button-primary" onClick={goHome} type="button">
              Back to home
            </button>
            <button className="why-button why-button-secondary" onClick={() => scrollToId("pathway")} type="button">
              Jump to the argument
            </button>
          </div>
        </div>
      </section>

      <section className="why-section why-section-silver" id="pathway">
        <div className="why-wrap why-copy-block">
          <p className="why-section-kicker">A real pathway in modern mathematics</p>
          <h2>A real pathway in modern mathematics</h2>
          <p>
            AQR belongs to a broader and increasingly important family of mathematics often called quantitative reasoning: work centered on data,
            modeling, evidence, uncertainty, decision-making, and practical application. This is a legitimate academic path.
          </p>
          <p>
            That path already shows up at major universities. Stanford includes Applied Quantitative Reasoning as one of its eight Ways of
            Thinking / Ways of Doing categories. Harvard requires one course in Quantitative Reasoning with Data. Yale requires two course
            credits in quantitative reasoning. Michigan has a Quantitative Reasoning requirement. Notre Dame includes Quantitative Reasoning in
            its core curriculum.
          </p>
          <p>
            And it is not limited to a small handful of elite schools. Quantitative reasoning also shows up in broader college frameworks,
            including the California State University general education pattern.
          </p>
        </div>
      </section>

      <section className="why-section why-section-graphite why-image-section" id="students-image">
        <div className="why-wrap why-image-section-inner">
          <div className="why-image-card">
            <img
              src="/AQR_What_Students_Do_Banner.png"
              alt="AQR students using data, tools, and reasoning to make decisions"
            />
          </div>
        </div>
      </section>

      <section className="why-section why-section-black" id="colorado">
        <div className="why-wrap why-copy-block">
          <p className="why-section-kicker">Colorado is moving this way too</p>
          <h2>Colorado is moving this way too</h2>
          <p>
            Colorado’s draft high school math standards identify three advanced pathways in the later years of high school: quantitative
            reasoning, statistics, and advanced algebra/calculus. The Quantitative Reasoning Pathway is for students who want to connect
            mathematical concepts with practical applications, justify their reasoning, and evaluate quantitative arguments. The draft also says those pathways are meant to align advanced math study with students’ interests and postsecondary plans.
          </p>
          <p>
            That matters. It means this direction is not random, local, or made up. It is part of where serious math education is already
            going. AQR is built to prepare students for that kind of work.
          </p>
        </div>
      </section>

      <section className="why-section why-section-silver" id="students-do">
        <div className="why-wrap why-copy-block">
          <p className="why-section-kicker">What students do in AQR</p>
          <h2>What students do in AQR</h2>
          <p>
            Students work with real inputs, real data, and real artifacts. They track time and habits, analyze patterns, build decision tools,
            and learn how to evaluate claims, graphs, comparisons, and evidence. The goal is to help students get better at making sense of the
            world and making decisions with clearer reasoning.
          </p>
          <p>
            AQR is built with one common course structure and room for different levels of support, challenge, and independence. More specific
            details about the year structure are linked on the main course page.
          </p>
        </div>
      </section>

      <section className="why-section why-section-graphite" id="preparation">
        <div className="why-wrap why-copy-block">
          <p className="why-section-kicker">Preparation for what comes next</p>
          <h2>Preparation for what comes next</h2>
          <p>AQR at Vista PEAK is a high school course. The point is preparation.</p>
          <p>
            Most high school math courses are not designed primarily to prepare students for the Quantitative Reasoning Pathway. AQR is. It
            gives students practice with the kind of thinking they will meet later in college, in work, and in adult life: weighing options,
            interpreting information, using digital tools, and making decisions with evidence.
          </p>
        </div>
      </section>

      <section className="why-section why-section-black" id="beyond-school">
        <div className="why-wrap why-copy-block">
          <p className="why-section-kicker">Why this matters beyond school</p>
          <h2>Why this matters beyond school</h2>
          <p>
            Many jobs now ask people to read data, compare tradeoffs, work with technology, judge evidence, and make decisions under uncertainty.
            Employers are moving in that direction as well. The World Economic Forum identifies analytical thinking as the top core skill for
            employers and points to AI and data skills as the fastest-growing skill areas over the next five years. NACE includes Critical
            Thinking and Technology among its career-readiness competencies.
          </p>
          <p>
            This matters well beyond STEM. It matters in business, health care, education, public policy, logistics, marketing,
            entrepreneurship, and any field where people need to interpret information and make sound decisions.
          </p>
        </div>
      </section>

      <section className="why-section why-section-silver" id="strong-route">
        <div className="why-wrap why-copy-block">
          <p className="why-section-kicker">A strong fourth-year math route</p>
          <h2>A strong fourth-year math route</h2>
          <p>None of this is an argument against traditional math.</p>
          <p>
            Traditional math still matters, especially for students heading into fields that require that route. But it is not the only serious
            endpoint for high school mathematics.
          </p>
          <p>
            AQR is another strong route: one that emphasizes reasoning, interpretation, modeling, communication, technology, and
            decision-making. That is why universities recognize quantitative reasoning, why Colorado is naming it, and why employers
            increasingly value it.
          </p>
        </div>
      </section>

      <section className="why-section why-section-graphite" id="bottom-line">
        <div className="why-wrap why-copy-block why-bottom-line">
          <p className="why-section-kicker">The bottom line</p>
          <h2>The bottom line</h2>
          <p>AQR is for students who want mathematics to do something.</p>
          <p>It is for students who want math to connect to real choices, real information, and real life.</p>
          <p>
            It is for students who should leave high school better able to think clearly, use tools well, and make sense of the world around
            them.
          </p>
          <p className="why-bottom-line-close">That is real math. And it matters.</p>
        </div>
      </section>
    </main>
  );
}

export default WhyAQR;
