const SITE_ORIGIN = "https://appliedquantitativereasoning.com";
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
const COURSE_ID = `${SITE_ORIGIN}/#course`;

type JsonLd = Record<string, unknown>;

function absoluteUrl(path: string) {
  return new URL(path, SITE_ORIGIN).href;
}

function pageLabel(path: string) {
  const labels: Record<string, string> = {
    "/why-aqr": "Why AQR",
    "/course-overview": "Course Overview",
    "/quarter-1": "Quarter 1",
    "/quarter-2": "Quarter 2",
    "/quarter-3": "Quarter 3",
    "/quarter-4": "Quarter 4",
    "/classroom-posters": "Classroom Posters",
    "/contact": "Contact",
  };
  if (path.startsWith("/classroom-posters/")) return "Classroom Posters";
  return labels[path] ?? "Applied Quantitative Reasoning";
}

export function applyStructuredData(path: string, title: string, description: string) {
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
    const items = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_ORIGIN}/`,
      },
    ];

    if (path.startsWith("/classroom-posters/")) {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: "Classroom Posters",
        item: `${SITE_ORIGIN}/classroom-posters`,
      });
      items.push({
        "@type": "ListItem",
        position: 3,
        name: pageLabel(path),
        item: canonicalUrl,
      });
    } else {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: pageLabel(path),
        item: canonicalUrl,
      });
    }

    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: items,
    });
  }

  let element = document.head.querySelector<HTMLScriptElement>("script[data-site-jsonld]");
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.siteJsonld = "true";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
