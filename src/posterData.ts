export type PosterAsset = {
  title: string;
  alt: string;
  png: string;
  pdf: string;
};

export type PosterType = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  audienceUse: string;
  posters: PosterAsset[];
};

export const posterTypes: PosterType[] = [
  {
    slug: "aqr-identity",
    title: "AQR Identity Posters",
    eyebrow: "What this class is",
    summary:
      "Big-picture posters that name the course: real math, real decisions, real data, real tools, and real communication.",
    audienceUse:
      "Use these near the door, front wall, or course overview materials so students and visitors immediately understand the class identity.",
    posters: [
      {
        title: "Real Math, Real Decisions",
        alt: "AQR classroom poster: Real Math, Real Decisions",
        png: "/posters/real_math_real_decisions_24x36_3600x5400.png",
        pdf: "/posters/real_math_real_decisions_24x36.pdf",
      },
      {
        title: "Not Just Answers",
        alt: "AQR classroom poster: Not Just Answers",
        png: "/posters/not_just_answers_3600x5400.png",
        pdf: "/posters/not_just_answers_24x36.pdf",
      },
    ],
  },
  {
    slug: "qr-questions",
    title: "Quantitative Reasoning Question Posters",
    eyebrow: "Questions students should hear all year",
    summary:
      "Short question posters that become classroom language: compared to what, what does this prove, per what, what is being measured, and what would change your mind?",
    audienceUse:
      "Use these around the room as thinking prompts during warm-ups, graph checks, surveys, project conferences, and revisions.",
    posters: [
      {
        title: "Compared to What?",
        alt: "AQR classroom poster: Compared to What?",
        png: "/posters/compared_to_what_24x36_3600x5400.png",
        pdf: "/posters/compared_to_what_24x36.pdf",
      },
      {
        title: "What Are We Measuring?",
        alt: "AQR classroom poster: What Are We Measuring?",
        png: "/posters/what_are_we_measuring_final_2026_05_13_24x36_3600x5400.png",
        pdf: "/posters/what_are_we_measuring_final_2026_05_13_24x36.pdf",
      },
      {
        title: "What Does This Prove?",
        alt: "AQR classroom poster: What Does This Prove?",
        png: "/posters/what_does_this_prove_24x36_3600x5400.png",
        pdf: "/posters/what_does_this_prove_24x36.pdf",
      },
      {
        title: "What Does This Prove? — Second Design",
        alt: "AQR classroom poster: What Does This Prove, second design",
        png: "/posters/what_does_this_prove_2_24x36_3600x5400.png",
        pdf: "/posters/what_does_this_prove_2_24x36.pdf",
      },
    ],
  },
  {
    slug: "data-anti-bs",
    title: "Data / Anti-BS Posters",
    eyebrow: "Do not get played by charts and claims",
    summary:
      "Posters for misleading graphs, weak evidence, cherry-picked data, sampling problems, bad survey design, and correlation-versus-causation warnings.",
    audienceUse:
      "Use these during Q1 graph checks, Q2 data interpretation, and the Q4 Don't Get Played unit.",
    posters: [
      {
        title: "Correlation Is Not Causation",
        alt: "AQR classroom poster: Correlation Is Not Causation",
        png: "/posters/correlation_is_not_causation_24x36_3600x5400.png",
        pdf: "/posters/correlation_is_not_causation_24x36.pdf",
      },
      {
        title: "A Graph Is an Argument",
        alt: "AQR classroom poster: A Graph Is an Argument",
        png: "/posters/a_graph_is_an_argument_24x36_3600x5400.png",
        pdf: "/posters/a_graph_is_an_argument_24x36.pdf",
      },
      {
        title: "Bad Survey, Bad Data",
        alt: "AQR classroom poster: Bad Survey, Bad Data",
        png: "/posters/bad_survey_bad_data_24x36_3600x5400.png",
        pdf: "/posters/bad_survey_bad_data_24x36.pdf",
      },
    ],
  },
  {
    slug: "decision-model",
    title: "Decision-Making / Model Posters",
    eyebrow: "Tools should make thinking visible",
    summary:
      "Posters for tradeoffs, criteria, weighting, assumptions, sensitivity checks, testing, and recommendations.",
    audienceUse:
      "Use these heavily in Q3 when students build decision tools and explain how their recommendation logic works.",
    posters: [
      {
        title: "A Decision Is a Tradeoff",
        alt: "AQR classroom poster: A Decision Is a Tradeoff",
        png: "/posters/a_decision_is_a_tradeoff_24x36_3600x5400.png",
        pdf: "/posters/a_decision_is_a_tradeoff_24x36.pdf",
      },
    ],
  },
  {
    slug: "ai-tool-use",
    title: "AI / Tool-Use Posters",
    eyebrow: "Use help, keep responsibility",
    summary:
      "Posters about AI judgment, source grounding, prompts, responsibility, and tool-supported thinking.",
    audienceUse:
      "Use these when students work with Gemini, source-grounded workflows, feedback prompts, and revision.",
    posters: [
      {
        title: "The Tool Is Not the Thinking",
        alt: "AQR classroom poster: The Tool Is Not the Thinking",
        png: "/posters/the_tool_is_not_the_thinking_24x36_3600x5400.png",
        pdf: "/posters/the_tool_is_not_the_thinking_24x36.pdf",
      },
      {
        title: "Use AI Like a Coach",
        alt: "AQR classroom poster: Use AI Like a Coach",
        png: "/posters/ai_as_a_coach_in_learning_24x36_3600x5400.png",
        pdf: "/posters/ai_as_a_coach_in_learning_24x36.pdf",
      },
    ],
  },
  {
    slug: "pass-path-work-habits",
    title: "Work-Habit / Pass-Path Posters",
    eyebrow: "Stay alive this week",
    summary:
      "Posters that make the pass path visible: checkpoints, partial-but-real work, proof of progress, revision, and asking earlier.",
    audienceUse:
      "Use these near assignment boards, weekly checkpoint areas, or conferencing spaces.",
    posters: [
      {
        title: "Don't Disappear",
        alt: "AQR classroom poster: Don't Disappear",
        png: "/posters/dont_disappear_24x36_3600x5400.png",
        pdf: "/posters/dont_disappear_24x36.pdf",
      },
      {
        title: "Revision Is the Work",
        alt: "AQR classroom poster: Revision Is the Work",
        png: "/posters/revision_is_the_work_24x36_3600x5400.png",
        pdf: "/posters/revision_is_the_work_24x36.pdf",
      },
      {
        title: "10 Things That Require Zero Talent — Respect Final",
        alt: "Classroom work-habit poster: 10 Things That Require Zero Talent, respect final version",
        png: "/posters/10_things_0_talent_respect_final_24x36_3600x5400.png",
        pdf: "/posters/10_things_0_talent_respect_final_24x36.pdf",
      },
      {
        title: "10 Things That Require Zero Talent — Blue Grunge",
        alt: "Classroom work-habit poster: 10 Things That Require Zero Talent, blue grunge version",
        png: "/posters/poster_01_blue_grunge_10_things_24x36_3600x5400.png",
        pdf: "/posters/poster_01_blue_grunge_10_things_24x36.pdf",
      },
      {
        title: "10 Things That Require Zero Talent",
        alt: "Classroom work-habit poster: 10 Things That Require Zero Talent",
        png: "/posters/10_things_zero_talent_24x36_3600x5400.png",
        pdf: "/posters/10_things_zero_talent_24x36_print.pdf",
      },
    ],
  },
  {
    slug: "thinking-moves",
    title: "Student Thinking-Move Posters",
    eyebrow: "Name the move",
    summary:
      "Posters that name reusable reasoning moves: name the claim, check the evidence, find the flaw, state the limit, and explain like a human.",
    audienceUse:
      "Use these as a thinking wall during class discussions, short critiques, project revision, and Q4 synthesis.",
    posters: [
      {
        title: "Name the Claim",
        alt: "AQR classroom poster: Name the Claim",
        png: "/posters/name_the_claim_24x36_3600x5400.png",
        pdf: "/posters/name_the_claim_24x36.pdf",
      },
      {
        title: "Find the Flaw",
        alt: "AQR classroom poster: Find the Flaw",
        png: "/posters/find_the_flaw_24x36_3600x5400.png",
        pdf: "/posters/find_the_flaw_24x36.pdf",
      },
    ],
  },
  {
    slug: "quotation-posters",
    title: "Quotation Posters",
    eyebrow: "Depth and human weight",
    summary:
      "Quote posters for struggle, courage, learning, humility, revision, truth, endurance, responsibility, and simplicity.",
    audienceUse:
      "Use these to give the room some intellectual and human weight without turning the wall into generic motivational wallpaper.",
    posters: [
      {
        title: "Nietzsche: A Why to Live",
        alt: "Classroom quotation poster: He who has a why to live can bear almost any how",
        png: "/posters/nietzsche_why_poster_24x36_3600x5400.png",
        pdf: "/posters/nietzsche_why_poster_24x36.pdf",
      },
      {
        title: "Frankl: Choose Your Attitude",
        alt: "Classroom quotation poster: Frankl, choose your attitude",
        png: "/posters/frankl_choose_attitude_24x36_3600x5400.png",
        pdf: "/posters/frankl_choose_attitude_24x36.pdf",
      },
      {
        title: "Douglass: Struggle and Progress",
        alt: "Classroom quotation poster: Frederick Douglass, struggle and progress",
        png: "/posters/douglass_struggle_progress_24x36_3600x5400.png",
        pdf: "/posters/douglass_struggle_progress_24x36.pdf",
      },
    ],
  },
];

export const publishedPosterTypes = posterTypes.filter((type) => type.posters.length > 0);

export function getPosterType(slug: string | null) {
  if (!slug) return null;
  return posterTypes.find((type) => type.slug === slug) ?? null;
}
