import "./WhyAQR.css";
import "./WhyAI.css";

function WhyAI() {
  return (
    <div className="why-site-shell">
      <a className="why-skip-link" href="#why-ai-main-content">
        Skip to main content
      </a>

      <header className="why-site-header why-hero">
        <div className="why-topbar why-wrap">
          <a className="why-brand" href="/">
            <span className="why-brand-mark">AQR</span>
            <span className="why-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="why-topnav" aria-label="Why AI navigation">
            <a href="/">Home</a>
            <a href="/why-aqr">Why AQR</a>
            <a href="/why-ai" aria-current="page">Why AI?</a>
            <a href="/course-overview">Course Overview</a>
            <a href="/student-guide">Student Guide</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="why-page ai-position-page" id="why-ai-main-content">
        <section className="why-hero why-hero-main ai-position-hero" aria-labelledby="why-ai-page-title">
          <div className="why-wrap why-hero-inner">
            <p className="why-kicker">The AI Question</p>
            <h1 id="why-ai-page-title">Students should never surrender their thinking to artificial intelligence.</h1>
            <p className="why-hero-lead">
              They need to learn what it is good for, where it fails, how to question it, and when they need to stop listening to it and think for themselves.
            </p>
          </div>
        </section>

        <section className="why-section why-section-silver">
          <div className="why-wrap ai-copy ai-copy-dark">
            <p>
              There is a lot of argument right now about whether students should be using artificial intelligence at all. Some of the concern is justified. AI can be wrong, shallow, misleading, overconfident, or simply invented. It can also make it remarkably easy for a student to produce work that looks far more sophisticated than anything the student actually understands. None of that is something we should ignore.
            </p>
            <p>
              In AQR, though, we do not think the answer is to pretend the technology is going away. Students are going to encounter AI in school, work, search, software, communication, and ordinary life. They need more than a rule telling them whether they are allowed to use it. They need to learn what it is good for, where it fails, how to question it, and when they need to stop listening to it and think for themselves.
            </p>
            <p className="ai-position-emphasis">
              That is the position of this course. Students should never surrender their thinking to artificial intelligence, but they should learn how to use artificial intelligence when it can make their own thinking stronger.
            </p>
          </div>
        </section>

        <section className="why-section why-section-black" aria-labelledby="ai-work-title">
          <div className="why-wrap ai-copy">
            <p className="why-section-kicker">Understanding over appearance</p>
            <h2 id="ai-work-title">The work has to belong to the student</h2>
            <p>
              One of the easiest mistakes to make with AI is to confuse the quality of the product with the quality of the learning. Those are not the same thing, and AI makes the difference between them easier to see than almost any tool we have used before.
            </p>
            <p>
              Suppose we put a student's understanding of a problem on a scale from 0 to 10. A student begins at a 1, asks an AI system to complete the assignment, and turns in something that looks like graduate-level work—a 10. That may look impressive until we start talking about it. If I ask why a particular choice was made, what one of the numbers means, what assumption the argument depends on, or what would happen if we changed one of the conditions, the illusion can disappear within three questions. The project may look like a 10, but the student's understanding is still sitting at 1.
            </p>

            <div className="ai-scale-compare" aria-label="Understanding versus appearance example">
              <div>
                <span className="ai-scale-label">Looks like</span>
                <strong>10</strong>
                <span>Student understanding: 1</span>
              </div>
              <div>
                <span className="ai-scale-label">Starts at 1</span>
                <strong>4</strong>
                <span>Student understanding after the work</span>
              </div>
            </div>

            <p>
              I am much more interested in the student who starts at 1 and gets to 4. Maybe the student asks for a different explanation because the first one does not make sense. Maybe they ask for an example, challenge an answer, find a hole in their own reasoning, or use the tool to break a problem into pieces they can finally understand. If they finish knowing substantially more than they knew when they started—and they can explain what they now understand—that is excellent work.
            </p>
            <p>
              That distinction drives a lot of what we do in AQR. We are not trying to use AI to make student work appear smarter. We are trying to help students actually become more capable. A polished product has very little value to us if the student cannot explain it, defend it, change it, or recognize its limitations.
            </p>
          </div>
        </section>

        <section className="why-section why-section-silver" aria-labelledby="ai-question-title">
          <div className="why-wrap ai-copy ai-copy-dark">
            <p className="why-section-kicker">Skepticism is part of the work</p>
            <h2 id="ai-question-title">Questioning the answer is part of the work</h2>
            <p>
              AQR is built around a habit that matters with or without AI: do not accept information passively. Students are regularly asked to identify what is actually being claimed, where a number came from, what is being compared, who might be missing, what assumptions are hiding underneath an argument, and whether the evidence really supports the conclusion.
            </p>
            <p>
              Those same questions apply to artificial intelligence. In some ways they matter even more there because AI can be extremely convincing when it is wrong. A response can be fluent, organized, confident, and completely unreliable. That makes it useful practice for the kind of quantitative and critical reasoning we want students to develop.
            </p>
            <p>
              When students work with AI, we want them asking things like: What is this claiming? Why did it reach that conclusion? What evidence supports it? What might it be missing? What else could explain the result? What would make this answer wrong? What would change my mind?
            </p>
            <p>
              That is a very different habit from asking a machine for an answer and accepting whatever appears on the screen.
            </p>
          </div>
        </section>

        <section className="why-section why-section-black" aria-labelledby="ai-use-title">
          <div className="why-wrap ai-copy">
            <p className="why-section-kicker">Use it to get stronger</p>
            <h2 id="ai-use-title">What useful AI use actually looks like</h2>
            <p>Getting an answer from an AI system is easy. Using one intelligently is harder.</p>
            <p>
              Sometimes a student needs another explanation. Sometimes they need an example that connects with something they already know. Sometimes they need help breaking a large problem into manageable pieces, feedback on an unfinished idea, or someone to challenge an argument that sounds good but does not quite hold together. AI can be extremely useful in those situations.
            </p>
            <p>
              That is the kind of use we want to develop. Instead of training students to ask, “What is the answer?”, we want them getting better at asking, “Help me understand this,” “Show me another way to think about it,” “What am I missing?”, “Challenge my argument,” or “Explain why you reached that conclusion.”
            </p>
            <p>
              Students also build and test AI-supported tools of their own. That means they have to think about the instructions they give the system, observe what happens when those instructions produce poor results, decide what needs to change, and try again. The work is not finished because the machine produced something. Testing and revision are part of the assignment.
            </p>
            <p>
              The student still has to own the result. A simple question exposes that pretty quickly: <strong>Can you explain it?</strong> If the answer is no, then whatever is sitting on the screen is ahead of the student's understanding. That is not a reason to hide the problem. It tells us exactly where more learning needs to happen.
            </p>
          </div>
        </section>

        <section className="why-section why-section-silver" aria-labelledby="ai-school-title">
          <div className="why-wrap ai-copy ai-copy-dark">
            <p className="why-section-kicker">Why teach it in school?</p>
            <h2 id="ai-school-title">Students are going to have to learn how to deal with these systems somewhere.</h2>
            <p>
              Simply keeping AI away from students while they are in school does not teach them what to do when they encounter it everywhere else.
            </p>
            <p>
              It does not teach them how to recognize a confident wrong answer, how to check a source, how to tell whether automation is helping them or weakening them, or when they need to stop asking the machine and make a judgment themselves.
            </p>
            <p>
              Those are learned skills. They require experience, mistakes, questioning, correction, and practice. School is one of the few places where students can develop those habits while another person is still there to ask, “Why do you believe that?” or “How do you know?”
            </p>
            <p>
              There is also a real opportunity here. Used badly, AI can make someone more passive. Used well, it can give a student access to explanations, examples, feedback, and intellectual pushback that they might not otherwise have when they need it. The important question is not simply whether the student touched AI. The question is whether the interaction left the student more capable than before.
            </p>
            <p className="ai-position-emphasis">That is the standard we care about.</p>
          </div>
        </section>

        <section className="why-section why-section-black" aria-labelledby="ai-aqr-title">
          <div className="why-wrap ai-copy">
            <p className="why-section-kicker">Across the course</p>
            <h2 id="ai-aqr-title">What this looks like in AQR</h2>
            <p>
              AI is not something we bolt onto the course after the real work is finished. It is one of several tools students learn to use, examine, test, and control.
            </p>
            <p>
              Early in AQR, students spend substantial time learning about themselves as learners. They collect evidence, examine their own patterns, identify places where they struggle, and use what they learn to build instructions for a personalized learning tool. Then they test that tool against actual work. Does it explain things in a way that helps? Does it give too much away? Does it misunderstand what the student needs? Does it confidently produce garbage? What needs to change?
            </p>
            <p>
              Later in the course, the same habits move into data and decision-making. Students examine sampling and bias, learn to separate correlation from causation, build decision tools whose assumptions and tradeoffs have to be visible, and analyze claims, graphs, evidence, and sources. By the end of the year, questioning confident claims is not a special “AI skill.” It is simply part of how we expect students to think.
            </p>
            <p className="ai-position-emphasis ai-position-emphasis-dark">
              AQR is not an AI class. It is a reasoning class being taught in a world that now contains very powerful AI.
            </p>
          </div>
        </section>

        <section className="why-section why-section-silver" aria-labelledby="ai-point-title">
          <div className="why-wrap ai-copy ai-copy-dark">
            <p className="why-section-kicker">The point</p>
            <h2 id="ai-point-title">Use powerful tools without handing them control of your thinking.</h2>
            <p>
              We do not think students have to choose between fearing this technology and surrendering to it. There is a much more useful middle ground: understand what the tool can do, learn where it cannot be trusted, take advantage of it when it genuinely helps, and keep responsibility for your own judgment.
            </p>
            <p>
              If students leave AQR more willing to question an AI response than they were when they entered, that is a success. If they also leave much better at using AI to learn, solve problems, test ideas, and improve their own work, that is a success too. Those goals do not work against each other. They reinforce each other.
            </p>
            <p>
              The point is not to produce students who are impressed by artificial intelligence. It is to produce students who know how to work with powerful tools without handing those tools control of their thinking.
            </p>
            <p className="ai-position-emphasis">That is what we mean by AI literacy, and that is what we are trying to teach.</p>
            <div className="ai-position-actions">
              <a className="why-standards-link" href="/why-aqr">Read Why AQR</a>
              <a className="why-standards-link ai-secondary-link" href="/student-guide">See the Student Guide</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="why-footer">
        <div className="why-wrap why-footer-inner">
          <p>
            © 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span> • <a className="site-footer-link" href="/contact">Contact</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default WhyAI;
