import { posterTypes } from "./posterData";

export const SITE_ORIGIN = "https://appliedquantitativereasoning.com";
export type Page = "home" | "why" | "ai" | "overview" | "guide" | "vocabulary" | "vocabCore" | "vocabQ1" | "vocabQ2" | "vocabQ3" | "vocabQ4" | "q1" | "q2" | "q3" | "q4" | "posters" | "resources" | "contact";
export type RouteDefinition = {
  path: string;
  page: Page;
  title: string;
  description: string;
  breadcrumbLabel: string;
  parentPath?: string;
};

const staticRoutes: RouteDefinition[] = [
  { path: "/", page: "home", breadcrumbLabel: "Home", title: "Applied Quantitative Reasoning (AQR) | Fourth-Year High School Math", description: "Applied Quantitative Reasoning (AQR) at Vista PEAK Prep is a fourth-year high school math course built around real decisions, data, modeling, evidence, tools, and communication." },
  { path: "/why-aqr", page: "why", breadcrumbLabel: "Why AQR", title: "What Is AQR Math? | Applied Quantitative Reasoning", description: "AQR stands for Applied Quantitative Reasoning, a serious fourth-year high school math class built around data, decisions, modeling, evidence, tools, and real-world reasoning." },
  { path: "/why-ai", page: "ai", breadcrumbLabel: "Why AI?", title: "Why AI? | Applied Quantitative Reasoning", description: "AQR's position on AI: students should never surrender their thinking, but they should learn how to question, test, and use powerful AI tools to become more capable." },
  { path: "/course-overview", page: "overview", breadcrumbLabel: "Course Overview", title: "Course Overview | Applied Quantitative Reasoning", description: "A clear overview of the AQR year arc, quarter project families, sequential quantitative-reasoning focus windows, tools, checkpoints, and course pathways." },
  { path: "/student-guide", page: "guide", breadcrumbLabel: "Student Guide", title: "Student Guide | Applied Quantitative Reasoning", description: "A practical guide to AQR classroom routines, progress expectations, responsible tool use, discussion, language support, and getting help." },
  { path: "/vocabulary", page: "vocabulary", breadcrumbLabel: "Vocabulary", title: "Vocabulary | Applied Quantitative Reasoning", description: "The AQR vocabulary hub, organized into core course language and Quarter 1 through Quarter 4 sections." },
  { path: "/vocabulary/core", page: "vocabCore", breadcrumbLabel: "Core AQR Vocabulary", title: "Core AQR Vocabulary | Applied Quantitative Reasoning", description: "Core language used across AQR for evidence, decisions, models, tradeoffs, uncertainty, revision, and explanation." },
  { path: "/vocabulary/quarter-1", page: "vocabQ1", breadcrumbLabel: "Quarter 1 Vocabulary", title: "Quarter 1 Vocabulary | Applied Quantitative Reasoning", description: "Quarter 1 vocabulary for self-data, measurement, learner evidence, claims, visuals, and AI confidence." },
  { path: "/vocabulary/quarter-2", page: "vocabQ2", breadcrumbLabel: "Quarter 2 Vocabulary", title: "Quarter 2 Vocabulary | Applied Quantitative Reasoning", description: "Quarter 2 vocabulary for surveys, samples, bias, data displays, correlation, causation, and limitations." },
  { path: "/vocabulary/quarter-3", page: "vocabQ3", breadcrumbLabel: "Quarter 3 Vocabulary", title: "Quarter 3 Vocabulary | Applied Quantitative Reasoning", description: "Quarter 3 vocabulary for criteria, tradeoffs, risk, cost, uncertainty, assumptions, weighting, and sensitivity." },
  { path: "/vocabulary/quarter-4", page: "vocabQ4", breadcrumbLabel: "Quarter 4 Vocabulary", title: "Quarter 4 Vocabulary | Applied Quantitative Reasoning", description: "Quarter 4 vocabulary for claims, evidence, misleading displays, source trust, reasonable belief, and critique." },
  { path: "/quarter-1", page: "q1", breadcrumbLabel: "Quarter 1", title: "Quarter 1: Know Yourself | Applied Quantitative Reasoning", description: "Build a portable learner profile, capture an ordinary-AI baseline, and test what changes with personalized learning support." },
  { path: "/quarter-2", page: "q2", breadcrumbLabel: "Quarter 2", title: "Quarter 2: Track Yourself | Applied Quantitative Reasoning", description: "Collect and analyze real data while examining survey quality, sampling, bias, correlation, causation, and honest limitations." },
  { path: "/quarter-3", page: "q3", breadcrumbLabel: "Quarter 3", title: "Quarter 3: Build a Decision Tool | Applied Quantitative Reasoning", description: "Build and test a decision tool using options, criteria, tradeoffs, risk, cost, uncertainty, assumptions, weighting, and sensitivity." },
  { path: "/quarter-4", page: "q4", breadcrumbLabel: "Quarter 4", title: "Quarter 4: Don’t Get Played | Applied Quantitative Reasoning", description: "Practical skepticism about claims, graphs, statistics, samples, sources, AI output, and misleading evidence." },
  { path: "/classroom-posters", page: "posters", breadcrumbLabel: "Classroom Posters", title: "Classroom Posters | Applied Quantitative Reasoning", description: "AQR classroom poster designs for quantitative reasoning, data skepticism, decision-making, AI use, work habits, and thinking moves." },
  { path: "/resources", page: "resources", breadcrumbLabel: "Resource Finder", title: "Resource Finder | Applied Quantitative Reasoning", description: "Search AQR course pages, quarter plans, vocabulary, poster categories, and finished poster designs." },
  { path: "/contact", page: "contact", breadcrumbLabel: "Contact", title: "Contact | Applied Quantitative Reasoning", description: "Contact Applied Quantitative Reasoning at Vista PEAK Prep with questions or comments about the course and public resources." },
];

