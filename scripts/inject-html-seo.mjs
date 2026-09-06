/**
 * After `vite build`, creates one HTML file per public route with correct
 * <title>, meta description, canonical, and OG tags in the *initial* HTML.
 * Fixes Google seeing the same head for every URL (SPA shell only).
 *
 * Works with Vercel `cleanUrls: true` — /orlando serves orlando.html.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { coolingData, heatingData, indoorAirQualityData } from '../src/data/serviceData.js';
import { allCityData } from '../src/data/cityData.js';
import { allNeighborhoodData } from '../src/data/neighborhoodData.js';
import {
  HOME_PAGE_TITLE,
  HOME_PAGE_DESCRIPTION,
  SITE_URL,
  OG_IMAGE,
  SITE_NAME,
} from '../src/utils/seoConstants.js';
import { b2bHvacMeta } from '../src/data/b2bHvacData.js';
import { INSTALL_SLUG, installMeta } from '../src/data/acInstallationData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

const STATIC_PAGE_META = {
  'emergency-ac-repair': {
    title: '24/7 Emergency AC Repair Central Florida | Same-Day Service | Novation',
    description:
      'Emergency-first intent: no-cool AC repair after hours and nights. Same-day when available across Central Florida. Not your primary install or Orlando metro page. Call (407) 973-1523.',
  },
  [INSTALL_SLUG]: {
    title: installMeta.title,
    description: installMeta.description,
    robots: 'index, follow',
  },
  'hvac-contractor-b2b': {
    title: b2bHvacMeta.title,
    description: b2bHvacMeta.description,
  },
  specials: {
    title: 'Veteran & Military Discount | 10% Off HVAC | Novation Heating and Air Conditioning',
    description:
      'Novation Heating and Air Conditioning offers 10% off HVAC services for veterans and active military. AC repair, heating, cooling. Orlando, Kissimmee, Central Florida. Call (407) 973-1523.',
  },
  'service-areas': {
    title: 'Central Florida HVAC Service Areas & City Pages | Novation',
    description:
      'Browse where Novation dispatches: Poinciana home base, emphasis markets (Orlando, Winter Haven, Lakeland), counties, and neighborhood pages—not a substitute for city/service detail pages.',
  },
  about: {
    title: 'About Novation Heating and Air Conditioning | Orlando HVAC | License CAC1823924',
    description:
      "Novation Heating and Air Conditioning - Orlando's trusted HVAC company. Licensed (CAC1823924), bonded, insured. 24/7 emergency service. AC repair, heating, cooling. Free estimates. (407) 973-1523.",
  },
  'book-appointment': {
    title: 'Book Appointment | Novation Heating and Air Conditioning | HVAC Orlando FL',
    description:
      'Book an HVAC appointment with Novation Heating and Air Conditioning. AC repair, heating, cooling services. Orlando, Kissimmee, Central Florida. (407) 973-1523.',
  },
  contact: {
    title: 'Contact Novation Heating and Air Conditioning | Request Service | (407) 973-1523',
    description:
      'Contact Novation Heating and Air Conditioning for AC repair, heating, cooling services. 24/7 emergency. Orlando, Kissimmee, Central Florida. Call (407) 973-1523 or request service online.',
  },
  'flyer-2008-2014-homes-front': {
    title: 'Novation Flyer — 2008–2014 Homes (Front)',
    description: 'Novation Heating and Air Conditioning 6x9 postcard front.',
    robots: 'noindex, nofollow',
  },
  'flyer-2008-2014-homes-back': {
    title: 'Novation Flyer — 2008–2014 Homes (Back)',
    description: 'Novation Heating and Air Conditioning 6x9 postcard back.',
    robots: 'noindex, nofollow',
  },
};

function escapeHtmlAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function applySeo(html, { canonical, title, description, robots }) {
  const t = escapeHtmlAttr(title);
  const d = escapeHtmlAttr(description);
  const c = escapeHtmlAttr(canonical);
  const og = escapeHtmlAttr(OG_IMAGE);
  const sn = escapeHtmlAttr(SITE_NAME);

  let out = html.replace(/<title>[^<]*<\/title>/i, `<title>${t}</title>`);
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/i,
    `<meta name="description" content="${d}" />`
  );

  if (robots) {
    const r = escapeHtmlAttr(robots);
    if (/<meta\s+name="robots"/i.test(out)) {
      out = out.replace(/<meta\s+name="robots"\s+content="[^"]*"\s*\/>/i, `<meta name="robots" content="${r}" />`);
    } else {
      out = out.replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/>/i,
        `<meta name="description" content="${d}" />\n    <meta name="robots" content="${r}" />`
      );
    }
  }

  const seoBlock = `    <link rel="canonical" href="${c}" />
    <meta property="og:url" content="${c}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:image" content="${og}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="${sn}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${t}" />
    <meta name="twitter:description" content="${d}" />
    <meta name="twitter:image" content="${og}" />`;

  out = out.replace(
    /\s*<!-- Per-route canonical \+ OG:[^>]*-->/i,
    `\n${seoBlock}\n    <!-- Static shell SEO; react-helmet-async syncs on hydrate -->\n`
  );

  if (!out.includes('rel="canonical"')) {
    out = out.replace(
      /(<meta\s+name="keywords"\s+content="[^"]*"\s*\/>)/i,
      `$1\n${seoBlock}`
    );
  }

  return out;
}

function buildSeoEntries() {
  const entries = [];

  entries.push({
    fileSlug: null,
    canonical: `${SITE_URL}/`,
    title: HOME_PAGE_TITLE,
    description: HOME_PAGE_DESCRIPTION,
  });

  const services = [
    ['cooling', coolingData],
    ['heating', heatingData],
    ['indoor-air-quality', indoorAirQualityData],
  ];
  for (const [slug, data] of services) {
    entries.push({
      fileSlug: slug,
      canonical: `${SITE_URL}/${slug}`,
      title: data.metaTitle,
      description: data.metaDescription,
    });
  }

  for (const [slug, meta] of Object.entries(STATIC_PAGE_META)) {
    entries.push({
      fileSlug: slug,
      canonical: `${SITE_URL}/${slug}`,
      title: meta.title,
      description: meta.description,
      robots: meta.robots,
    });
  }

  for (const city of Object.values(allCityData)) {
    entries.push({
      fileSlug: city.slug,
      canonical: `${SITE_URL}/${city.slug}`,
      title: city.metaTitle,
      description: city.metaDescription,
    });
  }

  for (const n of Object.values(allNeighborhoodData)) {
    entries.push({
      fileSlug: n.slug,
      canonical: `${SITE_URL}/${n.slug}`,
      title: n.metaTitle,
      description: n.metaDescription,
    });
  }

  return entries;
}

function main() {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('inject-html-seo: dist/index.html missing. Run vite build first.');
    process.exit(1);
  }

  const template = fs.readFileSync(indexPath, 'utf8');
  const entries = buildSeoEntries();
  let homeWritten = false;
  let extraCount = 0;

  for (const { fileSlug, canonical, title, description, robots } of entries) {
    const html = applySeo(template, { canonical, title, description, robots });
    if (fileSlug == null) {
      fs.writeFileSync(indexPath, html);
      homeWritten = true;
    } else {
      fs.writeFileSync(path.join(distDir, `${fileSlug}.html`), html);
      extraCount += 1;
    }
  }

  if (!homeWritten) {
    console.error('inject-html-seo: home entry missing.');
    process.exit(1);
  }

  const notFoundHtml = applySeo(template, {
    canonical: `${SITE_URL}/`,
    title: 'Page Not Found | Novation HVAC',
    description: 'This page is not available. Return to Novation Heating and Air Conditioning.',
    robots: 'noindex, nofollow',
  });
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml);

  console.log(`inject-html-seo: wrote dist/index.html + ${extraCount} route HTML files (${entries.length} total routes).`);
}

main();
