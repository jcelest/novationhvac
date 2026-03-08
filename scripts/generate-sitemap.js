/**
 * Generates sitemap.xml from routes config.
 * Run before build: npm run generate:sitemap (or as part of npm run build)
 *
 * When adding a new city: add the slug to citySlugs in scripts/routes.config.json
 * and add the route in src/App.jsx + src/data/cityData.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, 'routes.config.json');
const outputPath = path.join(__dirname, '../public/sitemap.xml');

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const { baseUrl, static: staticRoutes, citySlugs, cityPriority, cityPrioritySecondary, primaryCitySlugs, neighborhoodSlugs = [] } = config;

const today = new Date().toISOString().split('T')[0];

function buildUrl(route) {
  const loc = route.path ? `${baseUrl}/${route.path}` : `${baseUrl}/`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
}

const staticUrls = staticRoutes.map(buildUrl);

const cityUrls = citySlugs.map((slug) => {
  const priority = primaryCitySlugs.includes(slug) ? cityPriority : cityPrioritySecondary;
  return buildUrl({ path: slug, priority, changefreq: 'monthly' });
});

const neighborhoodUrls = neighborhoodSlugs.map((slug) =>
  buildUrl({ path: slug, priority: '0.8', changefreq: 'monthly' })
);

const allUrls = [...staticUrls, ...cityUrls, ...neighborhoodUrls].join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls}
</urlset>
`;

fs.writeFileSync(outputPath, sitemap);
console.log(`Generated sitemap.xml with ${staticUrls.length + cityUrls.length + neighborhoodUrls.length} URLs`);
console.log(`  Static: ${staticUrls.length}, City: ${cityUrls.length}, Neighborhood: ${neighborhoodUrls.length}`);
