// Converts the showcase images referenced by src/data/projects/*.json into
// optimised WebP variants under public/img/ and writes src/data/images.json
// (a manifest with intrinsic sizes + variants, used by <Img />).
//
// Source images live outside the site repo (the staged showcase repos), so
// this script is run locally and its output is committed. CI only runs
// `astro build`.
//
// Usage: npm run images            (REPOS_DIR defaults to ../repos)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const reposDir = path.resolve(process.env.REPOS_DIR ?? path.join(root, '..', 'repos'));
const outDir = path.join(root, 'public', 'img');
const projectsDir = path.join(root, 'src', 'data', 'projects');
const manifestPath = path.join(root, 'src', 'data', 'images.json');

const WIDTHS = [640, 1024, 1600];
const QUALITY = 76;

const manifest = {};

async function convert(srcRel, outBase, widths = WIDTHS) {
  const abs = path.join(reposDir, srcRel);
  if (!fs.existsSync(abs)) {
    console.warn('  missing:', srcRel);
    return;
  }
  const animated = abs.toLowerCase().endsWith('.gif');
  const meta = await sharp(abs, { animated }).metadata();
  const w = meta.width;
  const h = animated ? meta.pageHeight ?? meta.height : meta.height;
  const targets = animated ? [w] : [...new Set(widths.filter((x) => x < w).concat(Math.min(w, Math.max(...widths))))];
  const variants = [];
  for (const tw of targets.sort((a, b) => a - b)) {
    const file = `${outBase}-${tw}.webp`;
    const outAbs = path.join(outDir, file);
    fs.mkdirSync(path.dirname(outAbs), { recursive: true });
    if (!fs.existsSync(outAbs) || fs.statSync(outAbs).mtimeMs < fs.statSync(abs).mtimeMs) {
      await sharp(abs, { animated })
        .resize({ width: tw, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5, smartSubsample: true })
        .toFile(outAbs);
    }
    variants.push({ w: tw, src: `img/${file}` });
  }
  manifest[srcRel] = { w, h, variants };
}

const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.json'));
for (const f of files) {
  const p = JSON.parse(fs.readFileSync(path.join(projectsDir, f), 'utf8'));
  console.log(p.slug);
  for (const img of p.images) {
    const base = path.basename(img.src).replace(/\.\w+$/, '');
    const prefix = img.part ? `${img.part}-` : '';
    await convert(img.src, `${p.slug}/${prefix}${base}`);
  }
}

// Profile assets
await convert('ANaSHaker/assets/_src/photo.jpg', 'profile/photo', [240, 460]);

// Open Graph images (JPEG, 1200x630)
fs.mkdirSync(path.join(outDir, 'og'), { recursive: true });
const navy = { r: 8, g: 12, b: 26, alpha: 1 };
const header = await sharp(path.join(reposDir, 'ANaSHaker/assets/header.png')).resize({ width: 1200 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: navy } })
  .composite([{ input: header, top: 90, left: 0 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(outDir, 'og', 'home.jpg'));
for (const f of files) {
  const p = JSON.parse(fs.readFileSync(path.join(projectsDir, f), 'utf8'));
  const banner = p.images.find((i) => i.role === 'banner');
  if (!banner) continue;
  const buf = await sharp(path.join(reposDir, banner.src)).resize({ width: 1200, height: 600, fit: 'cover' }).toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 4, background: navy } })
    .composite([{ input: buf, top: 15, left: 0 }])
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(outDir, 'og', `${p.slug}.jpg`));
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 1));
console.log(`wrote ${Object.keys(manifest).length} images to manifest`);
