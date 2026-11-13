// Procedural material library. Every texture is computed here; nothing is loaded from disk.
import * as THREE from "./wl80-r3-three-three.module.js";

const hash = (x, y, s) => {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(s, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
};
function vnoise(x, y, px, py, s) {
  const xi = Math.floor(x), yi = Math.floor(y), fx = x - xi, fy = y - yi;
  const x0 = ((xi % px) + px) % px, x1 = (x0 + 1) % px, y0 = ((yi % py) + py) % py, y1 = (y0 + 1) % py;
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);
  const a = hash(x0, y0, s), b = hash(x1, y0, s), c = hash(x0, y1, s), d = hash(x1, y1, s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
// tileable fractal noise, u,v in [0,1)
export function fbm(u, v, fx, fy, oct, s) {
  let a = 0, amp = 0.5, n = 0;
  for (let i = 0; i < oct; i++) { a += amp * vnoise(u * fx, v * fy, fx, fy, s + i * 17); n += amp; amp *= 0.5; fx *= 2; fy *= 2; }
  return a / n;
}
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
const c255 = (x) => Math.min(255, Math.max(0, x * 255));

let aniso = 16;
function tex(data, size, srgb) {
  const t = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true; t.anisotropy = aniso; if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true;
  return t;
}
function normalsFrom(H, size, bump) {
  const nor = new Uint8Array(size * size * 4), k = bump * size / 512, m = size - 1;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const dx = (H[y * size + ((x - 1) & m)] - H[y * size + ((x + 1) & m)]) * k, dy = (H[((y - 1) & m) * size + x] - H[((y + 1) & m) * size + x]) * k;
    const l = 1 / Math.hypot(dx, dy, 1), j = (y * size + x) * 4;
    nor[j] = (dx * l * 0.5 + 0.5) * 255; nor[j + 1] = (dy * l * 0.5 + 0.5) * 255; nor[j + 2] = (l * 0.5 + 0.5) * 255; nor[j + 3] = 255;
  }
  return tex(nor, size, false);
}
// fn(u,v,o) fills o = {h, r,g,b, rough, metal}
function pbr(size, bump, fn, extra = {}) {
  const n = size * size, col = new Uint8Array(n * 4), orm = new Uint8Array(n * 4), H = new Float32Array(n), o = {};
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    o.h = 0.5; o.r = o.g = o.b = 0.5; o.rough = 0.8; o.metal = 0;
    fn(x / size, y / size, o);
    const i = y * size + x, j = i * 4; H[i] = o.h;
    col[j] = c255(o.r); col[j + 1] = c255(o.g); col[j + 2] = c255(o.b); col[j + 3] = 255;
    orm[j] = 255; orm[j + 1] = c255(o.rough); orm[j + 2] = c255(o.metal); orm[j + 3] = 255;
  }
  const ormT = tex(orm, size, false);
  return new THREE.MeshStandardMaterial({ map: tex(col, size, true), normalMap: normalsFrom(H, size, bump), roughnessMap: ormT, metalnessMap: ormT, roughness: 1, metalness: 1, ...extra });
}

// brick-bond stone pattern shared by paving and masonry
function blocks(u, v, cols, rows, seed) {
  const row = Math.floor(v * rows), uu = u * cols + (row % 2) * 0.5, col = Math.floor(uu), fu = uu - col, fv = v * rows - row;
  return { d: Math.min(Math.min(fu, 1 - fu) / cols, Math.min(fv, 1 - fv) / rows), id: hash(((col % cols) + cols) % cols, row, seed) };
}
function paint(size, rgb, seed, wear = 0.57, metal = 0) {
  return pbr(size, 2.5, (u, v, o) => {
    const n = fbm(u, v, 6, 6, 5, seed), f = fbm(u, v, 48, 48, 3, seed + 3), drip = fbm(u, v, 32, 2, 3, seed + 9);
    const chip = sstep(wear, wear + 0.04, n * 0.7 + f * 0.2 + drip * 0.1), p = 0.85 + 0.3 * f - 0.2 * sstep(0.5, 0.7, drip);
    o.r = mix(rgb[0] * p, 0.24 + 0.2 * f, chip); o.g = mix(rgb[1] * p, 0.12 + 0.08 * f, chip); o.b = mix(rgb[2] * p, 0.06, chip);
    o.rough = mix(0.36 + 0.25 * f, 0.92, chip); o.metal = metal * (1 - chip); o.h = 0.5 + f * 0.08 - chip * 0.12;
  });
}

