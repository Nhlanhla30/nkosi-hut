const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'public', 'images', 'logo-color.png');
const APP_DIR = path.join(__dirname, '..', 'src', 'app');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function resizePng(src, destPath, size) {
  const img = await loadImage(src);
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, size, size);
  fs.writeFileSync(destPath, canvas.toBuffer('image/png'));
  console.log(`  ${destPath} (${size}x${size})`);
}

// Minimal ICO writer: single 16x16 PNG embedded in ICO container
async function writeIco(src, destPath) {
  const SIZE = 32;
  const img = await loadImage(src);
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, SIZE, SIZE);
  const pngData = canvas.toBuffer('image/png');

  // ICO header
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);   // reserved
  header.writeUInt16LE(1, 2);   // type: 1 = ICO
  header.writeUInt16LE(1, 4);   // number of images

  // Directory entry (16 bytes)
  const dir = Buffer.alloc(16);
  dir.writeUInt8(SIZE, 0);           // width (0 = 256)
  dir.writeUInt8(SIZE, 1);           // height
  dir.writeUInt8(0, 2);              // color count
  dir.writeUInt8(0, 3);              // reserved
  dir.writeUInt16LE(1, 4);           // color planes
  dir.writeUInt16LE(32, 6);          // bits per pixel
  dir.writeUInt32LE(pngData.length, 8); // size of image data
  dir.writeUInt32LE(6 + 16, 12);    // offset of image data

  const ico = Buffer.concat([header, dir, pngData]);
  fs.writeFileSync(destPath, ico);
  console.log(`  ${destPath} (ICO 32x32)`);
}

(async () => {
  console.log('Generating favicons from', SRC);

  // Next.js App Router auto-serves these from src/app/
  await writeIco(SRC, path.join(APP_DIR, 'favicon.ico'));
  await resizePng(SRC, path.join(APP_DIR, 'icon.png'), 512);
  await resizePng(SRC, path.join(APP_DIR, 'apple-icon.png'), 180);

  // Also put in public/ so direct URL access works
  await resizePng(SRC, path.join(PUBLIC_DIR, 'apple-touch-icon.png'), 180);
  await resizePng(SRC, path.join(PUBLIC_DIR, 'icon-192.png'), 192);
  await resizePng(SRC, path.join(PUBLIC_DIR, 'icon-512.png'), 512);

  console.log('\nDone. Next.js will auto-serve favicon.ico, icon.png, apple-icon.png from src/app/');
})();
