// Builds the round-rect app icons shown on project cards: public/img/logos/<slug>.webp (192px).
//
// Sources are the store icons (Google Play / App Store) staged in ../_store, brand files
// in ../_work and ../repos. Projects without an icon get a clean mark in their accent colour.
// Run locally (`npm run logos`) and commit the output, like `npm run images`.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const ws = path.resolve(process.env.WORKSPACE_DIR ?? path.join(root, '..'));
const outDir = path.join(root, 'public', 'img', 'logos');
const SIZE = 192;

/**
 * slug -> source (relative to the workspace).
 * `bg` + `pad`: backdrop for transparent logos. `zoom`: the logo is already a rounded tile, so crop
 * into it until its own corners fall outside the square.
 */
const sources = {
  talabatek: { src: '_store/com.talabatek.app/icon.png' },
  riza: { src: '_store/com.riza.store/icon.png' },
  vanilla: { src: '_store/com.vanilia.vanilia/icon.png' },
  'sim-2022': { src: '_store/com.app.sim.sim/logo_crop.png', bg: '#0b1d36', pad: 0.08 },
  insurify: { src: '_store/ios_insurify/ios_icon.jpg' },
  'delivery-iq': { src: '_store/com.delivery.iq/icon.png' },
  jahiz: { src: '_store/com.jahiz.userApp/icon.png' },
  studygo: { src: '_store/com.study.go/icon.png' },
  hamilguide: { src: '_store/com.dalil.elhwamelss/icon.png' },
  legalpal: { src: '_store/com.legalapp.pal/icon.png' },
  devora: { src: 'repos/devora-ecommerce-suite/assets/_src/devora_logo.png', zoom: 1.32 },
  'mohami-plus': { src: '_work/mp_site/assets/img/icon-512.png', zoom: 1.2 },
  oneway: { src: 'repos/oneway-case-study/assets/_src/oneway_tile.png', zoom: 1.16 },
  midgram: { src: '_work/midgram/web/icons/Icon-512.png', bg: '#ffffff' },
  riftech: { src: '_work/riftech/assets/images/identity/icon.png', bg: '#2a2622' },
  duat: { src: 'repos/duat-case-study/assets/_src/icon.svg', bg: '#2a1c12' },
  elmwafer: { src: 'repos/elmwafer/assets/_src/logo.png', bg: '#ffffff' },
  malazmna: { src: 'repos/malazmna/assets/_src/logo.png', bg: '#7d84ee', pad: 0.07 },
  muslim: { src: 'repos/muslim-app/docs/assets/_src/logo.png', zoom: 1.16 },
  vendora: { src: 'repos/vendora/assets/_src/icon.png', bg: '#ffffff' },
  'visit-egypt': { src: 'repos/visit-egypt/docs/assets/_src/logo.png', zoom: 1.14 },
};

/** Marks for projects with no icon of their own. */
const marks = {
  sawah: `<rect width="192" height="192" fill="#16110a"/><rect x="10" y="10" width="172" height="172" rx="34" fill="none" stroke="#C9A04A" stroke-opacity=".35" stroke-width="2"/>
    <path d="M96 38c-14 0-24 10-24 23 0 12 9 21 24 30v63" fill="none" stroke="#C9A04A" stroke-width="12" stroke-linecap="round"/>
    <path d="M60 104h72" stroke="#C9A04A" stroke-width="12" stroke-linecap="round"/>
    <path d="M96 38c14 0 24 10 24 23 0 12-9 21-24 30" fill="none" stroke="#C9A04A" stroke-width="12" stroke-linecap="round"/>`,
  'video-walkthrough': `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#A855F7"/><stop offset="1" stop-color="#6D28D9"/></linearGradient></defs>
    <rect width="192" height="192" fill="url(#g)"/><rect x="40" y="52" width="112" height="88" rx="18" fill="#fff" fill-opacity=".16"/>
    <path d="M84 74v44l36-22z" fill="#fff"/><circle cx="80" cy="152" r="5" fill="#fff"/><circle cx="96" cy="152" r="5" fill="#fff" fill-opacity=".5"/><circle cx="112" cy="152" r="5" fill="#fff" fill-opacity=".5"/>`,
};

fs.mkdirSync(outDir, { recursive: true });
const write = (img, slug) => img.webp({ quality: 88, effort: 6 }).toFile(path.join(outDir, `${slug}.webp`));

for (const [slug, { src, bg, pad = 0.1, zoom = 1 }] of Object.entries(sources)) {
  const abs = path.join(ws, src);
  if (!fs.existsSync(abs)) {
    console.warn('  missing:', slug, src);
    continue;
  }
  if (!bg) {
    const big = Math.round(SIZE * zoom);
    const off = Math.round((big - SIZE) / 2);
    const img = await sharp(abs).resize(big, big, { fit: 'cover' }).extract({ left: off, top: off, width: SIZE, height: SIZE }).toBuffer();
    await write(sharp(img), slug);
  } else {
    const inner = Math.round(SIZE * (1 - pad * 2));
    const logo = await sharp(abs, { density: 384 })
      .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    await write(sharp({ create: { width: SIZE, height: SIZE, channels: 4, background: bg } }).composite([{ input: logo, gravity: 'center' }]), slug);
  }
  console.log(slug);
}
for (const [slug, svg] of Object.entries(marks)) {
  await write(sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 192 192">${svg}</svg>`)), slug);
  console.log(slug, '(mark)');
}