export function makeMats(renderer) {
  aniso = renderer.capabilities.getMaxAnisotropy();
  const M = {};

  // granite promenade pavers, 2 m tile
  M.paving = pbr(1024, 2.4, (u, v, o) => {
    const b = blocks(u, v, 4, 8, 3), joint = sstep(0.005, 0.0015, b.d), fine = fbm(u, v, 96, 96, 3, 4), stain = fbm(u, v, 3, 3, 5, 5);
    const speck = sstep(0.62, 0.7, fbm(u, v, 160, 160, 2, 6));
    let c = (0.43 + 0.13 * (b.id - 0.5) + 0.1 * (fine - 0.5) - 0.1 * speck) * (0.8 + 0.4 * stain) * (1 - 0.6 * joint);
    o.r = c * 1.03; o.g = c; o.b = c * 0.95;
    o.rough = mix(0.72, 0.38, sstep(0.5, 0.62, stain)) + joint * 0.2; o.h = sstep(0.0, 0.012, b.d) * 0.7 + fine * 0.3 + b.id * 0.1;
  });
  // weathered masonry for the bridge and embankment, 2 m tile
  M.stone = pbr(1024, 7, (u, v, o) => {
    const b = blocks(u, v, 3, 6, 13), joint = sstep(0.009, 0.002, b.d), fine = fbm(u, v, 64, 64, 4, 14), big = fbm(u, v, 4, 4, 5, 15);
    const moss = sstep(0.5, 0.62, big) * sstep(0.03, 0.0, b.d) + sstep(0.6, 0.7, big) * 0.6;
    let c = (0.4 + 0.16 * (b.id - 0.5) + 0.16 * (fine - 0.5)) * (0.75 + 0.5 * big) * (1 - 0.65 * joint);
    o.r = mix(c * 1.05, 0.13, moss * 0.7); o.g = mix(c, 0.19, moss * 0.7); o.b = mix(c * 0.9, 0.08, moss * 0.7);
    o.rough = 0.9; o.h = sstep(0.0, 0.02, b.d) * 0.6 + fine * 0.5 + b.id * 0.2;
  });
  M.grass = pbr(1024, 6, (u, v, o) => {
    const a = fbm(u, v, 4, 4, 5, 21), f = fbm(u, v, 200, 200, 2, 22), m = fbm(u, v, 40, 40, 3, 23), k = 0.55 + 0.6 * f * m + 0.3 * a;
    o.r = 0.13 * k + 0.05 * a; o.g = 0.27 * k; o.b = 0.06 * k; o.rough = 0.85; o.h = f * 0.7 + m * 0.3;
  });
  M.asphalt = pbr(1024, 3, (u, v, o) => {
    const f = fbm(u, v, 256, 256, 2, 31), a = fbm(u, v, 5, 5, 5, 32), crack = sstep(0.006, 0.002, Math.abs(fbm(u, v, 4, 4, 5, 33) - 0.5));
    const c = (0.1 + 0.07 * f + 0.05 * a) * (1 - 0.5 * crack);
    o.r = c; o.g = c; o.b = c * 1.04; o.rough = 0.9 - 0.1 * sstep(0.52, 0.6, a); o.h = f - crack;
  });
  M.concrete = pbr(512, 3, (u, v, o) => {
    const a = fbm(u, v, 3, 3, 6, 41), f = fbm(u, v, 96, 96, 3, 42), s = sstep(0.5, 0.7, fbm(u, v, 40, 2, 4, 43)), c = (0.5 + 0.4 * (a - 0.5) + 0.1 * (f - 0.5)) * (1 - 0.3 * s);
    o.r = c; o.g = c * 0.99; o.b = c * 0.96; o.rough = 0.86; o.h = a * 0.4 + f * 0.4;
  });
  M.wood = pbr(512, 4, (u, v, o) => {
    const plank = Math.floor(v * 6), fv = v * 6 - plank, g = fbm(u, v, 3, 90, 4, 51 + plank), gap = sstep(0.06, 0.02, Math.min(fv, 1 - fv)), t = 0.75 + 0.3 * hash(plank, 0, 52);
    o.r = (0.33 + 0.2 * g) * t * (1 - 0.7 * gap); o.g = (0.2 + 0.13 * g) * t * (1 - 0.7 * gap); o.b = (0.1 + 0.07 * g) * t * (1 - 0.7 * gap); o.rough = 0.55 + 0.25 * g; o.h = g * 0.5 - gap;
  });
  M.bark = pbr(512, 9, (u, v, o) => {
    const r = fbm(u, v, 14, 3, 5, 61), f = fbm(u, v, 60, 20, 3, 62), c = 0.1 + 0.22 * r * r + 0.06 * f;
    o.r = c * 1.1; o.g = c * 0.95; o.b = c * 0.75; o.rough = 0.95; o.h = r + f * 0.2;
  });
  // glazed grey roof tiles: u across half-round ridges, v down the slope in courses
  M.tile = pbr(512, 9, (u, v, o) => {
    const ridge = Math.sqrt(Math.max(0, 1 - Math.pow(((u * 8) % 1) * 2 - 1, 2))), course = (v * 12) % 1, f = fbm(u, v, 48, 48, 3, 71), a = fbm(u, v, 4, 4, 4, 72);
    const c = (0.13 + 0.07 * ridge + 0.06 * f) * (0.75 + 0.5 * a) * (1 - 0.5 * sstep(0.12, 0.0, course));
    o.r = c * 0.92; o.g = c; o.b = c * 1.04; o.rough = 0.3 + 0.4 * a; o.h = ridge * 0.8 + course * 0.35 + f * 0.05;
  });
  M.steel = pbr(512, 2, (u, v, o) => {
    const n = fbm(u, v, 8, 8, 5, 81), s = sstep(0.6, 0.64, fbm(u, v, 2, 160, 3, 82)), c = 0.07 + 0.06 * n + 0.05 * s;
    o.r = c; o.g = c; o.b = c * 1.05; o.rough = 0.34 + 0.3 * n; o.metal = 1; o.h = n * 0.4 + s * 0.3;
  });
  M.galv = pbr(512, 2, (u, v, o) => { // galvanised steel with zinc spangle
    const sp = fbm(u, v, 40, 40, 2, 91), a = fbm(u, v, 4, 4, 5, 92), c = 0.5 + 0.22 * (sp - 0.5) + 0.2 * (a - 0.5);
    o.r = c; o.g = c * 1.01; o.b = c * 1.04; o.rough = 0.45 + 0.3 * a; o.metal = 0.9; o.h = sp;
  });
  M.fins = pbr(256, 10, (u, v, o) => { // heatsink fin stack
    const s = Math.sin(u * Math.PI * 2 * 24), c = 0.55 + 0.25 * s;
    o.r = c; o.g = c; o.b = c * 1.03; o.rough = 0.32; o.metal = 1; o.h = s * 0.5 + 0.5;
  });
  M.pcb = pbr(512, 3, (u, v, o) => { // matte black circuit board with copper traces, vias and solder pads
    const G = 24, cx = Math.floor(u * G), cy = Math.floor(v * G), fu = u * G - cx, fv = v * G - cy, k = hash(cx, cy, 101), k2 = hash(cx >> 2, cy >> 2, 102);
    const dir = k2 < 0.45 ? Math.abs(fv - 0.5) : k2 < 0.8 ? Math.abs(fu - 0.5) : Math.abs(fu - fv) * 0.7;
    const trace = sstep(0.16, 0.1, dir % 0.34) * (k < 0.85 ? 1 : 0), via = sstep(0.2, 0.14, Math.hypot(fu - 0.5, fv - 0.5)) * (k > 0.9 ? 1 : 0);
    const pad = hash(cx >> 1, cy >> 1, 103) > 0.93 ? sstep(0.45, 0.4, Math.max(Math.abs(fu - 0.5), Math.abs(fv - 0.5))) : 0, f = fbm(u, v, 96, 96, 2, 104);
    o.r = mix(mix(0.02, 0.05, trace), 0.75, Math.max(via, pad)); o.g = mix(mix(0.035, 0.09, trace), 0.6, Math.max(via, pad)); o.b = mix(mix(0.03, 0.06, trace), 0.25, Math.max(via, pad));
    o.rough = mix(0.55, 0.3, Math.max(via, pad)) + f * 0.1; o.metal = Math.max(via, pad); o.h = trace * 0.3 + pad * 0.6 + via * 0.5;
  });
  M.red = paint(512, [0.42, 0.05, 0.035], 111, 0.62);       // lacquered pavilion columns
  M.white = paint(512, [0.82, 0.83, 0.84], 121, 0.66);      // containers, chargers, drones
  M.green = paint(512, [0.1, 0.22, 0.16], 131, 0.6);        // transformer tanks, boats
  M.yellow = paint(512, [0.8, 0.55, 0.04], 141, 0.6);
  const plain = (color, roughness, metalness = 0, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
  M.shroud = plain(0x0b0b0c, 0.5, 0.2, { normalMap: M.concrete.normalMap, normalScale: new THREE.Vector2(0.25, 0.25) });
  M.porcelain = plain(0x4a2416, 0.18);
  M.glass = plain(0x0a1420, 0.06, 0.9);
  M.gold = plain(0xd9a441, 0.3, 1);
  M.copper = plain(0xb8683a, 0.3, 1);
  M.rubber = plain(0x080808, 0.9);
  M.lotus = plain(0x24501f, 0.45, 0, { side: THREE.DoubleSide });
  M.emit = (hex, k) => new THREE.MeshStandardMaterial({ color: 0, emissive: hex, emissiveIntensity: k });
  return M;
}

// tileable ripple normals for the lake
export function waterNormals() {
  const S = 512, H = new Float32Array(S * S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) H[y * S + x] = fbm(x / S, y / S, 6, 6, 5, 201) + 0.4 * fbm(x / S, y / S, 24, 24, 3, 202);
  return normalsFrom(H, S, 10);
}

// one hanging willow frond: stem with paired lance leaves, on a transparent strip
export function leafTexture() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 512; const g = c.getContext('2d');
  g.strokeStyle = '#3c4a1c'; g.lineWidth = 2; g.beginPath(); g.moveTo(32, 0); g.lineTo(32, 512); g.stroke();
  for (let y = 3; y < 509; y += 4) for (const s of [-1, 1]) {
    const l = 8 + Math.random() * 7, a = (0.5 + Math.random() * 0.5) * s, sh = 38 + Math.random() * 44;
    g.fillStyle = `rgb(${sh * 0.62 | 0},${sh | 0},${sh * 0.22 | 0})`;
    g.save(); g.translate(32, y + Math.random() * 5); g.rotate(a); g.beginPath(); g.ellipse(0, l / 2, 1.7, l / 2, 0, 0, 7); g.fill(); g.restore();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = aniso; return t;
}

// text / signage on a canvas (system font only)
export function signTexture(lines, { w = 512, h = 256, bg = '#0a2a4a', fg = '#ffffff', font = 'bold 64px "Microsoft YaHei","Segoe UI",sans-serif' } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, w, h); g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
  lines.forEach((l, i) => { g.font = l.font || font; g.fillStyle = l.color || fg; g.fillText(l.text, w / 2, h * (i + 0.5) / lines.length); });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = aniso; return t;
}

// box-projected world-space UVs: s metres per texture tile
export function worldUV(g, s, ox = 0, oy = 0, oz = 0) {
  const p = g.attributes.position, nm = g.attributes.normal, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nm.getX(i)), ay = Math.abs(nm.getY(i)), az = Math.abs(nm.getZ(i)), x = p.getX(i) + ox, y = p.getY(i) + oy, z = p.getZ(i) + oz;
    if (ax >= ay && ax >= az) uv.setXY(i, z / s, y / s); else if (ay >= az) uv.setXY(i, x / s, z / s); else uv.setXY(i, x / s, y / s);
  }
  return g;
}
