// The city east of the lake. The Hubin district is built from real building outlines (hubin_data.js); beyond it a street-grid
// infill stands in for the wider city. Also: zebra crossings, the music fountain, Qianjiang New Town.
import * as THREE from "./wl80-r3-three-three.module.js";
import { signTexture } from "./wl80-r3-game-mats.js";
import { mergeGeometries } from "./wl80-r3-three-utils-BufferGeometryUtils.js";
import { facadeMaterial } from "./wl80-r3-game-facade.js";
import { BUILDINGS } from "./wl80-r3-game-hubin_data.js";
import { SHOPS } from "./wl80-r3-game-shops_data.js";
import { LAND_Y as Y, BLOCKS, ROADS, WATER, CITY, MOUNDS, POI, pip, nearest } from "./wl80-r3-game-geo.js";
import { STATIONS } from "./wl80-r3-game-metro-data.js";

const REAL = { x0: -545, x1: 568, z0: -118, z1: 800 };                 // extent of the real-outline data
const inReal = (x, z, pad = 0) => x > REAL.x0 - pad && x < REAL.x1 + pad && z > REAL.z0 - pad && z < REAL.z1 + pad;
const ROOFTOPS = [
  { name: '湖滨云台', x: 40, z: 97, w: 18, d: 22, y: Y + 168, groundX: 17, groundZ: 97, roofX: 33, roofZ: 97 },
  { name: '凤起天际塔', x: 974, z: 245, w: 36, d: 36, y: Y + 216, groundX: 974, groundZ: 277, roofX: 974, roofZ: 261 },
  { name: '钱江观景塔', x: -1450, z: 5100, w: 42, d: 40, y: Y + 318, groundX: -1450, groundZ: 5066, roofX: -1450, roofZ: 5082 },
];
const nearRooftop = (x, z, pad) => ROOFTOPS.some((t) =>
  (Math.abs(x - t.x) < t.w / 2 + pad && Math.abs(z - t.z) < t.d / 2 + pad) ||
  Math.hypot(x - t.groundX, z - t.groundZ) < pad + 5);
// the map has almost no heights, so: known buildings by name, then by use, then by footprint
const KNOWN = [['君悦', 66], ['解百新世纪', 60], ['新世纪', 60], ['工联CC二期', 44], ['工联CC', 38], ['龙翔服饰城', 30], ['明珠', 46], ['in77', 26], ['in88', 22], ['东坡大世界', 24], ['望湖宾馆', 40], ['友好饭店', 78],
  ['国贸', 70], ['银行', 44], ['大厦', 56], ['大酒店', 52], ['酒店', 38], ['宾馆', 32], ['饭店', 30], ['电信', 42], ['医院', 38], ['公寓', 44], ['国际', 60], ['中心', 46], ['广场', 40], ['书店', 24], ['剧院', 20]];
function heightOf([name, levels, height, type, pts], rnd) {
  if (height) return height; if (levels) return levels * 3.9;
  for (const [k, h] of KNOWN) if (name.includes(k)) return h;
  let a = 0; for (let i = 0; i < pts.length; i += 2) { const j = (i + 2) % pts.length; a += pts[i] * pts[j + 1] - pts[j] * pts[i + 1]; } a = Math.abs(a) / 2;
  if (type === 'apartments' || type === 'residential') return 20 + Math.floor(rnd(0, 5)) * 3.3;
  if (type === 'hospital' || type === 'hotel' || type === 'commercial') return a > 1500 ? 30 : 22;
  return (a < 120 ? 8 : a < 400 ? 13 : a < 1200 ? 18 : a < 3000 ? 23 : 27) + rnd(0, 3);
}

