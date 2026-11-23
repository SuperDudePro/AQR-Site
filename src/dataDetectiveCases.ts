// Fictional classroom examples; never populated from student records.
export type DetectiveCase = {
  id: string;
  skill: string;
  title: string;
  setup: string;
  prompt: string;
  headers: [string, string][];
  rows: [string, string][];
  options: [string, string, string];
  correct: number;
  explanation: string;
  evidence: string;
  limitation: string;
  visual?: "scale";
};

export const detectiveCases: DetectiveCase[] = [
  {
    id: "missing", skill: "Missing is not zero", title: "The incomplete tracking log",
    setup: "Five fictional students recorded how many minutes they read on Monday. One student did not report a value.",
    headers: ["Student", "Reported minutes"],
    rows: [["Ari", "25"], ["Bea", "0"], ["Cam", "Not reported"], ["Dev", "40"], ["Eli", "35"]],
    prompt: "A report says the average is 20 minutes because the missing response was counted as zero. What is the strongest correction?",
    options: [
      "The average of the four reported values is 25 minutes; the missing value is unknown.",
      "The average is 20 minutes because not reporting means zero.",
      "Remove Bea's zero too, since it lowers the average."
    ],
    correct: 0,
    explanation: "The four actual reports sum to 100 minutes. 100 ÷ 4 = 25. Bea reported a real zero; Cam's missing value is unknown. Neither should be silently changed.",
    evidence: "4 reported values: 25 + 0 + 40 + 35 = 100; mean = 25 minutes.",
    limitation: "This describes only the four students who reported a value."
  },
  {
    id: "scale", skill: "Check the chart axis", title: "The dramatic-looking poll",
    setup: "A fictional poll shows approval scores of 70% and 74%. The bars below start at 68%, making the difference look unusually large.",
    headers: ["Option", "Approval"],
    rows: [["Plan A", "70%"], ["Plan B", "74%"]],
    visual: "scale",
    prompt: "Which statement would most fairly describe the comparison?",
    options: [
      "Plan B has about four times the approval of Plan A.",
      "Plan B is 4 percentage points higher; the truncated axis exaggerates its visual size.",
      "Plan B is 4% lower once the bars are correctly scaled."
    ],
    correct: 1,
    explanation: "74% − 70% = 4 percentage points. The graph starts at 68%, so the visible bar lengths (2 and 6) look three times apart even though the underlying percentages are close.",
    evidence: "Plan B 74% versus Plan A 70% = 4 percentage points.",
    limitation: "The poll's sample size and method are not supplied, so we cannot judge representativeness."
  },
  {
    id: "outlier", skill: "Investigate unusual values", title: "The travel-time surprise",
    setup: "Five fictional bus trips took 9, 11, 12, 13, and 55 minutes. One unusually long trip changes the mean.",
    headers: ["Trip", "Minutes"],
    rows: [["1", "9"], ["2", "11"], ["3", "12"], ["4", "13"], ["5", "55"]],
    prompt: "What is the best report of a typical trip?",
    options: [
      "The mean of 20 minutes tells the whole story.",
      "Ignore the 55-minute trip because it is inconvenient.",
      "Report both the 20-minute mean and the 12-minute median; investigate the 55-minute trip."
    ],
    correct: 2,
    explanation: "The sum is 100, giving a mean of 20 minutes. The middle value is 12. Neither statistic is wrong, but the unusually long trip pulls the mean up; investigate before excluding it.",
    evidence: "(9 + 11 + 12 + 13 + 55) ÷ 5 = 20; sorted middle value = 12.",
    limitation: "Five trips are too few to promise what any future trip will take."
  },
  {
    id: "rates", skill: "Compare fairly", title: "The attendance claim",
    setup: "Two fictional groups have different numbers of members. A flyer says Group B had better attendance because more people attended.",
    headers: ["Group", "Attended / total"],
    rows: [["Group A", "18 / 20"], ["Group B", "36 / 50"]],
    prompt: "Which conclusion uses the most relevant comparison?",
    options: [
      "Group B is better because 36 is greater than 18.",
      "Group A has the higher attendance rate: 90% versus 72%.",
      "Both groups have equal attendance because both had absences."
    ],
    correct: 1,
    explanation: "Compare rates when group sizes differ: 18 ÷ 20 = 90%; 36 ÷ 50 = 72%. Group B has more attendees only because it is much larger.",
    evidence: "Group A: 18/20 = 90%; Group B: 36/50 = 72%.",
    limitation: "Attendance at one event does not establish which group is more engaged overall."
  }
];
