export type BankQuestion = {id:string;term:string;format:string;prompt:string;choices:string[];correct:number;explanation:string;pool:string};
export const lockedQuestions: BankQuestion[] = [
  {
    "id": "A002",
    "term": "claim",
    "format": "What's Wrong Here?",
    "prompt": "A student says, “My opinion is evidence because I believe it strongly.” What is the opinion?",
    "choices": [
      "A measurement",
      "A sample",
      "A constraint",
      "A claim"
    ],
    "correct": 3,
    "explanation": "Confidence does not turn a claim into evidence.",
    "pool": "A"
  },
  {
    "id": "A003",
    "term": "evidence",
    "format": "Use It or Lose It",
    "prompt": "Which is the strongest evidence of a change in tardiness after the later bus was introduced?",
    "choices": [
      "Tardy records fell from 42 to 19 after the change.",
      "Students liked the idea.",
      "The principal expected improvement.",
      "The bus looked less crowded."
    ],
    "correct": 0,
    "explanation": "Recorded counts show a decrease after the change, but the before-and-after pattern alone does not establish that the bus caused it.",
    "pool": "A"
  },
  {
    "id": "A004",
    "term": "evidence",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches evidence?",
    "choices": [
      "A statement someone believes",
      "A limit on available choices",
      "Information that helps test a claim",
      "A guess about the future"
    ],
    "correct": 2,
    "explanation": "Evidence supports, challenges, or tests a claim.",
    "pool": "A"
  },
  {
    "id": "A005",
    "term": "assumption",
    "format": "Quick Draw",
    "prompt": "A budget treats rent as unchanged next year. What is “rent stays unchanged”?",
    "choices": [
      "A benefit",
      "A measurement",
      "An assumption",
      "A revision"
    ],
    "correct": 2,
    "explanation": "The budget treats something uncertain as true so planning can continue.",
    "pool": "A"
  },
  {
    "id": "A006",
    "term": "assumption",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches assumption?",
    "choices": [
      "Something treated as true for now",
      "Information collected and recorded",
      "A rule that eliminates options",
      "The best alternative not chosen"
    ],
    "correct": 0,
    "explanation": "An assumption lets thinking continue even when something is not fully proven.",
    "pool": "A"
  },
  {
    "id": "A007",
    "term": "constraint",
    "format": "Use It or Lose It",
    "prompt": "Which fact is a constraint when choosing an apartment?",
    "choices": [
      "I like brick buildings.",
      "Blue walls look better.",
      "The balcony seems relaxing.",
      "Monthly rent must stay below $1,200."
    ],
    "correct": 3,
    "explanation": "A hard spending limit rules out options that do not fit.",
    "pool": "A"
  },
  {
    "id": "A008",
    "term": "constraint",
    "format": "What's Wrong Here?",
    "prompt": "“I prefer a short commute, so a short commute is a constraint.” What is wrong?",
    "choices": [
      "Every preference is a measurement.",
      "A preference is not automatically a required limit.",
      "Every commute is an uncertainty.",
      "A constraint must involve money."
    ],
    "correct": 1,
    "explanation": "A preference becomes a constraint only if it is truly required.",
    "pool": "A"
  },
  {
    "id": "A009",
    "term": "trade-off",
    "format": "Use It or Lose It",
    "prompt": "Which situation shows a trade-off?",
    "choices": [
      "A job pays every Friday.",
      "A higher-paying job requires a much longer commute.",
      "Two jobs use online applications.",
      "A manager verifies each timesheet."
    ],
    "correct": 1,
    "explanation": "One gain comes with accepting less of something else.",
    "pool": "A"
  },
  {
    "id": "A010",
    "term": "trade-off",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches trade-off?",
    "choices": [
      "A result changes at a cutoff.",
      "Two variables move together.",
      "A source deserves to be trusted.",
      "Getting more of one thing means accepting less of another."
    ],
    "correct": 3,
    "explanation": "A trade-off makes the gain and sacrifice visible.",
    "pool": "A"
  },
  {
    "id": "A011",
    "term": "uncertainty",
    "format": "Quick Draw",
    "prompt": "You know today’s gas price but not next month’s price. What is the unknown future price?",
    "choices": [
      "Uncertainty",
      "Evidence",
      "Criterion",
      "Population"
    ],
    "correct": 0,
    "explanation": "Uncertainty is what cannot be known or predicted exactly.",
    "pool": "A"
  },
  {
    "id": "A012",
    "term": "uncertainty",
    "format": "What's Wrong Here?",
    "prompt": "“There is a 30% chance the trip is canceled, so uncertainty means cancellation will happen.” What is wrong?",
    "choices": [
      "The percentage is a preference.",
      "Cancellation is a measurement.",
      "Uncertainty does not make the bad outcome certain.",
      "Trips cannot involve risk."
    ],
    "correct": 2,
    "explanation": "Uncertainty describes what is unknown, not what must happen.",
    "pool": "A"
  },
  {
    "id": "A013",
    "term": "quantity",
    "format": "Quick Draw",
    "prompt": "In “the commute takes 45 minutes,” what quantity is being measured?",
    "choices": [
      "Color",
      "Preference",
      "Duration",
      "Credibility"
    ],
    "correct": 2,
    "explanation": "Minutes measure the quantity of time or duration.",
    "pool": "A"
  },
  {
    "id": "A014",
    "term": "quantity",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches quantity?",
    "choices": [
      "An amount that can be counted or measured",
      "A claim that needs evidence",
      "A weakness in a method",
      "A rule used to judge choices"
    ],
    "correct": 0,
    "explanation": "A quantity is an amount, size, count, duration, or rate.",
    "pool": "A"
  },
  {
    "id": "A015",
    "term": "benefit",
    "format": "Use It or Lose It",
    "prompt": "Which is a benefit of free job training?",
    "choices": [
      "The course lasts six weeks.",
      "The student gives up Saturdays.",
      "The bus ride costs $20.",
      "The student gains a useful certification."
    ],
    "correct": 3,
    "explanation": "A benefit is a desirable result gained from a choice.",
    "pool": "A"
  },
  {
    "id": "A016",
    "term": "benefit",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches benefit?",
    "choices": [
      "Something unknown about a choice",
      "Something good gained from a choice",
      "Something that limits a choice",
      "Something recorded for analysis"
    ],
    "correct": 1,
    "explanation": "Benefits are useful or desirable outcomes.",
    "pool": "A"
  },
  {
    "id": "A017",
    "term": "cost",
    "format": "Use It or Lose It",
    "prompt": "Which is a real cost even if no money is paid?",
    "choices": [
      "Receiving a free laptop",
      "Spending three hours every evening on the task",
      "Learning a useful skill",
      "Getting a flexible schedule"
    ],
    "correct": 1,
    "explanation": "Costs can include time, effort, stress, or attention—not only money.",
    "pool": "A"
  },
  {
    "id": "A018",
    "term": "cost",
    "format": "What's Wrong Here?",
    "prompt": "“The app is free, so using it has no cost.” What is wrong?",
    "choices": [
      "Free apps cannot collect data.",
      "Cost always means uncertainty.",
      "Price and evidence are identical.",
      "It may still cost time, attention, or privacy."
    ],
    "correct": 3,
    "explanation": "AQR treats cost more broadly than the price tag.",
    "pool": "A"
  },
  {
    "id": "A019",
    "term": "verify",
    "format": "Use It or Lose It",
    "prompt": "Which action best verifies an AI calculation?",
    "choices": [
      "Redo the calculation and compare the result.",
      "Copy the answer into a document.",
      "Ask the AI to sound confident.",
      "Choose the answer you expected."
    ],
    "correct": 0,
    "explanation": "Verification checks an output against evidence or another method.",
    "pool": "A"
  },
  {
    "id": "A020",
    "term": "verify",
    "format": "Quick Draw",
    "prompt": "You trace a statistic back to the original dataset. What are you doing?",
    "choices": [
      "Preferring it",
      "Generalizing it",
      "Verifying it",
      "Optimizing it"
    ],
    "correct": 2,
    "explanation": "Tracing information to its source checks whether it is supported.",
    "pool": "A"
  },
  {
    "id": "A021",
    "term": "revision",
    "format": "Use It or Lose It",
    "prompt": "Which action is a revision?",
    "choices": [
      "Submitting the same draft again",
      "Hiding a calculation error",
      "Changing a recommendation after finding stronger evidence",
      "Ignoring specific feedback"
    ],
    "correct": 2,
    "explanation": "Revision is a purposeful improvement after learning something.",
    "pool": "A"
  },
  {
    "id": "A022",
    "term": "revision",
    "format": "What's Wrong Here?",
    "prompt": "“I revised my work, so my first attempt was a failure.” What is wrong?",
    "choices": [
      "Revision is a normal part of improving work.",
      "Revision means changing the topic.",
      "First attempts must be correct.",
      "Feedback is the same as evidence."
    ],
    "correct": 0,
    "explanation": "Revision is not punishment; it is part of testing and improving.",
    "pool": "A"
  },
  {
    "id": "A023",
    "term": "measurement",
    "format": "Quick Draw",
    "prompt": "A survey records stress from 1 to 5. What is the 1–5 process?",
    "choices": [
      "Recommendation",
      "Trade-off",
      "Population",
      "Measurement"
    ],
    "correct": 3,
    "explanation": "The scale assigns a recorded rating to an attribute.",
    "pool": "A"
  },
  {
    "id": "A024",
    "term": "measurement",
    "format": "What's Wrong Here?",
    "prompt": "A test gives a score of 72. What must you ask before interpreting it?",
    "choices": [
      "Which answer letter was longest",
      "What the test measures and how",
      "Whether the student likes tests",
      "What color the graph uses"
    ],
    "correct": 1,
    "explanation": "A score has little meaning until the measurement method is clear.",
    "pool": "A"
  },
  {
    "id": "A025",
    "term": "preference",
    "format": "Use It or Lose It",
    "prompt": "Which statement describes a preference?",
    "choices": [
      "The assignment must be submitted Friday.",
      "I like video explanations more than long readings.",
      "The budget cannot exceed $500.",
      "The survey included 60 students."
    ],
    "correct": 1,
    "explanation": "A preference describes what someone tends to like or choose.",
    "pool": "A"
  },
  {
    "id": "A026",
    "term": "preference",
    "format": "What's Wrong Here?",
    "prompt": "“I prefer videos, so videos always produce my best learning.” What is wrong?",
    "choices": [
      "Videos are never evidence.",
      "Learning cannot be measured.",
      "Preferences are hard constraints.",
      "A preference does not prove the best result."
    ],
    "correct": 3,
    "explanation": "What someone likes may differ from what actually helps.",
    "pool": "A"
  },
  {
    "id": "B001",
    "term": "position",
    "format": "Quick Draw",
    "prompt": "A student currently supports Option A but may change with new evidence. What is that current stance?",
    "choices": [
      "A position",
      "A population",
      "A threshold",
      "A variable"
    ],
    "correct": 0,
    "explanation": "A position is the judgment someone is willing to defend right now.",
    "pool": "B"
  },
  {
    "id": "B002",
    "term": "position",
    "format": "What's Wrong Here?",
    "prompt": "“My position is proof that the policy works.” What is wrong?",
    "choices": [
      "A position cannot change.",
      "Policies cannot be measured.",
      "A position is not evidence.",
      "Proof is always a preference."
    ],
    "correct": 2,
    "explanation": "A stance needs evidence; it does not create evidence.",
    "pool": "B"
  },
  {
    "id": "B003",
    "term": "condition",
    "format": "Quick Draw",
    "prompt": "“I recommend the job if weekend shifts are optional.” What is “if weekend shifts are optional”?",
    "choices": [
      "A sample",
      "A quantity",
      "A condition",
      "A bias"
    ],
    "correct": 2,
    "explanation": "A condition is a circumstance that qualifies or changes a recommendation.",
    "pool": "B"
  },
  {
    "id": "B004",
    "term": "condition",
    "format": "Use It or Lose It",
    "prompt": "Which sentence gives a conditional recommendation?",
    "choices": [
      "Choose the apartment if utilities are included.",
      "Choose the apartment because it is blue.",
      "The apartment costs $1,100.",
      "Three apartments were compared."
    ],
    "correct": 0,
    "explanation": "The recommendation depends on a stated condition.",
    "pool": "B"
  },
  {
    "id": "B005",
    "term": "direction",
    "format": "Quick Draw",
    "prompt": "A student explores nursing without treating it as a permanent destiny. What is nursing here?",
    "choices": [
      "A measurement",
      "A causation",
      "A denominator",
      "A direction"
    ],
    "correct": 3,
    "explanation": "A direction is a path worth exploring or testing.",
    "pool": "B"
  },
  {
    "id": "B006",
    "term": "direction",
    "format": "What's Wrong Here?",
    "prompt": "“Choosing a direction means I can never change my future.” What is wrong?",
    "choices": [
      "A direction is numerical data.",
      "A direction can be tested and revised.",
      "A future must be measured.",
      "Revision prevents decisions."
    ],
    "correct": 1,
    "explanation": "A direction is exploratory, not a permanent destiny.",
    "pool": "B"
  },
  {
    "id": "C001",
    "term": "reasoning",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches reasoning?",
    "choices": [
      "The information collected in a survey",
      "The thinking that connects evidence to an answer",
      "The limit that removes an option",
      "The claim stated at the beginning"
    ],
    "correct": 1,
    "explanation": "Reasoning explains why the evidence matters.",
    "pool": "C"
  },
  {
    "id": "C002",
    "term": "reasoning",
    "format": "Use It or Lose It",
    "prompt": "Which response includes reasoning?",
    "choices": [
      "Sales fell by 18%.",
      "The fee was $4.",
      "The chart covers six months.",
      "Sales fell after the fee, so the fee may have discouraged buyers."
    ],
    "correct": 3,
    "explanation": "The response connects information to a possible conclusion.",
    "pool": "C"
  },
  {
    "id": "C003",
    "term": "limitation",
    "format": "Quick Draw",
    "prompt": "A survey includes only one class. What do we call the boundary on what it can show?",
    "choices": [
      "A limitation",
      "A benefit",
      "A position",
      "A threshold"
    ],
    "correct": 0,
    "explanation": "The narrow group limits how far the result can reasonably extend.",
    "pool": "C"
  },
  {
    "id": "C004",
    "term": "limitation",
    "format": "What's Wrong Here?",
    "prompt": "“The model has one limitation, so the model is useless.” What is wrong?",
    "choices": [
      "Models cannot have limits.",
      "Useful models include everything.",
      "A limitation does not automatically erase usefulness.",
      "Limitations are always mistakes."
    ],
    "correct": 2,
    "explanation": "A model can remain useful when its boundaries are understood.",
    "pool": "C"
  },
  {
    "id": "C005",
    "term": "risk",
    "format": "Quick Draw",
    "prompt": "A phone may be stolen, causing a $700 loss. Which idea includes both the chance and consequence?",
    "choices": [
      "Preference",
      "Context",
      "Risk",
      "Revision"
    ],
    "correct": 2,
    "explanation": "Risk considers what could go wrong and how much it could matter.",
    "pool": "C"
  },
  {
    "id": "C006",
    "term": "risk",
    "format": "Use It or Lose It",
    "prompt": "Which statement evaluates risk most completely?",
    "choices": [
      "There is a small chance of a very serious loss.",
      "The outcome is unknown.",
      "I dislike this option.",
      "The price is $50."
    ],
    "correct": 0,
    "explanation": "Risk includes both likelihood and consequence.",
    "pool": "C"
  },
  {
    "id": "C007",
    "term": "criterion",
    "format": "Quick Draw",
    "prompt": "Price, distance, and reliability are used to compare cars. What is each judging standard?",
    "choices": [
      "A correlation",
      "A direction",
      "A revision",
      "A criterion"
    ],
    "correct": 3,
    "explanation": "A criterion is a standard used to compare options.",
    "pool": "C"
  },
  {
    "id": "C008",
    "term": "criterion",
    "format": "What's Wrong Here?",
    "prompt": "“My budget limit is a criterion, so cars above it can still win.” What is wrong?",
    "choices": [
      "Criteria never involve money.",
      "A hard budget limit acts as a constraint.",
      "Constraints always measure quality.",
      "Budgets are only preferences."
    ],
    "correct": 1,
    "explanation": "A constraint can rule an option out; a criterion helps compare options that remain.",
    "pool": "C"
  },
  {
    "id": "C009",
    "term": "justify",
    "format": "Quick Draw",
    "prompt": "A teacher asks, “How do you know your recommendation makes sense?” Which action is required?",
    "choices": [
      "Sample it",
      "Justify it",
      "Normalize it",
      "Frame it"
    ],
    "correct": 1,
    "explanation": "Justifying means supporting a choice with reasons and evidence.",
    "pool": "C"
  },
  {
    "id": "C010",
    "term": "justify",
    "format": "Use It or Lose It",
    "prompt": "Which response best justifies choosing Bus A?",
    "choices": [
      "Bus A is my answer.",
      "Bus A looks better.",
      "I picked Bus A quickly.",
      "Bus A is cheaper and arrives before work starts."
    ],
    "correct": 3,
    "explanation": "The choice is supported with relevant reasons.",
    "pool": "C"
  },
  {
    "id": "C011",
    "term": "evaluate",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches evaluate?",
    "choices": [
      "Judge quality using criteria and evidence",
      "State what happened first",
      "Collect any available numbers",
      "Choose what you personally like"
    ],
    "correct": 0,
    "explanation": "Evaluation makes a supported judgment about quality or trustworthiness.",
    "pool": "C"
  },
  {
    "id": "C012",
    "term": "evaluate",
    "format": "Use It or Lose It",
    "prompt": "Which action evaluates a source?",
    "choices": [
      "Counting the words on the page",
      "Choosing the most colorful site",
      "Checking its evidence, method, and possible incentives",
      "Copying its first statistic"
    ],
    "correct": 2,
    "explanation": "Evaluation uses relevant criteria to judge source quality.",
    "pool": "C"
  },
  {
    "id": "C013",
    "term": "interpret",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches interpret?",
    "choices": [
      "Repeat the number exactly",
      "Collect a larger sample",
      "Explain what information means in context",
      "Set a cutoff value"
    ],
    "correct": 2,
    "explanation": "Interpretation connects a result to the situation it represents.",
    "pool": "C"
  },
  {
    "id": "C014",
    "term": "interpret",
    "format": "What's Wrong Here?",
    "prompt": "A student writes only, “The graph says 42%.” What is missing?",
    "choices": [
      "An interpretation of what 42% means",
      "A new population",
      "A stricter constraint",
      "A different preference"
    ],
    "correct": 0,
    "explanation": "Reporting a number is not the same as explaining its meaning.",
    "pool": "C"
  },
  {
    "id": "C015",
    "term": "variable",
    "format": "Quick Draw",
    "prompt": "Hours of sleep can differ from student to student. What is hours of sleep?",
    "choices": [
      "A recommendation",
      "A credibility",
      "A revision",
      "A variable"
    ],
    "correct": 3,
    "explanation": "A variable can take different values.",
    "pool": "C"
  },
  {
    "id": "C016",
    "term": "variable",
    "format": "Use It or Lose It",
    "prompt": "Which pair contains two variables?",
    "choices": [
      "Evidence and reasoning",
      "Study time and test score",
      "Claim and recommendation",
      "Sample and population"
    ],
    "correct": 1,
    "explanation": "Both study time and test score can vary and be measured.",
    "pool": "C"
  },
  {
    "id": "C017",
    "term": "model",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches model?",
    "choices": [
      "A perfect copy of reality",
      "A useful simplified version of something real",
      "Any personal opinion",
      "A guaranteed prediction"
    ],
    "correct": 1,
    "explanation": "A model represents selected parts of reality and leaves others out.",
    "pool": "C"
  },
  {
    "id": "C018",
    "term": "model",
    "format": "What's Wrong Here?",
    "prompt": "“The spreadsheet says Option B wins, so reality must match it.” What is wrong?",
    "choices": [
      "Spreadsheets cannot compare options.",
      "Reality is always numerical.",
      "Option B cannot be recommended.",
      "A model simplifies reality and can miss important factors."
    ],
    "correct": 3,
    "explanation": "Model output depends on what the model includes and assumes.",
    "pool": "C"
  },
  {
    "id": "C019",
    "term": "recommendation",
    "format": "Quick Draw",
    "prompt": "Which statement is a recommendation?",
    "choices": [
      "Choose Plan B because it meets the budget and schedule.",
      "Plan B costs $40.",
      "Three plans were reviewed.",
      "The schedule has two limits."
    ],
    "correct": 0,
    "explanation": "A recommendation advises what should be done and gives support.",
    "pool": "C"
  },
  {
    "id": "C020",
    "term": "recommendation",
    "format": "What's Wrong Here?",
    "prompt": "“Plan A is my recommendation because I chose it.” What is missing?",
    "choices": [
      "A larger font",
      "A second recommendation",
      "Reasons and evidence supporting the advice",
      "A hidden score"
    ],
    "correct": 2,
    "explanation": "A responsible recommendation explains why the choice fits.",
    "pool": "C"
  },
  {
    "id": "C021",
    "term": "data",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches data?",
    "choices": [
      "A conclusion that sounds reasonable",
      "A limit on available choices",
      "Information that has been collected and recorded",
      "Advice about what to do"
    ],
    "correct": 2,
    "explanation": "Data are recorded facts, measurements, observations, categories, or responses.",
    "pool": "C"
  },
  {
    "id": "C022",
    "term": "data",
    "format": "Use It or Lose It",
    "prompt": "Which item is data?",
    "choices": [
      "The recorded commute times for 40 workers",
      "The claim that traffic is worse",
      "The recommendation to leave early",
      "The assumption that roads stay open"
    ],
    "correct": 0,
    "explanation": "Recorded commute times are collected information available for analysis.",
    "pool": "C"
  },
  {
    "id": "C023",
    "term": "decision",
    "format": "Plain-Language Check",
    "prompt": "Which meaning best matches decision?",
    "choices": [
      "A recorded observation",
      "A background influence",
      "A numerical cutoff",
      "A choice among possible actions"
    ],
    "correct": 3,
    "explanation": "A decision selects what to do among options.",
    "pool": "C"
  },
  {
    "id": "C024",
    "term": "decision",
    "format": "Use It or Lose It",
    "prompt": "Which situation requires a decision?",
    "choices": [
      "Recording yesterday’s temperature",
      "Choosing between two jobs with different pay and schedules",
      "Defining the word evidence",
      "Counting survey responses"
    ],
    "correct": 1,
    "explanation": "The person must choose between possible actions.",
    "pool": "C"
  },
  {
    "id": "D001",
    "term": "bias",
    "format": "Quick Draw",
    "prompt": "A school survey asks only honors students about homework. What may tilt the result?",
    "choices": [
      "Threshold",
      "Bias",
      "Benefit",
      "Direction"
    ],
    "correct": 1,
    "explanation": "Who was selected may systematically push the result in one direction.",
    "pool": "D"
  },
  {
    "id": "D002",
    "term": "sample",
    "format": "Quick Draw",
    "prompt": "A school surveys 50 of its 500 seniors. What are the 50 surveyed seniors?",
    "choices": [
      "The population",
      "The threshold",
      "The context",
      "The sample"
    ],
    "correct": 3,
    "explanation": "The sample is the smaller group actually measured.",
    "pool": "D"
  },
  {
    "id": "D003",
    "term": "population",
    "format": "Quick Draw",
    "prompt": "A survey wants to describe every senior in the school. What is every senior?",
    "choices": [
      "The population",
      "The sample",
      "The criterion",
      "The evidence"
    ],
    "correct": 0,
    "explanation": "The population is the complete group the conclusion is meant to describe.",
    "pool": "D"
  },
  {
    "id": "D004",
    "term": "correlation",
    "format": "Quick Draw",
    "prompt": "Students who sleep more also tend to report higher grades. What relationship is shown?",
    "choices": [
      "Causation",
      "Revision",
      "Correlation",
      "Opportunity cost"
    ],
    "correct": 2,
    "explanation": "The variables move together, but one is not proven to cause the other.",
    "pool": "D"
  },
  {
    "id": "D005",
    "term": "causation",
    "format": "What's Wrong Here?",
    "prompt": "Ice-cream sales and sunburns rise together. Why is “ice cream causes sunburn” weak?",
    "choices": [
      "Sunburn cannot be measured.",
      "Sales are not a variable.",
      "Correlation alone does not establish causation.",
      "Warm weather is a preference."
    ],
    "correct": 2,
    "explanation": "A third factor such as hot sunny weather may affect both.",
    "pool": "D"
  },
  {
    "id": "D006",
    "term": "leading question",
    "format": "Use It or Lose It",
    "prompt": "Which survey question is leading?",
    "choices": [
      "Don’t you agree the new schedule is unfair?",
      "What schedule do you prefer?",
      "How many days were you absent?",
      "What time does school begin?"
    ],
    "correct": 0,
    "explanation": "The wording nudges respondents toward agreeing that it is unfair.",
    "pool": "D"
  },
  {
    "id": "D007",
    "term": "opportunity cost",
    "format": "Quick Draw",
    "prompt": "You choose Job A over your next-best option, Job B. What is Job B’s lost value?",
    "choices": [
      "Measurement",
      "Credibility",
      "Population",
      "Opportunity cost"
    ],
    "correct": 3,
    "explanation": "Opportunity cost is what you miss from the best alternative not chosen.",
    "pool": "D"
  },
  {
    "id": "D008",
    "term": "threshold",
    "format": "Quick Draw",
    "prompt": "A score of 70 changes a result from fail to pass. What is 70?",
    "choices": [
      "A sample",
      "A threshold",
      "A trade-off",
      "A position"
    ],
    "correct": 1,
    "explanation": "A threshold is a cutoff that changes what happens next.",
    "pool": "D"
  },
  {
    "id": "D009",
    "term": "credibility",
    "format": "Use It or Lose It",
    "prompt": "Which fact most improves a source’s credibility?",
    "choices": [
      "It uses a modern logo.",
      "It shows its evidence, method, and funding.",
      "It has a dramatic headline.",
      "It appears first in search."
    ],
    "correct": 1,
    "explanation": "Credibility grows from evidence, transparency, accuracy, and relevant expertise.",
    "pool": "D"
  },
  {
    "id": "D010",
    "term": "context",
    "format": "What's Wrong Here?",
    "prompt": "An ad says, “Sales increased 200%,” but gives no dates or starting amount. What is missing?",
    "choices": [
      "A preference",
      "A direction",
      "A revision",
      "Context"
    ],
    "correct": 3,
    "explanation": "The time period and starting amount are needed to understand the percentage.",
    "pool": "D"
  },
  {
    "id": "O001",
    "term": "evidence vs claim",
    "format": "Which One Doesn't Belong?",
    "prompt": "Which one does NOT belong with the three pieces of evidence?",
    "choices": [
      "“This plan will definitely work”",
      "A measured test result",
      "Attendance records",
      "A documented observation"
    ],
    "correct": 0,
    "explanation": "That sentence is a claim; the other choices can provide evidence.",
    "pool": "A"
  },
  {
    "id": "O002",
    "term": "constraint vs preference",
    "format": "Which One Doesn't Belong?",
    "prompt": "Which one does NOT belong with the three constraints?",
    "choices": [
      "The application closes Friday.",
      "The payment must stay below $300.",
      "The job requires a license.",
      "I like the blue option best."
    ],
    "correct": 3,
    "explanation": "Liking blue is a preference; the other choices can rule options out.",
    "pool": "A"
  },
  {
    "id": "O003",
    "term": "measurement",
    "format": "Which One Doesn't Belong?",
    "prompt": "Which one does NOT belong with the three measurements?",
    "choices": [
      "42 minutes",
      "18 dollars",
      "7.5 miles",
      "A better commute"
    ],
    "correct": 3,
    "explanation": "“Better” is a judgment; the other choices report measured quantities with units.",
    "pool": "A"
  },
  {
    "id": "O004",
    "term": "data vs interpretation",
    "format": "Which One Doesn't Belong?",
    "prompt": "Which one does NOT belong with the three pieces of recorded data?",
    "choices": [
      "81 responses",
      "The activity was a success.",
      "15 students chose “A lot”",
      "23 students wanted it shorter."
    ],
    "correct": 1,
    "explanation": "“A success” interprets the numbers; the other choices report data.",
    "pool": "C"
  },
  {
    "id": "O005",
    "term": "decision process",
    "format": "Which One Doesn't Belong?",
    "prompt": "Which one does NOT belong in a defensible decision process?",
    "choices": [
      "Compare options using stated criteria.",
      "Ignore uncertainty because it is inconvenient.",
      "Check important evidence.",
      "Explain the recommendation."
    ],
    "correct": 1,
    "explanation": "A defensible decision recognizes important uncertainty instead of hiding it.",
    "pool": "C"
  },
  {
    "id": "O006",
    "term": "correlation vs causation",
    "format": "Which One Doesn't Belong?",
    "prompt": "Which claim does NOT belong with conclusions supported by correlation alone?",
    "choices": [
      "The variables moved together.",
      "The variables were associated.",
      "One variable definitely caused the other.",
      "The pattern may deserve more study."
    ],
    "correct": 2,
    "explanation": "Correlation alone does not prove that one variable caused the other.",
    "pool": "D"
  },
  {
    "id": "X001",
    "term": "constraint + trade-off",
    "format": "Boss Round",
    "prompt": "A job pays $12,000 more but requires a two-hour commute. Which pair best frames the decision?",
    "choices": [
      "Constraint and trade-off",
      "Claim and sample",
      "Measurement and bias",
      "Population and revision"
    ],
    "correct": 0,
    "explanation": "Commute feasibility may be a constraint, while more pay for more travel is a trade-off.",
    "pool": "BOSS"
  },
  {
    "id": "X002",
    "term": "risk + uncertainty",
    "format": "Boss Round",
    "prompt": "An app stores location data and may change its privacy rules later. Which pair matters most?",
    "choices": [
      "Sample and population",
      "Benefit and revision",
      "Risk and uncertainty",
      "Quantity and unit"
    ],
    "correct": 2,
    "explanation": "Data exposure is a risk; future privacy rules are uncertain.",
    "pool": "BOSS"
  },
  {
    "id": "X003",
    "term": "sample + population",
    "format": "Boss Round",
    "prompt": "Thirty athletes answer a survey used to describe all 500 seniors. Which pair must be compared?",
    "choices": [
      "Cost and benefit",
      "Claim and revision",
      "Sample and population",
      "Model and threshold"
    ],
    "correct": 2,
    "explanation": "The 30 respondents are the sample; all seniors are the population.",
    "pool": "BOSS"
  },
  {
    "id": "X004",
    "term": "correlation + causation",
    "format": "Boss Round",
    "prompt": "Screen time and anxiety rise together in a survey. Which distinction prevents an overclaim?",
    "choices": [
      "Correlation versus causation",
      "Constraint versus criterion",
      "Position versus direction",
      "Cost versus benefit"
    ],
    "correct": 0,
    "explanation": "The association does not by itself prove that screen time caused anxiety.",
    "pool": "BOSS"
  },
  {
    "id": "X005",
    "term": "criterion + constraint",
    "format": "Boss Round",
    "prompt": "A car must cost under $18,000; among qualifying cars, reliability matters most. Which pair fits?",
    "choices": [
      "Bias and sample",
      "Claim and evidence",
      "Risk and uncertainty",
      "Constraint and criterion"
    ],
    "correct": 3,
    "explanation": "The price cap rules cars out; reliability judges the remaining options.",
    "pool": "BOSS"
  },
  {
    "id": "X006",
    "term": "claim + evidence",
    "format": "Boss Round",
    "prompt": "A company says its tutoring app raises grades and shows one success story. Which pair should you inspect?",
    "choices": [
      "Direction and condition",
      "Claim and evidence",
      "Variable and threshold",
      "Benefit and preference"
    ],
    "correct": 1,
    "explanation": "The improvement statement is a claim; one story may be weak evidence.",
    "pool": "BOSS"
  },
  {
    "id": "X007",
    "term": "model + limitation",
    "format": "Boss Round",
    "prompt": "A spreadsheet ranks colleges using price and distance but ignores program quality. Which pair matters?",
    "choices": [
      "Population and sample",
      "Model and limitation",
      "Revision and failure",
      "Position and condition"
    ],
    "correct": 1,
    "explanation": "The spreadsheet is a model; omitted program quality is a limitation.",
    "pool": "BOSS"
  },
  {
    "id": "X008",
    "term": "assumption + uncertainty",
    "format": "Boss Round",
    "prompt": "A budget projects next year using unchanged rent, but the lease is ending. Which pair matters?",
    "choices": [
      "Evidence and causation",
      "Preference and direction",
      "Quantity and credibility",
      "Assumption and uncertainty"
    ],
    "correct": 3,
    "explanation": "Unchanged rent is assumed; the actual future rent is uncertain.",
    "pool": "BOSS"
  },
  {
    "id": "X009",
    "term": "cost + opportunity cost",
    "format": "Boss Round",
    "prompt": "College A costs $4,000 more, and choosing it means giving up College B’s paid internship. Which pair fits?",
    "choices": [
      "Cost and opportunity cost",
      "Bias and credibility",
      "Claim and context",
      "Sample and population"
    ],
    "correct": 0,
    "explanation": "The extra $4,000 is a cost; the lost internship is opportunity cost.",
    "pool": "BOSS"
  },
  {
    "id": "X010",
    "term": "data + interpretation",
    "format": "Boss Round",
    "prompt": "A tracker records 6 hours of sleep and labels it “bad.” Which pair separates the record from its meaning?",
    "choices": [
      "Risk and threshold",
      "Benefit and cost",
      "Data and interpretation",
      "Position and evidence"
    ],
    "correct": 2,
    "explanation": "Six hours is recorded data; calling it bad interprets the result.",
    "pool": "BOSS"
  },
  {
    "id": "X011",
    "term": "leading question + bias",
    "format": "Boss Round",
    "prompt": "A survey asks, “Why do you support our excellent new schedule?” Which pair identifies the problem?",
    "choices": [
      "Model and revision",
      "Decision and direction",
      "Leading question and bias",
      "Quantity and measurement"
    ],
    "correct": 2,
    "explanation": "The wording pushes a preferred answer and may bias the responses.",
    "pool": "BOSS"
  },
  {
    "id": "X012",
    "term": "recommendation + justification",
    "format": "Boss Round",
    "prompt": "A student says, “Choose Plan C because it meets the budget and has the lowest risk.” Which pair is present?",
    "choices": [
      "Recommendation and justification",
      "Sample and population",
      "Correlation and causation",
      "Preference and uncertainty"
    ],
    "correct": 0,
    "explanation": "The student advises a choice and supports it with reasons.",
    "pool": "BOSS"
  }
];
