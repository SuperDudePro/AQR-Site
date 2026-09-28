import { getRoute, SITE_ORIGIN } from "./routeRegistry";
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
const COURSE_ID = `${SITE_ORIGIN}/#course`;

type JsonLd = Record<string, unknown>;

function absoluteUrl(path: string) {
  return new URL(path, SITE_ORIGIN).href;
}

// Pure builder: returns the JSON-LD object for a route. No DOM access, so it is
// safe to call at build time (prerender) and in the browser (applyStructuredData).
export function buildStructuredData(path: string) {
  const route = getRoute(path);
  const { title, description } = route;
  const canonicalUrl = absoluteUrl(path === "/" ? "/" : path);
  const graph: JsonLd[] = [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_ORIGIN}/`,
      name: "Applied Quantitative Reasoning",
      description,
    },
    {
      "@type": "Course",
      "@id": COURSE_ID,
      name: "Applied Quantitative Reasoning",
      description:
        "A high school quantitative reasoning course using real data, evidence, uncertainty, modeling, practical decisions, and clear communication.",
      provider: {
        "@type": "EducationalOrganization",
        name: "Vista PEAK Preparatory",
      },
      url: `${SITE_ORIGIN}/course-overview`,
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": COURSE_ID },
    },
  ];

  if (path !== "/") {
    const items: JsonLd[] = [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
    ];
    if (route.parentPath) items.push({ "@type": "ListItem", position: 2, name: getRoute(route.parentPath).breadcrumbLabel, item: absoluteUrl(route.parentPath) });
    items.push({ "@type": "ListItem", position: items.length + 1, name: route.breadcrumbLabel, item: canonicalUrl });
    graph.push({ "@type": "BreadcrumbList", itemListElement: items });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function applyStructuredData(path: string) {
  const data = buildStructuredData(path);
  let element = document.head.querySelector<HTMLScriptElement>("script[data-site-jsonld]");
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.siteJsonld = "true";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}
