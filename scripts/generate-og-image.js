const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const W = 1200;
const H = 630;

const BG = '#0a0f0d';
const PRIMARY = '#176331';
const ACCENT = '#8abe53';
const TEXT_DIM = '#4a7a5a';

const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = BG;
ctx.fillRect(0, 0, W, H);

// --- Grid lines ---
ctx.strokeStyle = 'rgba(23, 99, 49, 0.18)';
ctx.lineWidth = 1;
const GRID = 60;
for (let x = 0; x <= W; x += GRID) {
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, H);
  ctx.stroke();
}
for (let y = 0; y <= H; y += GRID) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(W, y);
  ctx.stroke();
}

// --- Circuit board dots at intersections (sparse) ---
const dotPositions = [];
for (let x = GRID; x < W; x += GRID) {
  for (let y = GRID; y < H; y += GRID) {
    if (Math.random() > 0.72) dotPositions.push([x, y]);
  }
}

// Seed with deterministic-ish positions for repeatability
const fixedDots = [
  [60, 60], [180, 120], [300, 60], [480, 120], [600, 60], [780, 120],
  [900, 60], [1080, 120], [120, 180], [360, 240], [540, 180], [720, 240],
  [960, 180], [1140, 240], [60, 300], [240, 360], [420, 300], [660, 360],
  [840, 300], [1020, 360], [120, 420], [300, 480], [480, 420], [660, 480],
  [900, 420], [1080, 480], [180, 540], [360, 570], [600, 540], [780, 570],
  [1020, 540], [1140, 570],
  // right cluster
  [960, 300], [1020, 240], [1080, 300], [1140, 360],
  // left cluster
  [60, 480], [120, 540], [60, 540],
];

ctx.fillStyle = 'rgba(138, 190, 83, 0.35)';
for (const [x, y] of fixedDots) {
  ctx.beginPath();
  ctx.arc(x, y, 2.5, 0, Math.PI * 2);
  ctx.fill();
}

// Larger accent dots
const bigDots = [[60, 60], [1140, 570], [60, 570], [1140, 60]];
ctx.fillStyle = 'rgba(138, 190, 83, 0.55)';
for (const [x, y] of bigDots) {
  ctx.beginPath();
  ctx.arc(x, y, 4.5, 0, Math.PI * 2);
  ctx.fill();
}

// --- Horizontal circuit traces ---
const traces = [
  { y: 120, x1: 60, x2: 300 },
  { y: 240, x1: 360, x2: 600 },
  { y: 420, x1: 960, x2: 1140 },
  { y: 480, x1: 60, x2: 180 },
  { y: 300, x1: 1020, x2: 1140 },
];
ctx.strokeStyle = 'rgba(138, 190, 83, 0.2)';
ctx.lineWidth = 1.5;
for (const { y, x1, x2 } of traces) {
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}

// Vertical traces
const vTraces = [
  { x: 60, y1: 60, y2: 180 },
  { x: 1140, y1: 420, y2: 570 },
  { x: 300, y1: 60, y2: 180 },
];
for (const { x, y1, y2 } of vTraces) {
  ctx.beginPath();
  ctx.moveTo(x, y1);
  ctx.lineTo(x, y2);
  ctx.stroke();
}

// --- Accent border lines ---
// Top bar
ctx.strokeStyle = ACCENT;
ctx.lineWidth = 2;
ctx.globalAlpha = 0.6;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(W, 0);
ctx.stroke();
// Bottom bar
ctx.beginPath();
ctx.moveTo(0, H);
ctx.lineTo(W, H);
ctx.stroke();
ctx.globalAlpha = 1;

// Left vertical accent bar
const grad = ctx.createLinearGradient(0, H * 0.2, 0, H * 0.8);
grad.addColorStop(0, 'transparent');
grad.addColorStop(0.5, ACCENT);
grad.addColorStop(1, 'transparent');
ctx.strokeStyle = grad;
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.moveTo(32, H * 0.2);
ctx.lineTo(32, H * 0.8);
ctx.stroke();

// Right vertical accent bar
const grad2 = ctx.createLinearGradient(0, H * 0.2, 0, H * 0.8);
grad2.addColorStop(0, 'transparent');
grad2.addColorStop(0.5, ACCENT);
grad2.addColorStop(1, 'transparent');
ctx.strokeStyle = grad2;
ctx.beginPath();
ctx.moveTo(W - 32, H * 0.2);
ctx.lineTo(W - 32, H * 0.8);
ctx.stroke();

// --- "NKOSI" text ---
ctx.textAlign = 'center';
ctx.textBaseline = 'alphabetic';

const nameY = H / 2 - 30;
const nameX = W / 2;

// Subtle glow behind the text
ctx.shadowColor = PRIMARY;
ctx.shadowBlur = 60;

ctx.font = 'bold 130px sans-serif';
ctx.fillStyle = '#1e7d3e';
const nkosiText = 'NKOSI';
const hutText = 'HUT';

// Measure to center both words together
const nkosiWidth = ctx.measureText(nkosiText).width;

ctx.font = 'bold 130px sans-serif';
ctx.fillStyle = ACCENT;
const hutWidth = ctx.measureText(hutText).width;

const spacing = 14;
const totalWidth = nkosiWidth + spacing + hutWidth;
const startX = nameX - totalWidth / 2;

ctx.shadowColor = '#1e7d3e';
ctx.shadowBlur = 40;
ctx.fillStyle = '#1e7d3e';
ctx.fillText(nkosiText, startX + nkosiWidth / 2, nameY);

ctx.shadowColor = ACCENT;
ctx.shadowBlur = 40;
ctx.fillStyle = ACCENT;
ctx.fillText(hutText, startX + nkosiWidth + spacing + hutWidth / 2, nameY);

ctx.shadowBlur = 0;
ctx.shadowColor = 'transparent';

// --- Tagline ---
ctx.font = '28px sans-serif';
ctx.fillStyle = 'rgba(138, 190, 83, 0.75)';
ctx.fillText('Digital Solutions & Web Development Agency', W / 2, nameY + 60);

// --- Section label style line + text ---
ctx.fillStyle = 'rgba(138, 190, 83, 0.4)';
ctx.fillRect(W / 2 - 120, nameY + 82, 240, 1);

// --- Domain hint bottom right ---
ctx.font = '18px monospace';
ctx.fillStyle = 'rgba(138, 190, 83, 0.45)';
ctx.textAlign = 'right';
ctx.fillText('nkosihut.co.za', W - 48, H - 32);

// --- Write file ---
const outDir = path.join(__dirname, '..', 'public', 'images');
const outPath = path.join(outDir, 'og-image.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outPath, buffer);
console.log(`OG image saved to ${outPath} (${W}x${H})`);
