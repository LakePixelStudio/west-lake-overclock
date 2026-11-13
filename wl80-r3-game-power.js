// Modern Hangzhou infrastructure: 220 kV substation, pylons, battery storage, solar EV-charging hub, bus shelter. Also the RAM pickup model.
import * as THREE from "./wl80-r3-three-three.module.js";
import { RoundedBoxGeometry } from "./wl80-r3-three-geometries-RoundedBoxGeometry.js";
import { mergeGeometries } from "./wl80-r3-three-utils-BufferGeometryUtils.js";
import { signTexture } from "./wl80-r3-game-mats.js";
import { LAND_Y as Y } from "./wl80-r3-game-world.js";

const V = (x, y, z) => new THREE.Vector3(x, y, z);
function strut(a, b, r) { // thin cylinder between two points
  const d = b.clone().sub(a), g = new THREE.CylinderGeometry(r, r, d.length(), 5);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), d.clone().normalize())); g.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2); return g;
}
const cable = (a, b, sag, r = 0.025) => new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a, a.clone().add(b).multiplyScalar(0.5).setY(Math.min(a.y, b.y) - sag), b), 16, r, 5);
function bushing(h, r) { // ribbed porcelain insulator
  const pts = []; const n = Math.round(h / 0.07);
  for (let i = 0; i <= n; i++) pts.push(new THREE.Vector2(r * (i % 2 ? 1.9 : 1) * (1 - 0.3 * i / n), i * h / n));
  return new THREE.LatheGeometry(pts, 16);
}

