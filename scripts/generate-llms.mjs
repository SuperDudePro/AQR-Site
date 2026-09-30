import fs from 'node:fs';
import { posterTypes } from '../src/posterData.ts';
import { publicRoutes, SITE_ORIGIN } from '../src/routeRegistry.ts';

// Generates public/llms.txt (https://llmstxt.org) so AI tools get a plain index of the course site.
const clean = (value) => String(value).replace(/\s+/g, ' ').trim();
const url = (path) => (path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`);
const label = (route) => clean(route.title.replace(/ \| (Applied Quantitative Reasoning|Vista PEAK Prep)$/, ''));
const link = (route) => `- [${label(route).replace(/[[\]]/g, '')}](${url(route.path)}): ${clean(route.description)}`;

const posterRoutes = publicRoutes.filter((route) => route.path.startsWith('/classroom-posters/'));
const courseRoutes = publicRoutes.filter((route) => !posterRoutes.includes(route));

const lines = [
  '# Applied Quantitative Reasoning (AQR)',
  '',
  '> Applied Quantitative Reasoning is a project-based high school math elective at Vista PEAK Preparatory (grades 11-12) built around real decisions, real data, real tools, and clear communication, including responsible AI use.',
  '',
  `The course syllabus is at ${SITE_ORIGIN}/syllabus.html.`,
  '',
  '## Course pages',
  '',
  ...courseRoutes.map(link),
  '',
  '## Classroom poster collections',
  '',
  ...posterRoutes.map((route) => {
    const type = posterTypes.find(({ slug }) => route.path === `/classroom-posters/${slug}`);
    return type
      ? `- [${clean(type.title)}](${url(route.path)}): ${clean(type.summary)}`
      : `- [All classroom posters](${url(route.path)})`;
  }),
  '',
];

fs.writeFileSync('public/llms.txt', `${lines.join('\n')}\n`);
console.log(`Generated public/llms.txt with ${publicRoutes.length} routes.`);
