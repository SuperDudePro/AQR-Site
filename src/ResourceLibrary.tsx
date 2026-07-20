import { useMemo, useState } from "react";
import { publishedPosterTypes } from "./posterData";

const coreResources = [
  { title: "Why AQR", kind: "Course page", href: "/why-aqr", summary: "The purpose, legitimacy, and modern-math case for Applied Quantitative Reasoning." },
  { title: "Course Overview", kind: "Course page", href: "/course-overview", summary: "The year structure, major projects, mini-themes, tools, and expectations." },
  { title: "Quarter 1 — Know Yourself", kind: "Quarter", href: "/quarter-1", summary: "Responsible AI use, support systems, misleading graphs, units, and revision." },
  { title: "Quarter 2 — Track Yourself", kind: "Quarter", href: "/quarter-2", summary: "Self-tracking, surveys, data displays, claims, sampling, bias, and causation." },
  { title: "Quarter 3 — Build a Decision Tool", kind: "Quarter", href: "/quarter-3", summary: "Criteria, tradeoffs, assumptions, weighting, risk, uncertainty, and testing." },
  { title: "Quarter 4 — Don’t Get Played", kind: "Quarter", href: "/quarter-4", summary: "Claims, evidence, source trust, misleading displays, and practical skepticism." },
  { title: "All Classroom Posters", kind: "Poster collection", href: "/classroom-posters/all", summary: "Every finished AQR poster in one printable collection." },
];

export default function ResourceLibrary() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("all");
  const resources = useMemo(() => [
    ...coreResources,
    ...publishedPosterTypes.map((type) => ({ title: type.title, kind: "Poster category", href: `/classroom-posters/${type.slug}`, summary: `${type.summary} ${type.audienceUse}` })),
    ...publishedPosterTypes.flatMap((type) => type.posters.map((poster) => ({ title: poster.title, kind: "Poster", href: poster.pdf, summary: `${type.title}. ${poster.alt}` }))),
  ], []);
  const normalizedQuery = query.trim().toLowerCase();
  const matches = resources.filter((resource) => {
    const searchable = `${resource.title} ${resource.kind} ${resource.summary}`.toLowerCase();
    return (!normalizedQuery || searchable.includes(normalizedQuery)) && (kind === "all" || resource.kind === kind);
  });
  const kinds = [...new Set(resources.map((resource) => resource.kind))];

  return (
    <div className="poster-site-shell">
      <a className="poster-skip-link" href="#resource-main-content">Skip to main content</a>
      <header className="poster-site-header poster-hero"><div className="poster-topbar poster-wrap"><a className="poster-brand" href="/"><span className="poster-brand-mark">AQR</span><span className="poster-brand-name">Applied Quantitative Reasoning</span></a><nav className="poster-topnav" aria-label="Resource navigation"><a href="/">Home</a><a href="/course-overview">Course Overview</a><a href="/classroom-posters">Posters</a><a href="/resources" aria-current="page">Resources</a></nav></div></header>
      <main className="poster-page" id="resource-main-content">
        <section className="poster-hero poster-hero-main"><div className="poster-wrap poster-hero-inner"><p className="poster-kicker">Resource Finder</p><h1>Find the AQR page, idea, or poster you need.</h1><p className="poster-hero-lead">Search across course pages, quarter plans, poster categories, and every finished poster title.</p></div></section>
        <section className="poster-section poster-section-silver" aria-labelledby="resource-results-title"><div className="poster-wrap"><div className="poster-section-head poster-section-head-dark"><p className="poster-section-kicker">Search and filter</p><h2 id="resource-results-title">{matches.length} matching resource{matches.length === 1 ? "" : "s"}</h2></div>
          <div className="poster-back-link" style={{ alignItems: "end", flexWrap: "wrap", marginBottom: "2rem" }}><label><span className="poster-card-kicker">Words</span><input aria-label="Search AQR resources" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Sampling, AI, tradeoffs…" /></label><label><span className="poster-card-kicker">Type</span><select aria-label="Filter resource type" value={kind} onChange={(event) => setKind(event.target.value)}><option value="all">All resource types</option>{kinds.map((item) => <option key={item} value={item}>{item}</option>)}</select></label></div>
          <ul className="poster-type-grid" role="list">{matches.map((resource) => <li className="poster-type-list-item" key={`${resource.kind}-${resource.title}-${resource.href}`}><a className="poster-type-card" href={resource.href}><div className="poster-type-copy"><p className="poster-card-kicker">{resource.kind}</p><h3>{resource.title}</h3><p>{resource.summary}</p><span className="poster-card-link">Open resource</span></div></a></li>)}</ul>
        </div></section>
      </main>
      <footer className="poster-footer"><div className="poster-wrap poster-footer-inner"><p>© 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span></p></div></footer>
    </div>
  );
}
