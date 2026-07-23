/**
 * Export homepage hero trust badges as PNGs for print/flyer use.
 * Run: node scripts/export-hero-badges.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public/flyer-assets');

const BADGE_WIDTH = 400;
const BADGE_HEIGHT = 480;
const H_BADGE_WIDTH = 640;
const H_BADGE_HEIGHT = 88;
const SCALE = 2;

function sharedDefs(iconDefs) {
  return `
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d4af37"/>
      <stop offset="55%" stop-color="#92670a"/>
      <stop offset="100%" stop-color="#5c3e08"/>
    </linearGradient>
    <linearGradient id="cardShine" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff7cc" stop-opacity="0.22"/>
      <stop offset="42%" stop-color="#fff7cc" stop-opacity="0"/>
      <stop offset="100%" stop-color="#1e3a5f" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="topLine" x1="12%" y1="0%" x2="88%" y2="0%">
      <stop offset="0%" stop-color="#fff7cc" stop-opacity="0"/>
      <stop offset="50%" stop-color="#fff7cc" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#fff7cc" stop-opacity="0"/>
    </linearGradient>
    <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.3"/>
    </filter>
    ${iconDefs}
  `;
}

function badgeSvg({ title, subtitle, iconShapes, iconDefs }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${BADGE_WIDTH}" height="${BADGE_HEIGHT}" viewBox="0 0 ${BADGE_WIDTH} ${BADGE_HEIGHT}">
  <defs>${sharedDefs(iconDefs)}</defs>
  <rect x="8" y="8" width="384" height="464" rx="28" ry="28" fill="url(#cardBg)" stroke="#fff7cc" stroke-width="2" stroke-opacity="0.65"/>
  <rect x="8" y="8" width="384" height="464" rx="28" ry="28" fill="url(#cardShine)"/>
  <rect x="56" y="8" width="288" height="2" fill="url(#topLine)"/>
  <g transform="translate(128 83)" filter="url(#iconShadow)">
    <g transform="scale(3)">${iconShapes}</g>
  </g>
  <text x="200" y="330" text-anchor="middle" fill="#fff7cc" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="0.5">
    ${escapeXml(title)}
  </text>
  <text x="200" y="365" text-anchor="middle" fill="#fef3c7" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="600" letter-spacing="2.5" opacity="0.92">
    ${escapeXml(subtitle)}
  </text>
  <text x="200" y="430" text-anchor="middle" fill="#fde68a" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="600" letter-spacing="1.5" opacity="0.75">
    NOVATION HVAC
  </text>
</svg>`;
}

function horizontalBadgeSvg({ title, subtitle, iconShapes, iconDefs }) {
  const cardX = 6;
  const cardY = 6;
  const cardW = H_BADGE_WIDTH - 12;
  const cardH = H_BADGE_HEIGHT - 12;
  const iconScale = 1.35;
  const iconSize = 48 * iconScale;
  const iconY = cardY + (cardH - iconSize) / 2;
  const textX = cardX + iconSize + 18;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${H_BADGE_WIDTH}" height="${H_BADGE_HEIGHT}" viewBox="0 0 ${H_BADGE_WIDTH} ${H_BADGE_HEIGHT}">
  <defs>${sharedDefs(iconDefs)}</defs>
  <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="18" ry="18" fill="url(#cardBg)" stroke="#fff7cc" stroke-width="1.5" stroke-opacity="0.65"/>
  <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="18" ry="18" fill="url(#cardShine)"/>
  <rect x="${cardX + 48}" y="${cardY}" width="${cardW - 96}" height="1.5" fill="url(#topLine)"/>
  <line x1="${textX - 10}" y1="${cardY + 14}" x2="${textX - 10}" y2="${cardY + cardH - 14}" stroke="#fff7cc" stroke-opacity="0.25" stroke-width="1"/>
  <g transform="translate(${cardX + 10} ${iconY})" filter="url(#iconShadow)">
    <g transform="scale(${iconScale})">${iconShapes}</g>
  </g>
  <text x="${textX}" y="${cardY + cardH / 2 - 2}" fill="#fff7cc" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" letter-spacing="0.3" dominant-baseline="middle">
    ${escapeXml(title)}
  </text>
  <text x="${textX}" y="${cardY + cardH / 2 + 20}" fill="#fef3c7" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="600" letter-spacing="2.2" opacity="0.92">
    ${escapeXml(subtitle)}
  </text>
  <text x="${H_BADGE_WIDTH - 18}" y="${cardY + cardH / 2}" text-anchor="end" fill="#fde68a" font-family="Arial, Helvetica, sans-serif" font-size="10" font-weight="600" letter-spacing="1.2" opacity="0.7" dominant-baseline="middle">
    NOVATION HVAC
  </text>
</svg>`;
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const SAME_DAY_ICON = {
  defs: `
    <linearGradient id="goldDisc" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff7cc"/><stop offset="0.5" stop-color="#d4af37"/><stop offset="1" stop-color="#92670a"/>
    </linearGradient>
    <linearGradient id="goldDiscRing" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/><stop offset="1" stop-color="#b8860b"/>
    </linearGradient>
    <radialGradient id="goldDiscInner" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 22) rotate(90) scale(18)">
      <stop stop-color="#1e3a5f"/><stop offset="1" stop-color="#0f172a"/>
    </radialGradient>
    <linearGradient id="boltGold" x1="18" y1="14" x2="30" y2="35" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff7cc"/><stop offset="1" stop-color="#fbbf24"/>
    </linearGradient>
  `,
  shapes: `
      <circle cx="24" cy="24" r="22" fill="url(#goldDisc)" stroke="url(#goldDiscRing)" stroke-width="2"/>
      <circle cx="24" cy="24" r="17.5" fill="url(#goldDiscInner)" stroke="rgba(253,230,138,0.35)" stroke-width="1"/>
      <path d="M27 14 18 26h7.5l-1.5 9 11.5-14H27l1-7Z" fill="url(#boltGold)" stroke="#fff7cc" stroke-width="1.1" stroke-linejoin="round"/>
  `,
};

const STAR_RATED_ICON = {
  defs: `
    <linearGradient id="starDisc" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff7cc"/><stop offset="0.55" stop-color="#d4af37"/><stop offset="1" stop-color="#92670a"/>
    </linearGradient>
    <linearGradient id="starDiscRing" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/><stop offset="1" stop-color="#b8860b"/>
    </linearGradient>
    <radialGradient id="starDiscInner" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 22) rotate(90) scale(18)">
      <stop stop-color="#1e3a5f"/><stop offset="1" stop-color="#0f172a"/>
    </radialGradient>
    <linearGradient id="starGold" x1="14" y1="14" x2="34" y2="33" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff7cc"/><stop offset="0.5" stop-color="#fbbf24"/><stop offset="1" stop-color="#d97706"/>
    </linearGradient>
  `,
  shapes: `
      <circle cx="24" cy="24" r="22" fill="url(#starDisc)" stroke="url(#starDiscRing)" stroke-width="2"/>
      <circle cx="24" cy="24" r="17.5" fill="url(#starDiscInner)" stroke="rgba(253,230,138,0.3)" stroke-width="1"/>
      <path d="M24 14.5 26.2 21.2 33.2 21.5 27.8 25.8 29.5 32.5 24 28.8 18.5 32.5 20.2 25.8 14.8 21.5 21.8 21.2 24 14.5Z" fill="url(#starGold)" stroke="#fff7cc" stroke-width="0.9" stroke-linejoin="round"/>
      <circle cx="33.5" cy="15" r="2.5" fill="#b45309" stroke="#fde68a" stroke-width="0.9"/>
  `,
};

const badges = [
  {
    slug: 'same-day-service',
    title: 'Same-Day Service',
    subtitle: 'WHEN AVAILABLE',
    icon: SAME_DAY_ICON,
  },
  {
    slug: '5-star-rated',
    title: '5-Star Rated',
    subtitle: 'GOOGLE REVIEWS',
    icon: STAR_RATED_ICON,
  },
];

async function writeBadge({ svg, svgPath, pngPath, width, height }) {
  fs.writeFileSync(svgPath, svg);
  await sharp(Buffer.from(svg))
    .resize(width * SCALE, height * SCALE)
    .png()
    .toFile(pngPath);

  console.log(`Wrote ${path.relative(path.join(__dirname, '..'), pngPath)} (${width * SCALE}×${height * SCALE}px)`);
  console.log(`Wrote ${path.relative(path.join(__dirname, '..'), svgPath)}`);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  for (const badge of badges) {
    const iconArgs = {
      title: badge.title,
      subtitle: badge.subtitle,
      iconShapes: badge.icon.shapes,
      iconDefs: badge.icon.defs,
    };

    await writeBadge({
      svg: badgeSvg(iconArgs),
      svgPath: path.join(outDir, `badge-${badge.slug}.svg`),
      pngPath: path.join(outDir, `badge-${badge.slug}.png`),
      width: BADGE_WIDTH,
      height: BADGE_HEIGHT,
    });

    await writeBadge({
      svg: horizontalBadgeSvg(iconArgs),
      svgPath: path.join(outDir, `badge-${badge.slug}-horizontal.svg`),
      pngPath: path.join(outDir, `badge-${badge.slug}-horizontal.png`),
      width: H_BADGE_WIDTH,
      height: H_BADGE_HEIGHT,
    });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