export function buildPower(ctx) {
  const { scene, M, add, box, cyl, colliders } = ctx;
  const mesh = (g, m, shadow = true) => add(g, m, 0, 0, 0, { shadow });

  // ---------------- substation
  const SX = -92, SZ = 71;
  box(46, 0.12, 15, M.concrete, SX, Y + 0.06, SZ, { s: 3 });
  for (let i = 0; i < 3; i++) {
    const x = SX - 13 + i * 13, z = SZ + 1;
    box(4.2, 0.3, 3.4, M.concrete, x, Y + 0.27, z, { s: 2 });
    box(3, 2.6, 1.9, M.green, x, Y + 1.72, z, { s: 1.5, r: 0.08, collide: true });
    for (const s of [-1, 1]) { const f = box(2.6, 1.9, 0.5, M.fins, x, Y + 1.6, z + s * 1.25, { s: 1.3 }); f.material = M.fins; box(2.7, 0.08, 0.56, M.galv, x, Y + 2.6, z + s * 1.25, { s: 1 }); }
    const tank = cyl(0.38, 0.38, 2.6, M.green, x, Y + 3.75, z - 0.2, {}, 20); tank.rotation.z = Math.PI / 2;
    for (const s of [-1, 1]) box(0.08, 0.5, 0.08, M.galv, x + s, Y + 3.25, z - 0.2, { s: 1 });
    for (let k = -1; k <= 1; k++) {
      add(bushing(1.7, 0.09), M.porcelain, x + k * 0.85, Y + 3.0, z + 0.5); cyl(0.05, 0.05, 0.25, M.galv, x + k * 0.85, Y + 4.8, z + 0.5);
      add(bushing(0.6, 0.06), M.porcelain, x + k * 0.5, Y + 3.0, z - 0.75);
      mesh(cable(V(x + k * 0.85, Y + 4.9, z + 0.5), V(x + k * 2.2, Y + 8.1, SZ + 5.5), 0.5), M.copper);
      add(bushing(1.1, 0.07), M.porcelain, x + k * 2.2, Y + 8.1, SZ + 5.5, { rx: Math.PI });
    }
    add(new THREE.PlaneGeometry(0.7, 0.7), new THREE.MeshStandardMaterial({ map: signTexture([{ text: '⚡', font: '150px sans-serif', color: '#111' }, { text: '高压危险', font: 'bold 44px "Microsoft YaHei",sans-serif', color: '#111' }], { w: 256, h: 256, bg: '#f2c300' }), roughness: 0.5 }), x, Y + 2.0, z - 0.97, { ry: Math.PI, shadow: false });
  }
  // busbar gantry
  const gy = Y + 9.4;
  for (const x of [SX - 21, SX, SX + 21]) for (const dz of [-0.7, 0.7]) box(0.3, 9.4, 0.3, M.galv, x, Y + 4.7, SZ + 5.5 + dz, { s: 1 });
  for (const x of [SX - 21, SX, SX + 21]) ctx.circles.push({ x, z: SZ + 5.5, r: 0.8 });
  box(43, 0.5, 1.7, M.galv, SX, gy, SZ + 5.5, { s: 1 });
  for (let k = -1; k <= 1; k++) mesh(cable(V(SX - 20, Y + 8.1, SZ + 5.5 + k * 0.5), V(SX + 20, Y + 8.1, SZ + 5.5 + k * 0.5), 0.25, 0.04), M.copper);
  // mesh fence on three sides (alpha-tested weave)
  const fc = document.createElement('canvas'); fc.width = fc.height = 64; const fg = fc.getContext('2d'); fg.strokeStyle = '#b9bcc0'; fg.lineWidth = 3;
  for (let i = -64; i < 128; i += 16) { fg.beginPath(); fg.moveTo(i, 0); fg.lineTo(i + 64, 64); fg.moveTo(i + 64, 0); fg.lineTo(i, 64); fg.stroke(); }
  const ft = new THREE.CanvasTexture(fc); ft.wrapS = ft.wrapT = THREE.RepeatWrapping; ft.colorSpace = THREE.SRGBColorSpace;
  const fence = (w, x, z, ry) => { const t = ft.clone(); t.repeat.set(w * 5, 12); t.needsUpdate = true;
    ctx.noAO.push(add(new THREE.PlaneGeometry(w, 2.4), new THREE.MeshStandardMaterial({ map: t, alphaTest: 0.5, side: THREE.DoubleSide, metalness: 0.7, roughness: 0.5 }), x, Y + 1.2, z, { ry }));
    for (let i = 0; i <= w; i += 3.5) { const px = x + (ry ? 0 : i - w / 2), pz = z + (ry ? i - w / 2 : 0); cyl(0.04, 0.04, 2.5, M.galv, px, Y + 1.25, pz, {}, 6); } };
  fence(46, SX, 78.6, 0); fence(15, SX - 23, 71.2, Math.PI / 2); fence(15, SX + 23, 71.2, Math.PI / 2);
  colliders.push(new THREE.Box3(V(SX - 23.2, Y, 63.6), V(SX - 22.8, Y + 2.4, 78.8)), new THREE.Box3(V(SX + 22.8, Y, 63.6), V(SX + 23.2, Y + 2.4, 78.8)));
  for (let x = SX - 21; x <= SX + 21; x += 3) cyl(0.09, 0.09, 0.9, M.yellow, x, Y + 0.45, 63.4, {}, 12);

  // ---------------- lattice pylons with a three-phase line running off to the hills
  const parts = [], H = 30, leg = (y) => 3.2 - 2.5 * (y / H);
  for (let y = 0; y < H; y += 3.75) {
    const a = leg(y), b = leg(y + 3.75), y2 = y + 3.75;
    for (const [sx, sz] of [[1, 1], [1, -1], [-1, -1], [-1, 1]]) {
      parts.push(strut(V(sx * a, y, sz * a), V(sx * b, y2, sz * b), 0.09));
      const nx = sz === sx ? sx : -sx, nz = sz === sx ? -sz : sz; // next corner, going round
      parts.push(strut(V(sx * a, y, sz * a), V(nx * b, y2, nz * b), 0.045), strut(V(sx * b, y2, sz * b), V(nx * b, y2, nz * b), 0.045));
    }
  }
  const arms = [[19, 7], [23.5, 5.5], [28, 4]];
  for (const [y, w] of arms) for (const s of [-1, 1]) {
    parts.push(strut(V(0, y, 0.5), V(s * w, y, 0), 0.06), strut(V(0, y, -0.5), V(s * w, y, 0), 0.06), strut(V(0, y + 2, 0), V(s * w, y, 0), 0.045));
    parts.push(bushing(1.6, 0.08).rotateX(Math.PI).translate(s * w, y, 0));
  }
  const pylonG = mergeGeometries(parts.map((g) => { const n = g.toNonIndexed(); n.deleteAttribute('uv'); return n; }));
  const pyl = [[-62, 74], [-210, 190], [-420, 330]];
  pyl.forEach(([x, z], i) => { const m = add(pylonG, M.galv, x, Y, z, { ry: 0.65, parent: i ? scene : undefined }); m.updateMatrixWorld(); if (!i) ctx.circles.push({ x, z, r: 3.4 }); });
  const armEnd = (p, y, w, s) => V(p[0] + Math.cos(-0.65) * s * w, Y + y - 1.6, p[1] + Math.sin(-0.65) * s * w * -1);
  for (let i = 0; i < pyl.length - 1; i++) for (const [y, w] of arms) for (const s of [-1, 1])
    add(cable(armEnd(pyl[i], y, w, s), armEnd(pyl[i + 1], y, w, s), 9, 0.035), M.steel, 0, 0, 0, { parent: scene, shadow: false });
  for (const [y, w] of arms.slice(0, 1)) for (const s of [-1, 1]) mesh(cable(armEnd(pyl[0], y, w, s), V(SX + 20 + s, Y + 9.7, SZ + 5.5), 2.5, 0.035), M.steel, false);

  // ---------------- battery energy storage containers
  for (let i = 0; i < 4; i++) {
    const x = -44 + i * 5.2, z = 71;
    box(2.44, 2.9, 6.06, M.white, x, Y + 1.6, z, { s: 2, r: 0.04, collide: true }); box(2.6, 0.15, 6.2, M.concrete, x, Y + 0.075, z, { s: 1 });
    for (const dx of [-0.6, 0.6]) box(1.05, 2.4, 0.04, M.white, x + dx, Y + 1.55, 67.95, { s: 1.3 });
    box(1.6, 0.9, 0.3, M.fins, x, Y + 2.2, 74.15, { s: 0.8 });
    box(2.0, 0.05, 0.03, M.emit(0x30ff70, 5), x, Y + 2.95, 67.94, { shadow: false });
    add(new THREE.PlaneGeometry(1.6, 0.5), new THREE.MeshStandardMaterial({ map: signTexture([{ text: `储能 BESS-0${i + 1}`, font: 'bold 60px "Microsoft YaHei",sans-serif', color: '#1a5fb4' }], { w: 512, h: 160, bg: '#e9eaec' }), roughness: 0.5 }), x, Y + 2.5, 67.92, { ry: Math.PI, shadow: false });
  }

  // ---------------- solar EV-charging hub
  const HX = 95, HZ = 69;
  const pc = document.createElement('canvas'); pc.width = pc.height = 256; const pg = pc.getContext('2d'); pg.fillStyle = '#0a1330'; pg.fillRect(0, 0, 256, 256);
  pg.strokeStyle = '#8a93a8'; pg.lineWidth = 1; for (let i = 0; i <= 256; i += 32) { pg.strokeRect(i, 0, 0.5, 256); pg.strokeRect(0, i, 256, 0.5); }
  pg.strokeStyle = '#c9ced8'; pg.lineWidth = 5; pg.strokeRect(0, 0, 256, 256);
  const pt = new THREE.CanvasTexture(pc); pt.wrapS = pt.wrapT = THREE.RepeatWrapping; pt.repeat.set(17, 5); pt.colorSpace = THREE.SRGBColorSpace; pt.anisotropy = 16;
  const roof = new THREE.Group(); roof.position.set(HX, Y + 4.3, HZ); roof.rotation.x = -0.12; ctx.solids.add(roof);
  add(new THREE.BoxGeometry(34, 0.12, 10), [M.galv, M.galv, new THREE.MeshStandardMaterial({ map: pt, roughness: 0.12, metalness: 0.6 }), M.white, M.galv, M.galv], 0, 0, 0, { parent: roof });
  for (let x = -15; x <= 15; x += 6) add(new THREE.BoxGeometry(1.6, 0.04, 0.12), M.emit(0xdfeaff, 6), x, -0.09, 1, { parent: roof, shadow: false });
  for (const x of [-15, 0, 15]) for (const z of [-3.5, 3.5]) { cyl(0.12, 0.12, 4.2 + z * 0.12, M.galv, HX + x, Y + 2.1 + z * 0.06, HZ + z, {}, 12); ctx.circles.push({ x: HX + x, z: HZ + z, r: 0.25 }); }
  const hl = new THREE.PointLight(0xdfe8ff, 120, 24, 2); hl.position.set(HX, Y + 3.6, HZ); scene.add(hl);
  const screen = new THREE.MeshStandardMaterial({ emissiveMap: signTexture([{ text: '⚡ 充电中', font: 'bold 54px "Microsoft YaHei",sans-serif', color: '#5dff9a' }, { text: '240 kW', font: 'bold 70px "Segoe UI",sans-serif' }], { w: 256, h: 256, bg: '#02130c' }), emissive: 0xffffff, emissiveIntensity: 1.6, color: 0 });
  for (let i = 0; i < 6; i++) {
    const x = HX - 14 + i * 5.6, z = HZ + 4.2;
    box(0.55, 1.9, 0.38, M.white, x, Y + 0.95, z, { s: 1, r: 0.06, collide: true });
    add(new THREE.PlaneGeometry(0.36, 0.36), screen, x, Y + 1.45, z - 0.2, { ry: Math.PI, shadow: false });
    box(0.5, 0.03, 0.02, M.emit(0x30ff70, 6), x, Y + 1.86, z - 0.2, { shadow: false });
    mesh(cable(V(x + 0.28, Y + 1.2, z), V(x + 1.2, Y + 0.8, z - 2.2), 0.7, 0.02), M.rubber);
    box(0.1, 0.012, 5.2, M.white, x - 2.8, Y + 0.008, HZ + 1.3, { shadow: false });
  }
  // ---------------- bus shelter with LED panel
  const BX = 22, BZ = 60.6;
  for (const s of [-2.6, 2.6]) cyl(0.06, 0.06, 2.6, M.galv, BX + s, Y + 1.3, BZ + 0.6, {}, 10);
  box(5.8, 0.06, 1.8, M.glass, BX, Y + 2.62, BZ, { s: 1 }); box(3.2, 0.06, 0.4, M.wood, BX - 1, Y + 0.48, BZ + 0.4, { s: 1 });
  const ad = signTexture([{ text: '杭州 · 西湖', font: 'bold 88px "Microsoft YaHei",sans-serif' }, { text: 'HANGZHOU  WEST LAKE', font: '300 34px "Segoe UI",sans-serif', color: '#9fd8ff' }], { w: 512, h: 512, bg: '#06203c' });
  box(1.5, 2.1, 0.12, M.steel, BX + 1.9, Y + 1.25, BZ + 0.6, { s: 1, collide: true });
  for (const s of [-1, 1]) add(new THREE.PlaneGeometry(1.36, 1.96), new THREE.MeshStandardMaterial({ emissiveMap: ad, emissive: 0xffffff, emissiveIntensity: 1.5, color: 0 }), BX + 1.9, Y + 1.25, BZ + 0.6 + s * 0.065, { ry: s > 0 ? 0 : Math.PI, shadow: false });

  return { carSpots: [[HX - 13.8, HZ + 1, 0], [HX - 2.6, HZ + 1, 0], [HX + 8.6, HZ + 1, 0], [8, 55.4, Math.PI / 2], [-58, 48.8, -Math.PI / 2]], zones: [{ x: SX, z: 68, r: 24, name: 'SUBSTATION 220kV' }, { x: HX, z: 67, r: 20, name: 'SOLAR CHARGING HUB' }] };
}

// oversized DDR5 stick used as a defense upgrade pickup
export function makeRam(M) {
  const g = new THREE.Group(), rgb = new THREE.MeshStandardMaterial({ color: 0, emissive: 0xff0000, emissiveIntensity: 5 });
  const p = (geo, m, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; g.add(o); return o; };
  p(new THREE.BoxGeometry(1.33, 0.31, 0.014), M.pcb, 0, 0, 0);
  for (const s of [-1, 1]) {
    p(new RoundedBoxGeometry(1.31, 0.25, 0.03, 2, 0.01), M.shroud, 0, 0.045, s * 0.022);
    for (let i = 0; i < 5; i++) p(new THREE.BoxGeometry(0.16, 0.012, 0.004), M.galv, -0.4 + i * 0.2, 0.1 - i * 0.02, s * 0.039);
    p(new THREE.BoxGeometry(0.6, 0.05, 0.016), M.gold, -0.345, -0.135, s * 0.001); p(new THREE.BoxGeometry(0.66, 0.05, 0.016), M.gold, 0.325, -0.135, s * 0.001);
  }
  p(new RoundedBoxGeometry(1.31, 0.06, 0.07, 2, 0.02), rgb, 0, 0.19, 0).castShadow = false;
  return { group: g, rgb };
}
