export type VocabularySectionKey = "core" | "q1" | "q2" | "q3" | "q4";

export type VocabularyTerm = {
  term: string;
  fullDefinition: string;
  plainLanguage: string;
  aqrUse: string;
  questionStem: string;
};

export type VocabularySection = {
  key: VocabularySectionKey;
  label: string;
  title: string;
  description: string;
  route: string;
  status: "framework" | "published";
  terms: VocabularyTerm[];
};

export const vocabularySections: VocabularySection[] = [
  {
    key: "core",
    label: "Core AQR Words",
    title: "The words used across the whole course",
    description: "Shared language for evidence, decisions, models, tradeoffs, uncertainty, revision, and explanation.",
    route: "/vocabulary/core",
    status: "framework",
    terms: [],
  },
  {
    key: "q1",
    label: "Quarter 1",
    title: "Know Yourself",
    description: "Vocabulary connected to self-data, measurement, scales, learner evidence, claims, visuals, and AI confidence.",
    route: "/vocabulary/quarter-1",
    status: "framework",
    terms: [],
  },
  {
    key: "q2",
    label: "Quarter 2",
    title: "Track Yourself",
    description: "Vocabulary connected to surveys, samples, bias, data displays, patterns, correlation, causation, and limitations.",
    route: "/vocabulary/quarter-2",
    status: "framework",
    terms: [],
  },
  {
    key: "q3",
    label: "Quarter 3",
    title: "Build a Decision Tool",
    description: "Vocabulary connected to criteria, tradeoffs, risk, cost, uncertainty, assumptions, weighting, and sensitivity.",
    route: "/vocabulary/quarter-3",
    status: "framework",
    terms: [],
  },
  {
    key: "q4",
    label: "Quarter 4",
    title: "Don’t Get Played",
    description: "Vocabulary connected to claims, evidence, misleading displays, source trust, reasonable belief, and critique.",
    route: "/vocabulary/quarter-4",
    status: "framework",
    terms: [],
  },
];

export const getVocabularySection = (key: VocabularySectionKey) =>
  vocabularySections.find((section) => section.key === key);
