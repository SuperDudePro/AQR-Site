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
  { path: "/", page: "home", breadcrumbLabel: "Home", title: "Applied Quantitative Reasoning | Vista PEAK Prep", description: "Applied Quantitative Reasoning at Vista PEAK Prep: serious math for real decisions, real data, real tools, and real communication." },
  { path: "/why-aqr", page: "why", breadcrumbLabel: "Why AQR", title: "Why AQR | Applied Quantitative Reasoning", description: "Why Applied Quantitative Reasoning is a serious modern math pathway built around data, evidence, practical decisions, and responsible AI use that requires real student thinking." },
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
export const publicRoutes: RouteDefinition[] = [
  ...staticRoutes,
  { ...posterRoute, path: "/classroom-posters/all", parentPath: posterRoute.path },
  ...posterTypes.map(({ slug }): RouteDefinition => ({
    ...posterRoute,
    path: `/classroom-posters/${slug}`,
    parentPath: posterRoute.path,
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
