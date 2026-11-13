// Ground of the real-scale West Lake: land with the lake cut out, shoreline walls, roads, causeways with their bridges, islets, piers.
import * as THREE from "./wl80-r3-three-three.module.js";
import { RoundedBoxGeometry } from "./wl80-r3-three-geometries-RoundedBoxGeometry.js";
import { worldUV } from "./wl80-r3-game-mats.js";
import { LAND_Y, WATER, GUSHAN, ISLETS, ROADS, BAI, SU, XILING, PIER_HUBIN, PIER_LEIFENG, CITY, pointAt, hump, groundY, walkable, pip, pipFlat } from "./wl80-r3-game-geo.js";
import { STATIONS } from "./wl80-r3-game-metro-data.js";
export { LAND_Y, groundY, walkable };

// Split road triangles around the convex shaft cutouts, keeping their original texture coordinates.
function cutRibbon(pos, uv, idx, openings) {
  const vertices = [], texCoords = [];
  for (let i = 0; i < idx.length; i += 3) {
    const triangle = idx.slice(i, i + 3).map((v) => [pos[v * 3], pos[v * 3 + 2], uv[v * 2], uv[v * 2 + 1]]);
    const xs = triangle.map((v) => v[0]), zs = triangle.map((v) => v[1]);
    let faces = [triangle];
    for (const { corners, minX, maxX, minZ, maxZ } of openings) {
      if (Math.max(...xs) <= minX || Math.min(...xs) >= maxX || Math.max(...zs) <= minZ || Math.min(...zs) >= maxZ) continue;
      const outside = [];
      for (let face of faces) {
        for (let e = 0; e < corners.length && face.length; e++) {
          const a = corners[e], b = corners[(e + 1) % corners.length];
          const dist = ([x, z]) => (b[0] - a[0]) * (z - a[1]) - (b[1] - a[1]) * (x - a[0]);
          const keep = [], rest = [];
          let prev = face.at(-1), dPrev = dist(prev);
          for (const curr of face) {
            const dCurr = dist(curr);
            if ((dPrev < 0) !== (dCurr < 0)) {
              const t = dPrev / (dPrev - dCurr);
              const split = prev.map((v, j) => v + (curr[j] - v) * t);
              keep.push(split); rest.push(split);
            }
            (dCurr < 0 ? keep : rest).push(curr);
            prev = curr; dPrev = dCurr;
          }
          if (keep.length >= 3) outside.push(keep);
          face = rest;
        }
      }
      faces = outside;
    }
    for (const face of faces) for (let j = 1; j < face.length - 1; j++) {
      for (const [x, z, u, v] of [face[0], face[j], face[j + 1]]) {
        vertices.push(x, pos[1], z); texCoords.push(u, v);
      }
    }
  }
  return [vertices, texCoords];
}

