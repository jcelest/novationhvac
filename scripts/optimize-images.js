/**
 * Generates WebP versions of PNG images for better mobile performance.
 * Run: npm run optimize:images (or as part of build)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '../public/images');

const IMAGES_TO_OPTIMIZE = [
  'maintenance-plan.png',
  'maintenance-tuneup.png',
  'emergency-hvac.png',
  'logo.png',
];

async function optimizeImages() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.log('Skipping image optimization (sharp not installed). Run: npm install sharp --save-dev');
    process.exit(0);
    return;
  }

  console.log('Optimizing images to WebP...');

  for (const file of IMAGES_TO_OPTIMIZE) {
    const src = path.join(imagesDir, file);
    const base = path.basename(file, '.png');
    const dest = path.join(imagesDir, `${base}.webp`);

    if (!fs.existsSync(src)) continue;

    try {
      await sharp(src)
        .webp({ quality: 82 })
        .toFile(dest);
      const before = fs.statSync(src).size;
      const after = fs.statSync(dest).size;
      console.log(`  ${file} → ${base}.webp (${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB)`);
    } catch (err) {
      console.warn(`  Failed ${file}:`, err.message);
    }
  }
}

optimizeImages();
