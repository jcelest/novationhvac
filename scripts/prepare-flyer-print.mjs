/**
 * Build print-ready 6x9 flyer assets for direct-mail upload (300 DPI).
 * Run: node scripts/prepare-flyer-print.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public/flyer-assets');

/** 6×9 in at 300 DPI */
const PRINT_WIDTH = 1800;
const PRINT_HEIGHT = 2700;
const PRINT_DENSITY = 300;

const FLYERS = [
  {
    source: 'novation-flyer-2008-2014-homes-front-6x9.png',
    base: 'novation-flyer-2008-2014-homes-front-6x9',
  },
  {
    source: 'novation-flyer-2008-2014-homes-back-6x9.png',
    base: 'novation-flyer-2008-2014-homes-back-6x9',
  },
];

async function buildPrintAsset({ source, base }) {
  const srcPath = path.join(outDir, source);
  if (!fs.existsSync(srcPath)) {
    throw new Error(`Missing source file: ${srcPath}`);
  }

  const pipeline = sharp(srcPath)
    .rotate()
    .resize(PRINT_WIDTH, PRINT_HEIGHT, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
    .withMetadata({ density: PRINT_DENSITY });

  const pngPath = path.join(outDir, `${base}-print.png`);
  const jpgPath = path.join(outDir, `${base}-print.jpg`);

  await pipeline.clone().png({ compressionLevel: 6 }).toFile(pngPath);
  await pipeline.clone().jpeg({ quality: 95, mozjpeg: true }).toFile(jpgPath);

  const pngMeta = await sharp(pngPath).metadata();
  const jpgMeta = await sharp(jpgPath).metadata();

  return {
    pngPath,
    jpgPath,
    pngMeta,
    jpgMeta,
  };
}

async function main() {
  for (const flyer of FLYERS) {
    const result = await buildPrintAsset(flyer);
    for (const [label, filePath, meta] of [
      ['PNG', result.pngPath, result.pngMeta],
      ['JPG', result.jpgPath, result.jpgMeta],
    ]) {
      const sizeKb = (fs.statSync(filePath).size / 1024).toFixed(0);
      console.log(
        `${path.basename(filePath)}: ${meta.width}x${meta.height}, ${meta.density}dpi, ${meta.format}/${meta.space}, ${sizeKb}KB`
      );
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