// Keep every instance and its original attributes, but let each render camera cull tiles.
function buildCityTiles(list, size, geometry, material, parent, setMatrix, { castShadow = true, seeds } = {}) {
  const tiles = new Map();
  list.forEach(([x, , z], index) => {
    const key = `${Math.floor(x / size)},${Math.floor(z / size)}`;
    if (!tiles.has(key)) tiles.set(key, []);
    tiles.get(key).push(index);
  });
  const color = new THREE.Color();
  for (const indices of tiles.values()) {
    const geo = seeds ? geometry.clone().setAttribute('seed',
      new THREE.InstancedBufferAttribute(Float32Array.from(indices, (i) => seeds[i]), 1)) : geometry;
    const mesh = new THREE.InstancedMesh(geo, material, indices.length);
    indices.forEach((index, i) => setMatrix(mesh, list[index], i, color));
    mesh.computeBoundingBox();
    mesh.boundingSphere = mesh.boundingBox.getBoundingSphere(new THREE.Sphere());
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    parent.add(mesh);
  }
}

export function buildCity(ctx, fog) {
  const { scene, M, add, box, cyl, tick } = ctx, T = [];
  let r = 7; const rnd = (a = 0, b = 1) => a + ((r = (r * 16807) % 2147483647) / 2147483647) * (b - a);

  // ---- Hubin district: every mapped building extruded from its true outline
  const P = [], N = [], F = [], I = [], named = [], walls = [];
  for (const b of BUILDINGS) {
    const [name, , , type, pts] = b; if (type === 'train_station' || name.includes('Apple')) continue;   // the station box is underground; Apple gets its glass pavilion below
    const H = heightOf(b, rnd), housing = type === 'apartments' || type === 'residential';
    const style = /in77|in88|东坡|银泰/.test(name) ? 4 : /君悦|宾馆|酒店|饭店/.test(name) ? 5 : /工联|服饰城|解百|新世纪|明珠|百货/.test(name) ? 6 : housing ? 2 : H > 62 ? 6 : H < 15 ? 3 : rnd() < 0.5 ? 2 : H < 34 ? 3 : 1;
    const seed = style + rnd() * 0.98, n = pts.length / 2; let u = 0, longest = null;
    for (let i = 0; i < n; i++) {                                                                       // walls
      const ax = pts[i * 2], az = pts[i * 2 + 1], bx = pts[((i + 1) % n) * 2], bz = pts[((i + 1) % n) * 2 + 1], dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz); if (L < 0.05) continue;
      const nx = -dz / L, nz = dx / L, base = P.length / 3;
      P.push(ax, Y, az, bx, Y, bz, bx, Y + H, bz, ax, Y + H, az); for (let k = 0; k < 4; k++) N.push(nx, 0, nz);
      F.push(u, seed, H, 0, u + L, seed, H, 0, u + L, seed, H, 0, u, seed, H, 0); I.push(base, base + 1, base + 2, base, base + 2, base + 3); u += L;
      walls.push({ ax, az, bx, bz, nx, nz, L, H, style, u0: u - L, seed });
      if (!longest || L > longest.L) longest = { L, x: (ax + bx) / 2, z: (az + bz) / 2, nx, nz };
    }
    const contour = []; for (let i = 0; i < n; i++) contour.push(new THREE.Vector2(pts[i * 2], pts[i * 2 + 1]));
    const base = P.length / 3; for (const c of contour) { P.push(c.x, Y + H, c.y); N.push(0, 1, 0); F.push(0, seed, H, 1); }
    for (const [a, c, d] of THREE.ShapeUtils.triangulateShape(contour, [])) I.push(base + a, base + c, base + d);                 // roof
    ctx.polys.push({ pts, h: H });
    if (name && longest.L > 9 && !/in77|工联|东坡|in88/.test(name)) named.push({ name, H, ...longest });
  }
  const rg = new THREE.BufferGeometry();
  rg.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); rg.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); rg.setAttribute('fa', new THREE.Float32BufferAttribute(F, 4)); rg.setIndex(I);
  const realMat = facadeMaterial(true); realMat.side = THREE.DoubleSide;
  const real = new THREE.Mesh(rg, realMat); real.castShadow = real.receiveShadow = true; ctx.solids.add(real);
  // name boards on the longest wall of each named building
  for (const s of named) { const t = signTexture([{ text: s.name, font: 'bold 76px "Microsoft YaHei","Segoe UI",sans-serif', color: '#f4e6c0' }], { w: 1024, h: 128, bg: '#1a1410' });
    const w = Math.min(s.L * 0.6, Math.max(6, s.name.length * 1.3)), m = add(new THREE.PlaneGeometry(w, w / 8), new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0.4, roughness: 0.5 }), s.x + s.nx * 0.25, Y + Math.min(s.H - 1.5, 6.2), s.z + s.nz * 0.25, { shadow: false });
    m.rotation.y = Math.atan2(s.nx, s.nz); }

  // ---- real depth on the mapped buildings: roof cornices, shopfront canopies, and stone piers between the in77 shop bays
  const TP = [];
  const prism = (ax, az, bx, bz, nx, nz, y0, y1, dep) => { // a box standing proud of the wall between two points
    const c = [[ax, az], [bx, bz], [bx + nx * dep, bz + nz * dep], [ax + nx * dep, az + nz * dep]], v = (i, y) => [c[i][0], y, c[i][1]];
    for (const [a, b, d2, e] of [[v(3, y0), v(2, y0), v(2, y1), v(3, y1)], [v(0, y1), v(3, y1), v(2, y1), v(1, y1)], [v(0, y0), v(1, y0), v(2, y0), v(3, y0)], [v(0, y0), v(3, y0), v(3, y1), v(0, y1)], [v(1, y0), v(1, y1), v(2, y1), v(2, y0)]]) TP.push(...a, ...b, ...d2, ...a, ...d2, ...e);
  };
  for (const w of walls) {
    if (w.L < 2.5) continue;
    const dx = (w.bx - w.ax) / w.L, dz = (w.bz - w.az) / w.L, shop = w.style === 4 || w.style === 3;
    prism(w.ax, w.az, w.bx, w.bz, w.nx, w.nz, Y + w.H - 0.55, Y + w.H + 0.25, 0.4);                                    // cornice / parapet cap
    if (shop && w.H > 6) prism(w.ax, w.az, w.bx, w.bz, w.nx, w.nz, Y + (w.style === 4 ? 10 : 4.5), Y + (w.style === 4 ? 10.4 : 4.75), w.style === 4 ? 1.1 : 0.8);   // canopy over the shopfronts
    if (w.style === 1 || w.style === 5) for (let y = 3.3; y < w.H - 1.2; y += 3.3) prism(w.ax, w.az, w.bx, w.bz, w.nx, w.nz, Y + y - 0.09, Y + y + 0.09, 0.12);   // floor-line string courses
    if (w.style === 4) for (let s = (6.5 - ((w.u0 + w.seed * 37) % 6.5)) % 6.5; s < w.L; s += 6.5) {                 // piers on the shader's bay lines
      const s0 = Math.max(0, s - 0.4), s1 = Math.min(w.L, s + 0.4);
      prism(w.ax + dx * s0, w.az + dz * s0, w.ax + dx * s1, w.az + dz * s1, w.nx, w.nz, Y, Y + 10, 0.5);
    }
  }
  const tgm = new THREE.BufferGeometry(); tgm.setAttribute('position', new THREE.Float32BufferAttribute(TP, 3)); tgm.computeVertexNormals();
  const trim = new THREE.Mesh(tgm, new THREE.MeshStandardMaterial({ color: 0xb4ab9a, roughness: 0.85, side: THREE.DoubleSide })); trim.castShadow = trim.receiveShadow = true; ctx.solids.add(trim);

  // ---- real joinery on every mapped building: window frames with sills and mullions, shopfront frames, curtain-wall fins,
  // and for housing real balconies and air-conditioner units. Each sits on the bay grid the facade shader paints, so glass and frame line up.
  const BAY = { 1: [3, 3.3, 0.05, 0.95, 0.3, 0.86], 2: [3.6, 3.3, 0.2, 0.8, 0.3, 0.84], 3: [5, 4.5, 0.14, 0.86, 0.34, 0.86], 4: [6.5, 5, 0.14, 0.86, 0.34, 0.86], 5: [3, 3.3, 0.05, 0.95, 0.3, 0.86] }; // bay, storey, window x0 x1 y0 y1
  const FR = [], BAL = [], ACU = [], FIN = [], oj = new THREE.Object3D();
  for (const w of walls) {
    if (w.L < 3) continue;
    const dx = (w.bx - w.ax) / w.L, dz = (w.bz - w.az) / w.L, yaw = Math.atan2(w.nx, w.nz), at = (s, y, out = 0) => [w.ax + dx * s + w.nx * out, Y + y, w.az + dz * s + w.nz * out, yaw];
    if (w.style === 6) { for (let s = (1.5 - ((w.u0 + w.seed * 37) % 1.5)) % 1.5; s < w.L; s += 1.5) FIN.push([...at(s, 0.5), w.H - 1.6]); continue; }
    const [bw, fh, x0, x1, y0, y1] = BAY[w.style], shopFloors = w.style === 4 ? 2 : w.style === 3 ? 1 : 0;
    for (let s = (bw - ((w.u0 + w.seed * 37) % bw)) % bw; s + bw <= w.L + 0.01; s += bw) for (let f = 0; ; f++) {
      const v0 = f * fh, [a0, a1, b0, b1] = f < shopFloors ? [0.05, 0.95, 0.04, 0.7] : [x0, x1, y0, y1];
      if (v0 + b1 * fh > w.H - 1.1 || v0 > 21) break;   // shortcut: joinery only on the lowest storeys you can read from the street; raise 21 if you add flying or rooftops
      FR.push([...at(s + a0 * bw, v0 + b0 * fh), (a1 - a0) * bw, (b1 - b0) * fh, w.style === 2 ? 0xe9e8e3 : 0x23262a]);
      if (w.style === 2 && f > 0) { const k = rnd(); if (k < 0.45) BAL.push([...at(s + 0.08 * bw, v0), 0.84 * bw]); else if (k < 0.8) ACU.push(at(s + 0.84 * bw, v0 + 0.12 * fh)); }
    }
  }
  const bx = (wd, h, d, x, y, z) => new THREE.BoxGeometry(wd, h, d).translate(x, y, z);
  const instanced = (geo, mat, list, set, castShadow) =>
    buildCityTiles(list, 144, geo, mat, scene, (mesh, r, i, color) => {
      oj.position.set(r[0], r[1], r[2]); oj.rotation.set(0, r[3], 0);
      set(r); oj.updateMatrix(); mesh.setMatrixAt(i, oj.matrix);
      if (r[6] !== undefined) mesh.setColorAt(i, color.set(r[6]));
    }, { castShadow });
  // unit window: x 0..1 along the wall, y 0..1 up, z out of the wall
  const frameG = mergeGeometries([bx(0.035, 1, 0.13, 0.0175, 0.5, 0.065), bx(0.035, 1, 0.13, 0.9825, 0.5, 0.065), bx(1, 0.04, 0.13, 0.5, 0.98, 0.065), bx(1, 0.04, 0.13, 0.5, 0.02, 0.065), bx(0.022, 1, 0.1, 0.5, 0.5, 0.05), bx(1.06, 0.05, 0.25, 0.5, -0.025, 0.125)]);
  instanced(frameG, new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.35 }), FR, (r) => oj.scale.set(r[4], r[5], 1), false);
  const balG = mergeGeometries([bx(1, 0.14, 1.25, 0.5, -0.07, 0.625), bx(1, 0.62, 0.08, 0.5, 0.31, 1.21), bx(0.08, 0.62, 1.25, 0.04, 0.31, 0.625), bx(0.08, 0.62, 1.25, 0.96, 0.31, 0.625), bx(1, 0.05, 0.06, 0.5, 1.05, 1.21), bx(0.04, 0.4, 0.04, 0.04, 0.84, 1.21), bx(0.04, 0.4, 0.04, 0.96, 0.84, 1.21)]);
  instanced(balG, new THREE.MeshStandardMaterial({ color: 0xd9d5cb, roughness: 0.85 }), BAL, (r) => oj.scale.set(r[4], 1, 1), true);
  const acG = mergeGeometries([bx(0.82, 0.56, 0.3, 0, 0.28, 0.2), bx(0.9, 0.04, 0.42, 0, -0.02, 0.21), bx(0.5, 0.42, 0.02, -0.1, 0.28, 0.36)]);
  instanced(acG, new THREE.MeshStandardMaterial({ color: 0xdedfe0, roughness: 0.6 }), ACU, () => oj.scale.set(1, 1, 1), true);
  instanced(bx(0.07, 1, 0.18, 0, 0.5, 0.09), new THREE.MeshStandardMaterial({ color: 0x8b9096, roughness: 0.3, metalness: 0.9 }), FIN, (r) => oj.scale.set(1, r[4], 1), false);
  console.assert(FR.length > 3000 && BAL.length > 100, 'joinery self-check: frames ' + FR.length + ', balconies ' + BAL.length);

  // ---- real shops: each mapped shop gets a fascia sign on the nearest wall of the nearest building
  const BRAND = [['星巴克', '#00704a', '#fff'], ['肯德基', '#c8102e', '#fff'], ['麦当劳', '#da291c', '#ffc72c'], ['必胜客', '#c8102e', '#fff'], ['Pizza', '#c8102e', '#fff'], ['瑞幸', '#0f2a8a', '#fff'], ['Luckin', '#0f2a8a', '#fff'],
    ['优衣库', '#e60012', '#fff'], ['无印良品', '#7f0019', '#fff'], ['喜茶', '#111', '#fff'], ['霸王茶姬', '#7a1420', '#f3e2c0'], ['蔚来', '#f4f4f2', '#111'], ['Sony', '#000', '#fff'], ['Balenciaga', '#000', '#fff'],
    ['全家', '#00a041', '#fff'], ['罗森', '#0068b7', '#fff'], ['银行', '#a8141c', '#fff'], ['知味观', '#5a1a12', '#f0d9a0'], ['老凤祥', '#8a1218', '#f0d9a0'], ['劳斯莱斯', '#0b0b0d', '#d8d8d8'], ['兰博基尼', '#0b0b0d', '#e0c060']];
  const skip = /bicycle_rental|ferry_terminal|attraction|artwork|ticket|hotel|hostel/;
  let placed = 0;
  for (const [name, kind, sx, sz] of SHOPS) {
    if (skip.test(kind)) continue;
    let best = null;
    for (const w of walls) { if (w.L < 4) continue; const t = Math.max(0.15, Math.min(0.85, ((sx - w.ax) * (w.bx - w.ax) + (sz - w.az) * (w.bz - w.az)) / (w.L * w.L))), px = w.ax + (w.bx - w.ax) * t, pz = w.az + (w.bz - w.az) * t, d = Math.hypot(sx - px, sz - pz);
      if (d < 40 && (!best || d < best.d) && (sx - px) * w.nx + (sz - pz) * w.nz > -6) best = { d, px, pz, w }; }
    if (!best) continue;
    const [, bg, fg] = BRAND.find(([k]) => name.includes(k)) || ['', '#16130f', '#f2e3bd'], wide = Math.min(best.w.L * 0.7, Math.max(3.2, name.length * (/^[\x20-\x7e]+$/.test(name) ? 0.42 : 0.8)));
    const t = signTexture([{ text: name, font: 'bold 84px "Microsoft YaHei","Segoe UI",sans-serif', color: fg }], { w: Math.round(128 * wide / 0.85), h: 128, bg });
    const m = add(new THREE.PlaneGeometry(wide, 0.85), new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0.6, roughness: 0.4 }), best.px + best.w.nx * (best.w.style === 4 ? 1.16 : 0.86), Y + (best.w.style === 4 ? 4.2 : 3.75), best.pz + best.w.nz * (best.w.style === 4 ? 1.16 : 0.86), { shadow: false });
    m.rotation.y = Math.atan2(best.w.nx, best.w.nz); placed++;
  }
  console.assert(placed > 30, 'expected most mapped shops to find a wall, placed ' + placed);

  // ---- the big-brand signs and the Apple pavilion keep their hand-placed positions
  for (const [name, x0, x1, z0, z1, h, sign] of BLOCKS) {
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, mapped = inReal(cx, cz);
    if (name.startsWith('Apple')) { // built in detail by street.js
    } else if (!mapped) { T.push([cx, cz, x1 - x0, h, z1 - z0, 0, 1]); ctx.colliders.push(new THREE.Box3(new THREE.Vector3(x0, 0, z0), new THREE.Vector3(x1, h, z1))); }
    if (!sign || name === 'in77 B') continue;
    const big = sign.startsWith('in77'), tex = signTexture([{ text: sign, font: `bold ${big ? 150 : 110}px "Segoe UI","Microsoft YaHei",sans-serif` }, ...(big ? [{ text: '湖滨银泰', font: 'bold 70px "Microsoft YaHei",sans-serif', color: '#ffd9a0' }] : [])], { w: 1024, h: 384, bg: big ? '#b3122a' : '#14181d' });
    const sm = new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: 0.55, roughness: 0.5 }), sw = Math.min(22, (x1 - x0) * 0.5), sy = Y + Math.min(h - 4, 15);
    add(new THREE.PlaneGeometry(sw, sw * 0.375), sm, cx, sy, z0 - 0.6, { ry: Math.PI, shadow: false }); add(new THREE.PlaneGeometry(sw, sw * 0.375), sm, cx, sy, z1 + 0.6, { shadow: false });
  }

  // ---- infill beyond the mapped district: one building per grid cell wherever there is no road, water, hill or named block
  const entrances = STATIONS.flatMap((station) => station.exits);
  const roads = Object.values(ROADS).map(([pts, w]) => ({ pts, w })), mounds = Object.values(MOUNDS);
  for (let gx = -2600; gx < 2500; gx += 62) for (let gz = 40; gz < 4300; gz += 62) {
    const x = gx + rnd(8, 54), z = gz + rnd(8, 54), w = rnd(26, 44), d = rnd(24, 40), half = Math.max(w, d) / 2 + 3;
    if (inReal(x, z, half)) continue;
    if (x > -911 ? !pip(CITY, x, z) : z < 130) continue;
    if (pip(WATER, x, z) || mounds.some(([mx, mz, mr]) => Math.hypot(x - mx, z - mz) < mr + 30)) continue;
    if (BLOCKS.some(([, x0, x1, z0, z1]) => x > x0 - half - 8 && x < x1 + half + 8 && z > z0 - half - 8 && z < z1 + half + 8)) continue;
    if (roads.some((rd) => nearest(rd.pts, null, x, z).d < rd.w / 2 + half + 2)) continue;
    const wulin = x > 1200 && z < 1100, lake = z < 620 && !wulin;
    const h = lake ? rnd(14, 30) : wulin ? 50 + Math.pow(rnd(), 1.6) * 130 : rnd() < 0.07 ? rnd(95, 165) : 26 + Math.pow(rnd(), 1.8) * 60;
    if (entrances.some((e) => Math.hypot(x - e.x, z - e.z) < half + 18) || nearRooftop(x, z, half + 5)) continue;
    T.push([x, z, w, h, d, 0, 0]); ctx.colliders.push(new THREE.Box3(new THREE.Vector3(x - w / 2, 0, z - d / 2), new THREE.Vector3(x + w / 2, h, z + d / 2)));
  }
  // Qianjiang New Town: about 5.3 km east and 1.3 km south of Hubin, on the Qiantang River
  const [qx, qz] = POI.qjnt;
  for (let i = 0; i < 80; i++) {
    const tower = [qx + rnd(-650, 650), qz + rnd(-500, 600), rnd(34, 52), 110 + Math.pow(rnd(), 1.7) * 200, rnd(34, 52), rnd(0, 0.7), 0];
    if (!nearRooftop(tower[0], tower[1], 42)) T.push(tower);
  }
  for (const t of [...T]) if (t[3] > 95) T.push([t[0], t[1], t[2] * 0.72, t[3] * 0.16, t[4] * 0.72, t[5], 0, t[3]]);   // towers step back near the top
  const edge = new THREE.MeshStandardMaterial({ color: 0x40566a, roughness: 0.34, metalness: 0.64 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x8dbec7, transparent: true, opacity: 0.36, roughness: 0.22, metalness: 0.12, depthWrite: false });
  const glow = M.emit(0x7eebff, 1.2);
  for (const { x, z, w, d, y, groundX, groundZ } of ROOFTOPS) {
    T.push([x, z, w, y - Y - 0.24, d, 0, 0, 0]);
    ctx.colliders.push(new THREE.Box3(
      new THREE.Vector3(x - w / 2, Y, z - d / 2),
      new THREE.Vector3(x + w / 2, y, z + d / 2)));
    box(w, 0.24, d, M.concrete, x, y - 0.12, z);
    for (const side of [-1, 1]) {
      const rx = x + side * (w / 2 - 0.35), rz = z + side * (d / 2 - 0.35);
      box(w - 0.7, 1.12, 0.15, glass, x, y + 0.56, rz, { collide: true, shadow: false });
      box(0.15, 1.12, d - 0.7, glass, rx, y + 0.56, z, { collide: true, shadow: false });
      box(w - 0.55, 0.12, 0.23, edge, x, y + 1.09, rz);
      box(0.23, 0.12, d - 0.55, edge, rx, y + 1.09, z);
      box(w, 0.14, 0.10, glow, x, y - 0.64, z + side * (d / 2 + 0.01), { shadow: false });
      box(0.10, 0.14, d, glow, x + side * (w / 2 + 0.01), y - 0.64, z, { shadow: false });
    }
    // Equipment housings stay on the far side, leaving the arrival and roof centre open.
    const dx = Math.sign(x - groundX), dz = Math.sign(z - groundZ);
    for (const side of [-1, 1]) {
      const vx = x + dx * w * 0.32 + dz * side * w * 0.27;
      const vz = z + dz * d * 0.32 + dx * side * d * 0.27;
      box(2.8, 1.6, 1.9, edge, vx, y + 0.8, vz, { collide: true });
      for (let j = -1; j <= 1; j++) box(2.45, 0.07, 0.10, M.galv, vx, y + 1.64, vz + j * 0.43);
    }
  }

  const tg = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const o = new THREE.Object3D(), seeds = Float32Array.from(T, () => rnd());
  const tileSize = 480;
  const transform = (mesh, [x, y, z, w, h, d, rot], i) => {
    o.position.set(x, y, z); o.scale.set(w, h, d); o.rotation.y = rot;
    o.updateMatrix(); mesh.setMatrixAt(i, o.matrix);
  };
  const bodies = T.map(([x, z, w, h, d, rot, , base = 0]) => [x, Y + base, z, w, h, d, rot]);
  buildCityTiles(bodies, tileSize, tg, facadeMaterial(false), ctx.solids, transform, { seeds });

  // roofs for the infill: grey-tile pitched roofs on low blocks, plant rooms and water tanks on everything taller
  const lows = T.filter((t) => t[3] < 34 && !t[6] && t.length < 8), highs = T.filter((t) => t[3] >= 34 && t.length < 8);
  const rs = new THREE.Shape(); rs.moveTo(-0.5, 0); rs.lineTo(0.5, 0); rs.lineTo(0, 1); rs.closePath();
  const roofM = M.tile.clone(); for (const k of ['map', 'normalMap', 'roughnessMap']) { roofM[k] = roofM[k].clone(); roofM[k].repeat.set(4, 3); } roofM.metalnessMap = roofM.roughnessMap;
  const roofs = lows.map(([x, z, w, h, d]) =>
    [x, Y + h, z, Math.min(w, d) + 1.6, Math.min(w, d) * 0.3, Math.max(w, d) + 1.6, w > d ? Math.PI / 2 : 0]);
  const plants = highs.flatMap(([x, z, w, h, d, rot]) => [
    [x + w * 0.14, Y + h, z - d * 0.1, w * 0.34, 3, d * 0.3, rot],
    [x - w * 0.24, Y + h, z + d * 0.22, w * 0.14, 1.8, d * 0.16, rot],
  ]);
  buildCityTiles(roofs, tileSize, new THREE.ExtrudeGeometry(rs, { depth: 1, bevelEnabled: false }).translate(0, 0, -0.5), roofM, scene, transform);
  buildCityTiles(plants, tileSize, tg, M.concrete, scene, transform);

  // Qianjiang landmarks: the golden sphere hotel, the crescent grand theatre, a pair of twisted towers
  const far = (g, m, x, y, z) => { const b = new THREE.Mesh(g, m); b.position.set(x, y, z); scene.add(b); return b; };
  far(new THREE.SphereGeometry(46, 48, 32), new THREE.MeshStandardMaterial({ color: 0xd9a63a, metalness: 1, roughness: 0.22 }), qx + 200, 44, qz - 420);
  far(new THREE.SphereGeometry(60, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xcfd6dc, metalness: 0.7, roughness: 0.25 }), qx + 60, 0, qz - 460).scale.set(1, 0.42, 0.55);
  const twist = (x, z, s) => { const g = new THREE.CylinderGeometry(26, 32, 250, 4, 40), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const a = (p.getY(i) / 250 + 0.5) * 0.9 * s, px = p.getX(i), pz = p.getZ(i); p.setXYZ(i, px * Math.cos(a) - pz * Math.sin(a), p.getY(i), px * Math.sin(a) + pz * Math.cos(a)); }
    g.computeVertexNormals(); far(g, new THREE.MeshStandardMaterial({ color: 0x9fb4c8, metalness: 0.9, roughness: 0.18 }), x, 125, z); };
  twist(qx + 520, qz + 260, 1); twist(qx + 470, qz + 320, -1);

  // ---- zebra crossings where the side streets meet Yan'an Road
  const zebra = [], zx = (x, z0, z1) => { for (let z = z0; z <= z1; z += 1.1) zebra.push([x, z, 4, 0.5]); }, zz = (z, x0, x1) => { for (let x = x0; x <= x1; x += 1.1) zebra.push([x, z, 0.5, 4]); };
  for (const [jx, jz, cw] of [[2, 348, 14], [165, 342, 10], [-143, 353, 10], [-262, 358, 10], [-398, 363, 20], [468, 331, 24]]) { zx(jx - cw / 2 - 4, jz - 11, jz + 11); zx(jx + cw / 2 + 4, jz - 11, jz + 11); zz(jz - 16, jx - cw / 2 + 1, jx + cw / 2 - 1); zz(jz + 16, jx - cw / 2 + 1, jx + cw / 2 - 1); }
  const zI = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.02, 1), ctx.over(new THREE.MeshStandardMaterial({ color: 0xe8e6da, roughness: 0.6 }), 8), zebra.length);
  zebra.forEach(([x, z, sx, sz], i) => { o.position.set(x, Y + 0.1, z); o.rotation.set(0, 0, 0); o.scale.set(sx, 1, sz); o.updateMatrix(); zI.setMatrixAt(i, o.matrix); }); zI.receiveShadow = true; zI.frustumCulled = false; scene.add(zI);

  // ---- the West Lake music fountain: a line of jets in the water off the Hubin promenade
  const jets = 36, jI = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.1, 0.16, 1, 8).translate(0, 0.5, 0), new THREE.MeshStandardMaterial({ color: 0xf2f8ff, emissive: 0x9fc4e0, emissiveIntensity: 0.5, transparent: true, opacity: 0.7, roughness: 0.2, depthWrite: false }), jets);
  jI.frustumCulled = false; scene.add(jI); ctx.noAO.push(jI);
  tick.push((t) => { for (let i = 0; i < jets; i++) { const s = (i - jets / 2) * 2.6; o.position.set(-12 - 0.855 * s - 12, 0, 22 + 0.52 * s - 20); o.rotation.set(0, 0, 0);
    o.scale.set(1, 2 + 9 * Math.pow(Math.abs(Math.sin(t * 0.9 + i * 0.32) * Math.cos(t * 0.37 + i * 0.11)), 1.5), 1); o.updateMatrix(); jI.setMatrixAt(i, o.matrix); } jI.instanceMatrix.needsUpdate = true; });
  return ROOFTOPS;
}