const posterRoute = staticRoutes.find((route) => route.page === "posters")!;

// Search metadata describes each published collection; visible poster content
// remains owned by posterData.ts.
const posterCategoryMetadata: Record<string, Pick<RouteDefinition, "title" | "description">> = {
  "aqr-identity": {
    title: "AQR Identity Posters — Real Math, Real Decisions",
    description: "AQR classroom posters on real mathematics, decisions, data, tools, and communication. Explore the course's core ideas through visual reminders.",
  },
  "qr-questions": {
    title: "Quantitative Reasoning Question Posters",
    description: "Quantitative reasoning questions for the classroom: compared to what, per what, what does this prove, and what are we measuring?",
  },
  "data-anti-bs": {
    title: "Data Literacy & Misleading Graph Posters",
    description: "Classroom posters on misleading graphs, sampling bias, weak evidence, bad surveys, cherry-picked data, and correlation versus causation.",
  },
  "decision-model": {
    title: "Mathematical Decision-Making Posters",
    description: "AQR decision-making posters covering criteria, tradeoffs, model assumptions, weighting, sensitivity checks, and testing recommendations.",
  },
  "ai-tool-use": {
    title: "Responsible AI Use in Learning — Posters",
    description: "Classroom posters on responsible AI use, source grounding, critical judgment, and student ownership of tool-supported thinking.",
  },
  "pass-path-work-habits": {
    title: "Progress, Revision & Work Habits Posters",
    description: "AQR work-habits posters about checkpoints, showing genuine progress, revising from evidence, and asking for help earlier.",
  },
  "thinking-moves": {
    title: "Quantitative Reasoning Thinking-Move Posters",
    description: "AQR thinking-move posters on naming claims, checking evidence, finding flaws, stating limits, and explaining reasoning clearly.",
  },
  "quotation-posters": {
    title: "Classroom Quotation Posters",
    description: "AQR classroom quotation posters on courage, learning, humility, truth, revision, responsibility, persistence, and simplicity.",
  },
};

if (
  posterTypes.length !== Object.keys(posterCategoryMetadata).length ||
  posterTypes.some(({ slug }) => !posterCategoryMetadata[slug])
) throw new Error("Poster category metadata must cover every published category");

export const publicRoutes: RouteDefinition[] = [
  ...staticRoutes,
  {
    ...posterRoute,
    path: "/classroom-posters/all",
    parentPath: posterRoute.path,
    title: "All AQR Classroom Posters | Applied Quantitative Reasoning",
    description: "Browse the complete AQR classroom poster gallery, including data literacy, quantitative reasoning, decision-making, AI use, and thinking habits.",
    breadcrumbLabel: "All Posters",
  },
  ...posterTypes.map(({ slug, title }): RouteDefinition => ({
    ...posterRoute,
    ...posterCategoryMetadata[slug],
    path: `/classroom-posters/${slug}`,
    parentPath: posterRoute.path,
    breadcrumbLabel: title,
  })),
];

const routesByPath = new Map(publicRoutes.map((route) => [route.path, route]));
if (routesByPath.size !== publicRoutes.length) throw new Error("Duplicate public route in registry");

export function normalizeRoute(pathname: string): string {
  const path = pathname.replace(/\/{2,}/g, "/").replace(/\/$/, "");
  return path || "/";
}

export function getRoute(pathname: string): RouteDefinition {
  const path = normalizeRoute(pathname);
  if (routesByPath.has(path)) return routesByPath.get(path)!;
  // Preserve the SPA's existing fallback for poster URLs outside the published list.
  if (path.startsWith(`${posterRoute.path}/`)) return { ...posterRoute, path, parentPath: posterRoute.path };
  return staticRoutes[0];
}