export function buildWorld(scene, M) {
  const solids = new THREE.Group(); scene.add(solids);          // everything bullets can hit
  const lamps = [], tick = [], noAO = [], dyn = [];
  let seed = 11; const rnd = (a = 0, b = 1) => a + ((seed = (seed * 16807) % 2147483647) / 2147483647) * (b - a);

  // ---- spatial hash so collision stays cheap across several square kilometres
  const CELL = 48, cells = new Map(), EMPTY = { boxes: [], circles: [], polys: [] };
  const cell = (i, j) => { const k = i * 100003 + j; let c = cells.get(k); if (!c) cells.set(k, c = { boxes: [], circles: [], polys: [] }); return c; };
  const put = (kind, item, x0, x1, z0, z1) => { for (let i = Math.floor((x0 - 3) / CELL); i <= Math.floor((x1 + 3) / CELL); i++) for (let j = Math.floor((z0 - 3) / CELL); j <= Math.floor((z1 + 3) / CELL); j++) cell(i, j)[kind].push(item); };
  const addBox = (b) => put('boxes', b, b.min.x, b.max.x, b.min.z, b.max.z), addCircle = (c) => put('circles', c, c.x - c.r, c.x + c.r, c.z - c.r, c.z + c.r);
  const near = (x, z) => cells.get(Math.floor(x / CELL) * 100003 + Math.floor(z / CELL)) || EMPTY;
  // true building outlines: {pts: flat outline, h: height}
  const addPoly = (p) => { let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9; for (let i = 0; i < p.pts.length; i += 2) { x0 = Math.min(x0, p.pts[i]); x1 = Math.max(x1, p.pts[i]); z0 = Math.min(z0, p.pts[i + 1]); z1 = Math.max(z1, p.pts[i + 1]); } put('polys', p, x0, x1, z0, z1); };
  const inBuilding = (x, z) => near(x, z).polys.some((p) => pipFlat(p.pts, x, z));

  // a build context; `shifted` lets a module authored around its own origin be dropped anywhere
  function makeCtx(dx, dz) {
    const sc = dx || dz ? new THREE.Group() : scene, so = dx || dz ? new THREE.Group() : solids;
    if (dx || dz) { sc.position.set(dx, 0, dz); so.position.set(dx, 0, dz); scene.add(sc); solids.add(so); sc.updateMatrixWorld(); so.updateMatrixWorld(); }
    function add(geo, mat, x, y, z, { collide = false, ry = 0, rx = 0, shadow = true, parent = so } = {}) {
      const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, 0); m.castShadow = shadow; m.receiveShadow = true; parent.add(m);
      if (collide) { m.updateWorldMatrix(true, false); addBox(new THREE.Box3().setFromObject(m)); }
      return m;
    }
    const box = (w, h, d, mat, x, y, z, { s = 2, r = 0, ...o } = {}) => add(worldUV(r ? new RoundedBoxGeometry(w, h, d, 3, r) : new THREE.BoxGeometry(w, h, d), s, x, y, z), mat, x, y, z, o);
    const cyl = (r0, r1, h, mat, x, y, z, o = {}, seg = 20) => add(new THREE.CylinderGeometry(r0, r1, h, seg), mat, x, y, z, o);
    return { scene: sc, M, solids: so, lamps, tick, noAO, dyn, rnd, add, box, cyl, near, dx, dz, inBuilding, polys: { push: addPoly },
      colliders: { push: (...bs) => bs.forEach((b) => addBox(b.translate(new THREE.Vector3(dx, 0, dz)))) },
      circles: { push: (...cs) => cs.forEach((c) => addCircle({ x: c.x + dx, z: c.z + dz, r: c.r })), some: () => false },
      shifted: (x, z) => makeCtx(x, z) };
  }
  const ctx = makeCtx(0, 0), { add, box } = ctx;
  const Y = LAND_Y;

  // ---- land with the lake as a hole (shape plane: X = north, Y = -east)
  const toShape = (pts, cls = THREE.Shape) => { const s = new cls(); pts.forEach(([x, z], i) => (i ? s.lineTo(x, -z) : s.moveTo(x, -z))); return s; };
  const shaftOpenings = STATIONS.flatMap((station) => station.exits.map(({ x, z, yaw, ref }) => {
    const c = Math.cos(yaw), s = Math.sin(yaw);
    const end = station.id === 'longxiangqiao' && ref === 'A' ? 8.65 : 5.05;
    return [[-3.15, 0.05], [3.15, 0.05], [3.15, end], [-3.15, end]]
      .map(([dx, dz]) => [x + dx * c + dz * s, z - dx * s + dz * c]);
  }));
  const flat = (shape, mat, y, tile) => { const g = new THREE.ShapeGeometry(shape).rotateX(-Math.PI / 2), uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / tile, uv.getY(i) / tile);
    const m = new THREE.Mesh(g, mat); m.position.y = y; m.receiveShadow = true; solids.add(m); return m; };
  const land = toShape([[-6500, -7000], [5000, -7000], [5000, 9500], [-6500, 9500]]);
  land.holes.push(...[WATER, ...shaftOpenings].map((pts) => toShape(pts, THREE.Path)));
  flat(land, M.grass, Y, 4);
  flat(toShape(GUSHAN), M.grass, Y, 4);
  const over = (mat, k = 2) => { const m = mat.clone(); m.polygonOffset = true; m.polygonOffsetFactor = m.polygonOffsetUnits = -k; return m; };
  // paved city ground east of Hubin Road
  const pavement = toShape(CITY);
  pavement.holes.push(...shaftOpenings.filter((pts) => pts.every(([x, z]) => pip(CITY, x, z))).map((pts) => toShape(pts, THREE.Path)));
  flat(pavement, over(M.concrete), Y + 0.03, 3);
  const roadCutouts = shaftOpenings.map((corners) => {
    const xs = corners.map((p) => p[0]), zs = corners.map((p) => p[1]);
    return { corners, minX: Math.min(...xs), maxX: Math.max(...xs), minZ: Math.min(...zs), maxZ: Math.max(...zs) };
  });

  // ---- stone embankment round every shore
  const wallM = M.stone.clone(); wallM.side = THREE.DoubleSide;
  const wall = (pts) => { const pos = [], uv = [], idx = []; let L = 0;
    for (let i = 0; i <= pts.length; i++) { const p = pts[i % pts.length], q = pts[(i + pts.length - 1) % pts.length]; if (i) L += Math.hypot(p[0] - q[0], p[1] - q[1]); pos.push(p[0], Y, p[1], p[0], -1.6, p[1]); uv.push(L / 2, 0, L / 2, -1.2); if (i) { const a = i * 2 - 2; idx.push(a, a + 1, a + 2, a + 2, a + 1, a + 3); } }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
    solids.add(new THREE.Mesh(g, wallM)); };
  wall(WATER); wall(GUSHAN);
  for (const i of ISLETS) add(worldUV(new THREE.CylinderGeometry(i.r, i.r + 1, 2.6, 56), 2), [M.stone, M.grass, M.stone], i.x, Y - 1.3, i.z).castShadow = false;

  // ---- ribbons: roads, promenades, lane lines
  function ribbon(pts, width, mat, y, { tile = 4, offset = 0, cutouts = [] } = {}) {
    const pos = [], uv = [], idx = []; let L = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], dl = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, nx = -(b[1] - a[1]) / dl, nz = (b[0] - a[0]) / dl;
      if (i) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
      for (const s of [1, -1]) { pos.push(pts[i][0] + nx * (offset + s * width / 2), y, pts[i][1] + nz * (offset + s * width / 2)); uv.push((s * width / 2) / tile, L / tile); }
      if (i) { const k = i * 2 - 2; idx.push(k, k + 1, k + 2, k + 2, k + 1, k + 3); }
    }
    const [vertices, texCoords] = cutouts.length ? cutRibbon(pos, uv, idx, cutouts) : [pos, uv];
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(texCoords, 2)); if (!cutouts.length) g.setIndex(idx); g.computeVertexNormals();
    const m = new THREE.Mesh(g, mat); mat.side = THREE.DoubleSide; m.receiveShadow = true; solids.add(m); return m;
  }
  // subdivide long straight runs so ribbons bend smoothly
  const dense = (pts, step = 30) => { const o = []; for (let i = 0; i < pts.length - 1; i++) { const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1]) / step)); for (let k = 0; k < n; k++) o.push([a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n]); } o.push(pts[pts.length - 1]); return o; };
  const asphalt = over(M.asphalt, 4), paving = over(M.paving, 4), lineM = over(new THREE.MeshStandardMaterial({ color: 0xe6e2d2, roughness: 0.6 }), 7), kerbM = over(M.concrete, 3);
  for (const [name, [pts, w, kind]] of Object.entries(ROADS)) {
    const d = dense(pts);
    const cutouts = name === '平海路' ? roadCutouts : [];
    if (kind === 'asphalt') { ribbon(d, w + 5, kerbM, Y + 0.05, { tile: 3, cutouts }); ribbon(d, w, asphalt, Y + 0.07, { cutouts }); ribbon(d, 0.2, lineM, Y + 0.09, { cutouts }); if (w >= 14) for (const s of [-1, 1]) ribbon(d, 0.15, lineM, Y + 0.09, { offset: s * (w / 2 - 0.5), cutouts }); }
    else ribbon(d, w, paving, Y + 0.07, { tile: 2, cutouts });
  }
  // lakefront promenade hugging the Hubin shore (pick whichever side of the shoreline is land), and the path from the pier up to Leifeng Pagoda
  const shore = dense(WATER.slice(1, 16), 15), tx = shore[5][0] - shore[3][0], tz = shore[5][1] - shore[3][1], tl = Math.hypot(tx, tz);
  const landSide = walkable(shore[4][0] - tz / tl * 6, shore[4][1] + tx / tl * 6) && !walkable(shore[4][0] + tz / tl * 6, shore[4][1] - tx / tl * 6) ? 1 : -1;
  ribbon(shore, 9, paving, Y + 0.06, { tile: 2, offset: landSide * 5.5 });
  ribbon(dense([[-2462, -736], [-2560, -700], [-2700, -680], [-2770, -660]]), 6, paving, Y + 0.1, { tile: 2 });

  // ---- causeways: instanced deck slabs that follow each bridge hump, with stone rails on the bridges
  const slabs = [], posts = [];
  for (const st of [BAI, SU, XILING]) {
    const n = Math.ceil(st.len / 8), dl = st.len / n;
    for (let i = 0; i < n; i++) {
      const s = (i + 0.5) * dl, [x, z, dx, dz] = pointAt(st, s), h0 = hump(st, s - dl / 2), h1 = hump(st, s + dl / 2), onBridge = st.bridges.some((b) => Math.abs(s - b.s) < b.half - 4);
      const o = { x, z, y: Y + (h0 + h1) / 2, yaw: Math.atan2(dx, dz), pitch: -Math.atan2(h1 - h0, dl), len: dl + 0.3, w: st.half * 2, thick: onBridge ? 0.9 : 3.4 };
      slabs.push(o);
      if (st.bridges.some((b) => Math.abs(s - b.s) < b.half + 2)) for (const sd of [-1, 1]) posts.push({ ...o, x: x - dz * sd * (st.half - 0.3), z: z + dx * sd * (st.half - 0.3) });
    }
  }
  const o3 = new THREE.Object3D(); o3.rotation.order = 'YXZ';
  const deckM = M.paving.clone(); for (const k of ['map', 'normalMap', 'roughnessMap']) { deckM[k] = deckM[k].clone(); deckM[k].repeat.set(6, 4); } deckM.metalnessMap = deckM.roughnessMap; // unit box scaled per slab, so tile the texture
  const deck = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, -0.5, 0), deckM, slabs.length);
  slabs.forEach((s, i) => { o3.position.set(s.x, s.y, s.z); o3.rotation.set(s.pitch, s.yaw, 0); o3.scale.set(s.w, s.thick, s.len); o3.updateMatrix(); deck.setMatrixAt(i, o3.matrix); });
  const rail = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), M.stone, posts.length * 2);
  posts.forEach((p, i) => { o3.position.set(p.x, p.y, p.z); o3.rotation.set(p.pitch, p.yaw, 0); o3.scale.set(0.3, 1.1, 0.3); o3.updateMatrix(); rail.setMatrixAt(i * 2, o3.matrix);
    o3.position.y = p.y + 0.85; o3.scale.set(0.16, 0.2, p.len); o3.updateMatrix(); rail.setMatrixAt(i * 2 + 1, o3.matrix); });
  for (const m of [deck, rail]) { m.castShadow = m.receiveShadow = true; m.frustumCulled = false; solids.add(m); }
  // timber piers for the lake boats
  for (const st of [PIER_HUBIN, PIER_LEIFENG]) { const [x, z, dx, dz] = pointAt(st, st.len / 2); box(st.half * 2, 0.25, st.len + 4, M.wood, x, Y - 0.1, z, { s: 1 }).rotation.y = Math.atan2(dx, dz);
    for (const s of [0.1, 0.5, 0.9]) for (const sd of [-1, 1]) { const [px, pz] = pointAt(st, st.len * s); ctx.cyl(0.12, 0.12, 2.6, M.wood, px - dz * sd * st.half, Y - 1.1, pz + dx * sd * st.half, {}, 8); } }

  ctx.ribbon = ribbon; ctx.dense = dense; ctx.over = over;
  return ctx;
}
