import { coreTerms } from "./vocabularyCore";
import { q1Terms } from "./vocabularyQ1";
import { q2Terms } from "./vocabularyQ2";
import { q3Terms } from "./vocabularyQ3";
import { q4Terms } from "./vocabularyQ4";

export type VocabularySectionKey = "core" | "q1" | "q2" | "q3" | "q4";
export type VocabularyGroup = "Core — must use repeatedly" | "Quarter-essential" | "Recognize and begin using" | "Extension vocabulary";

export type VocabularyTerm = {
  term: string;
  group: VocabularyGroup;
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
    description: "Words that should become normal classroom language across the entire year.",
    route: "/vocabulary/core",
    status: "published",
    terms: coreTerms,
  },
  {
    key: "q1",
    label: "Quarter 1",
    title: "Know Yourself",
    description: "Vocabulary for learner profiles, measurement, confidence, habits, comprehension, and personalized learning support.",
    route: "/vocabulary/quarter-1",
    status: "published",
    terms: q1Terms,
  },
  {
    key: "q2",
    label: "Quarter 2",
    title: "Track Yourself",
    description: "Vocabulary for data collection, surveys, samples, graphs, patterns, correlation, causation, and honest conclusions.",
    route: "/vocabulary/quarter-2",
    status: "published",
    terms: q2Terms,
  },
  {
    key: "q3",
    label: "Quarter 3",
    title: "Build a Decision Tool / App",
    description: "Vocabulary for choices, criteria, costs, risks, decision rules, testing, and revision.",
    route: "/vocabulary/quarter-3",
    status: "published",
    terms: q3Terms,
  },
  {
    key: "q4",
    label: "Quarter 4",
    title: "Don't Get Played",
    description: "Vocabulary for claims, evidence, sources, misleading displays, credibility, and reasonable belief.",
    route: "/vocabulary/quarter-4",
    status: "published",
    terms: q4Terms,
  },
];

export const getVocabularySection = (key: VocabularySectionKey) =>
  vocabularySections.find((section) => section.key === key);
