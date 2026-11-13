// What stands on the ground: willows and peach trees on the causeways, roadside and park trees, pagodas, the Gushan pavilion, lamps, lotus, boats.
import * as THREE from "./wl80-r3-three-three.module.js";
import { mergeGeometries, mergeVertices } from "./wl80-r3-three-utils-BufferGeometryUtils.js";
import { leafTexture, worldUV } from "./wl80-r3-game-mats.js";
import { makeBroadleaf } from "./wl80-r3-game-foliage.js";
import { LAND_Y as Y, WATER, GUSHAN, ISLETS, ROADS, BAI, SU, CITY, MOUNDS, POI, pip, pointAt, groundY, walkable, makeStrip, nearest } from "./wl80-r3-game-geo.js";

// sweeping Chinese roof: n-sided, concave slope, corners lifted
export function roofGeo(n, R, H, lift) {
  const A = n * 14, Tn = 20, pos = [], uv = [], idx = [], ca = Math.cos(Math.PI / n), seg = 2 * Math.PI / n;
  for (let j = 0; j <= Tn; j++) for (let i = 0; i <= A; i++) {
    const t = j / Tn, th = i / A * Math.PI * 2, rr = ca / Math.cos((th % seg) - Math.PI / n), corner = (rr - ca) / (1 - ca), rad = R * t * rr;
    pos.push(Math.cos(th) * rad, H * Math.pow(1 - t, 1.9) + lift * Math.pow(t, 3) * corner * corner, Math.sin(th) * rad); uv.push(i / A * Math.round(R * 2.6), t * R / 2.4);
  }
  for (let j = 0; j < Tn; j++) for (let i = 0; i < A; i++) { const a = j * (A + 1) + i, c = a + A + 1; idx.push(a, c, a + 1, a + 1, c, c + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
}

export function buildScenery(ctx) {
  const { scene, M, add, box, cyl, rnd, lamps, tick } = ctx, o3 = new THREE.Object3D();
  const roofMat = M.tile.clone(); roofMat.side = THREE.DoubleSide;
  const far = { shadow: false, parent: scene };

  // ---- landmark hills, each with a blocking circle so nobody walks through them
  const hillM = new THREE.MeshStandardMaterial({ color: 0x223a1c, roughness: 1 });
  for (const [x, z, r, h] of Object.values(MOUNDS)) { add(new THREE.SphereGeometry(1, 48, 20, 0, 6.3, 0, 1.58), hillM, x, 0, z, far).scale.set(r, h, r); ctx.circles.push({ x, z, r: r * 0.9 }); }
  // Leifeng Pagoda (five storeys, bronze, octagonal) on Sunset Hill, south shore
  { const [x, z, , h] = MOUNDS.leifeng, bronze = new THREE.MeshStandardMaterial({ color: 0x6e4326, roughness: 0.5, metalness: 0.4 });
    add(new THREE.CylinderGeometry(16, 18, 5, 8), M.stone, x, h + 0.5, z, far);
    for (let i = 0; i < 5; i++) { const r = 10 - i * 1.3, y = h + 3 + i * 8.4; add(new THREE.CylinderGeometry(r, r, 6.6, 8), bronze, x, y + 3.3, z, far); add(roofGeo(8, r + 3.8, 2.2, 0.9), roofMat, x, y + 6.4, z, far); }
    add(new THREE.CylinderGeometry(0.1, 1, 14, 8), M.gold, x, h + 52, z, far); }
  // Baochu Pagoda (slender brick spire) on Baoshi Hill, north shore above the Broken Bridge
  { const [x, z, , h] = MOUNDS.baochu, brick = new THREE.MeshStandardMaterial({ color: 0x8a7663, roughness: 0.9 });
    for (let i = 0; i < 7; i++) { const r = 3.6 - i * 0.36, y = h - 2 + i * 5.2; add(new THREE.CylinderGeometry(r * 0.94, r, 5.2, 8), brick, x, y + 2.6, z, far); add(new THREE.CylinderGeometry(r * 1.2, r * 1.2, 0.5, 8), brick, x, y + 5.2, z, far); }
    add(new THREE.CylinderGeometry(0.1, 0.9, 12, 8), M.steel, x, h + 40, z, far); }
  // Chenghuang Pavilion on Wu Hill, south-east of the lake
  { const [x, z, , h] = MOUNDS.chenghuang; for (let i = 0; i < 4; i++) { const w = 20 - i * 3.6, y = h - 2 + i * 7; add(new THREE.BoxGeometry(w, 5, w), M.red, x, y + 2.5, z, far); add(roofGeo(4, w * 0.71 + 6, 3, 1.6), roofMat, x, y + 5, z, { ...far, ry: Math.PI / 4 }); } }

  // ---- "Autumn Moon over the Calm Lake" pavilion at the east tip of Gushan, where the Bai Causeway lands
  { const [px, pz] = POI.pavilion, fy = Y + 0.5;
    box(15, 0.25, 15, M.stone, px, Y + 0.125, pz, { collide: true }); box(13, 0.25, 13, M.stone, px, Y + 0.375, pz, { collide: true });
    const seen = new Set();
    for (let i = 0; i < 4; i++) for (const s of [-1, 1]) for (const [a, b] of [[-5 + i * 3.333, s * 5], [s * 5, -5 + i * 3.333]]) {
      const k = a.toFixed(1) + b.toFixed(1); if (seen.has(k)) continue; seen.add(k);
      cyl(0.22, 0.24, 4.2, M.red, px + a, fy + 2.1, pz + b); cyl(0.34, 0.38, 0.3, M.stone, px + a, fy + 0.15, pz + b); ctx.circles.push({ x: px + a, z: pz + b, r: 0.32 });
    }
    for (const s of [-1, 1]) { box(10.8, 0.42, 0.3, M.red, px, fy + 4.1, pz + s * 5, { s: 1 }); box(0.3, 0.42, 10.8, M.red, px + s * 5, fy + 4.1, pz, { s: 1 }); box(10.6, 0.3, 0.2, M.green, px, fy + 3.6, pz + s * 5, { s: 1 }); box(0.2, 0.3, 10.6, M.green, px + s * 5, fy + 3.6, pz, { s: 1 }); }
    add(roofGeo(4, 10.4, 3.0, 1.5), roofMat, px, fy + 4.3, pz, { ry: Math.PI / 4 }); box(5.2, 1.7, 5.2, M.red, px, fy + 6.6, pz, { s: 1 });
    add(roofGeo(4, 6.2, 2.8, 1.1), roofMat, px, fy + 7.4, pz, { ry: Math.PI / 4 }); add(new THREE.SphereGeometry(0.34, 20, 14), M.gold, px, fy + 10.4, pz);
    // the Mid-Lake Pavilion islet gets a small one too
    add(new THREE.BoxGeometry(7, 4, 7), M.red, ISLETS[1].x, Y + 2, ISLETS[1].z); add(roofGeo(4, 8, 2.6, 1.2), roofMat, ISLETS[1].x, Y + 4, ISLETS[1].z, { ry: Math.PI / 4 }); }

  // ---- weeping willow: one generated tree, instanced; fronds sway in the vertex shader
  const wood = [new THREE.CylinderGeometry(0.2, 0.36, 4.6, 10).translate(0, 2.3, 0)], P = [], U = [], N = [], I = [];
  const frond = (ox, oy, oz, len, yaw, out) => { const b = P.length / 3, cx = Math.cos(yaw) * 0.085, cz = Math.sin(yaw) * 0.085;
    for (let k = 0; k <= 5; k++) { const t = k / 5, y = oy - len * t, bend = t * t * 0.5;
      for (const s of [-1, 1]) { P.push(ox + s * cx + out.x * bend, y, oz + s * cz + out.z * bend); U.push(s * 0.5 + 0.5, t); N.push(out.x * 0.5, 0.85, out.z * 0.5); }
      if (k < 5) I.push(b + k * 2, b + k * 2 + 2, b + k * 2 + 1, b + k * 2 + 1, b + k * 2 + 2, b + k * 2 + 3); } };
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * 6.283 + rnd(-0.3, 0.3), R = rnd(4.2, 6.2), o = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
    const cur = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 4.3, 0), o.clone().multiplyScalar(R * 0.3).setY(6.6 + rnd(0, 1)), o.clone().multiplyScalar(R * 0.7).setY(7.4 + rnd(0, 0.8)), o.clone().multiplyScalar(R).setY(6.2)]);
    wood.push(new THREE.TubeGeometry(cur, 12, 0.085, 6));
    for (let k = 0; k < 44; k++) { const p = cur.getPoint(rnd(0.25, 1)); p.x += rnd(-0.7, 0.7); p.z += rnd(-0.7, 0.7); const len = Math.min(p.y - 0.9, rnd(3, 6.2)), yaw = rnd(0, 3.14); frond(p.x, p.y, p.z, len, yaw, o); frond(p.x, p.y, p.z, len, yaw + 1.57, o); }
  }
  const leafG = new THREE.BufferGeometry();
  leafG.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); leafG.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2)); leafG.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); leafG.setIndex(I);
  const uTime = { value: 0 }, lt = leafTexture();
  const sway = (s) => { s.uniforms.uTime = uTime; s.vertexShader = 'uniform float uTime;\n' + s.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
      vec4 wp=instanceMatrix*vec4(position,1.); float sw=uv.y*uv.y;
      transformed.x+=sin(uTime*1.2+wp.x*.31+wp.z*.17)*.3*sw; transformed.z+=cos(uTime*.9+wp.z*.27+wp.x*.11)*.22*sw;
      #endif`); };
  const leafM = new THREE.MeshStandardMaterial({ map: lt, alphaTest: 0.2, side: THREE.DoubleSide, roughness: 0.85, emissive: 0x2c3a10, emissiveMap: lt, emissiveIntensity: 0.1, color: 0xa8c070 }); leafM.onBeforeCompile = sway;
  const depthM = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: lt, alphaTest: 0.2 }); depthM.onBeforeCompile = sway;

  // ---- planting plan
  const willows = [], blobs = []; // blobs: [x, z, scale, colour]
  const roadList = Object.values(ROADS), onRoad = (x, z) => roadList.some(([pts, w]) => nearest(pts, null, x, z).d < w / 2 + 1.6); // nothing gets planted on a carriageway
  const green = () => new THREE.Color().setHSL(rnd(0.25, 0.3), rnd(0.42, 0.58), rnd(0.2, 0.3));          // camphor: Hangzhou's city tree, dense dark evergreen
  const plane = () => new THREE.Color().setHSL(rnd(0.19, 0.23), rnd(0.45, 0.6), rnd(0.3, 0.4));          // London plane lining the lake roads: lighter, yellower
  const pink = () => new THREE.Color().setHSL(rnd(0.93, 0.97), 0.62, rnd(0.62, 0.74));                   // peach in blossom
  const along = (st, step, off, fn) => { for (let s = step / 2; s < st.len; s += step) { const [x, z, dx, dz] = pointAt(st, s); for (const sd of [-1, 1]) fn(x - dz * sd * off, z + dx * sd * off, s, sd); } };
  const offBridge = (st, s) => !st.bridges.some((b) => Math.abs(s - b.s) < b.half + 4);
  // "one willow, one peach" along both causeways
  along(BAI, 13, BAI.half - 1.3, (x, z, s, sd) => { if (offBridge(BAI, s)) (Math.round(s / 13) % 2 ? willows.push([x, z]) : blobs.push([x, z, 0.5, pink()])); });
  along(SU, 19, SU.half - 1.5, (x, z, s, sd) => { if (offBridge(SU, s)) (Math.round(s / 19 + (sd > 0)) % 2 ? willows.push([x, z]) : blobs.push([x, z, rnd(0.5, 0.9), Math.round(s / 19) % 4 ? green() : pink()])); });
  // willows on the Hubin shore, set just back from the water
  { const sh = ctx.dense(WATER.slice(1, 16), 21); for (let i = 1; i < sh.length - 1; i++) { const tx = sh[i + 1][0] - sh[i - 1][0], tz = sh[i + 1][1] - sh[i - 1][1], l = Math.hypot(tx, tz);
      for (const sd of [1, -1]) { const x = sh[i][0] - tz / l * 2.6 * sd, z = sh[i][1] + tx / l * 2.6 * sd; if (walkable(x, z) && !pip(WATER, x, z) && !onRoad(x, z)) { willows.push([x, z]); if (i % 2) lamps.push([x - tz / l * 5 * sd, z + tx / l * 5 * sd]); break; } } } }
  // street and avenue trees on both sides of the main roads
  for (const [name, step] of [['南山路', 15], ['杨公堤', 15], ['北山街', 15], ['环城西路', 18], ['延安路', 22], ['庆春路', 26], ['解放路', 26], ['平海路', 24], ['湖滨路', 20]]) {
    const [pts, w] = ROADS[name], st = makeStrip(pts, 0);
    const avenue = '南山路北山街杨公堤'.includes(name); // plane trees arch over the lake roads
    along(st, step, w / 2 + 3.5, (x, z) => { if (!pip(WATER, x, z) && !onRoad(x, z)) blobs.push([x, z, avenue ? rnd(1.25, 1.6) : rnd(0.9, 1.25), avenue ? plane() : green()]); });
  }
  // parks round the lake, Gushan and the islets: scattered woodland
  for (let i = 0; i < 2600; i++) { const p = WATER[Math.floor(rnd(0, WATER.length))], x = p[0] + rnd(-260, 260), z = p[1] + rnd(-260, 260); if (!pip(WATER, x, z) && !pip(CITY, x, z) && !onRoad(x, z)) blobs.push([x, z, rnd(0.9, 1.7), green()]); }
  for (let i = 0; i < 260; i++) { const x = rnd(-470, 30), z = rnd(-2090, -1200); if (pip(GUSHAN, x, z) && Math.hypot(x - POI.pavilion[0], z - POI.pavilion[1]) > 30) blobs.push([x, z, rnd(1, 1.8), green()]); }
  for (const il of ISLETS) for (let k = 0; k < il.r * 0.5; k++) { const a = rnd(0, 6.3), d = Math.sqrt(rnd()) * (il.r - 6); if (d > 9) blobs.push([il.x + Math.cos(a) * d, il.z + Math.sin(a) * d, rnd(0.9, 1.5), green()]); }
  for (const [mx, mz, r, h] of Object.values(MOUNDS)) for (let k = 0; k < r * 1.4; k++) { const a = rnd(0, 6.3), d = Math.sqrt(rnd()) * r * 0.95; blobs.push([mx + Math.cos(a) * d, mz + Math.sin(a) * d, rnd(1.2, 2), green(), h * Math.sqrt(Math.max(0, 1 - (d / r) ** 2)) - 1.5]); }

  for (const list of [willows, blobs, lamps]) for (let i = list.length - 1; i >= 0; i--) if (ctx.inBuilding(list[i][0], list[i][1])) list.splice(i, 1); // nothing grows through a real building

  // Keep world-space instance matrices for wind phase, with bounds small enough to cull whole stands.
  const treeCellSize = 256;
  function plantTrees(trees, trunkGeometry, leafGeometry, leafMaterial, depthMaterial, place) {
    const cells = new Map();
    for (const tree of trees) {
      const [x, z, , color] = tree;
      place(tree);
      o3.updateMatrix();
      const key = `${Math.floor(x / treeCellSize)},${Math.floor(z / treeCellSize)}`;
      let cell = cells.get(key);
      if (!cell) cells.set(key, cell = []);
      cell.push({ matrix: o3.matrix.clone(), color });
    }
    for (const cell of cells.values()) {
      const trunks = new THREE.InstancedMesh(trunkGeometry, M.bark, cell.length);
      const leaves = new THREE.InstancedMesh(leafGeometry, leafMaterial, cell.length);
      cell.forEach(({ matrix, color }, i) => {
        trunks.setMatrixAt(i, matrix);
        leaves.setMatrixAt(i, matrix);
        if (color) leaves.setColorAt(i, color);
      });
      trunks.castShadow = trunks.receiveShadow = leaves.castShadow = leaves.receiveShadow = true;
      leaves.customDepthMaterial = depthMaterial;
      leaves.computeBoundingSphere();
      leaves.boundingSphere.radius += 1; // Both wind shaders displace foliage by less than one metre at maximum tree scale.
      scene.add(trunks, leaves);
      ctx.noAO.push(leaves);
    }
  }

  plantTrees(willows, worldUV(mergeGeometries(wood), 1.2), leafG, leafM, depthM, ([x, z]) => {
    o3.position.set(x, groundY(x, z), z);
    o3.rotation.set(0, rnd(0, 6.3), 0);
    o3.scale.setScalar(rnd(0.85, 1.25));
    ctx.circles.push({ x, z, r: 0.42 });
  });

  // broadleaf trees: leaf-card crowns on branching trunks, instanced and tinted per tree
  const bl = makeBroadleaf(M, rnd, uTime);
  plantTrees(blobs, bl.trunk, bl.leaf, bl.leafMat, bl.depthMat, ([x, z, s, , y]) => {
    o3.position.set(x, y ?? groundY(x, z), z);
    o3.rotation.set(0, rnd(0, 6.3), 0);
    o3.scale.set(s, s * rnd(0.9, 1.2), s);
    if (y === undefined) ctx.circles.push({ x, z, r: 0.3 * s });
  });

  // ---- lamp posts along the Hubin promenade and the Bai Causeway (instanced)
  along(BAI, 28, BAI.half - 0.5, (x, z, s, sd) => { if (sd > 0 && offBridge(BAI, s)) lamps.push([x, z]); });
  const inst = (geo, mat, dy, shadow = true) => { const m = new THREE.InstancedMesh(geo, mat, lamps.length); m.castShadow = shadow; m.receiveShadow = true; m.frustumCulled = false;
    lamps.forEach(([x, z], i) => { o3.position.set(x, groundY(x, z) + dy, z); o3.rotation.set(0, 0, 0); o3.scale.setScalar(1); o3.updateMatrix(); m.setMatrixAt(i, o3.matrix); }); scene.add(m); };
  inst(new THREE.CylinderGeometry(0.05, 0.09, 3.5, 10), M.steel, 1.75); inst(new THREE.CylinderGeometry(0.14, 0.2, 0.5, 10), M.steel, 0.25);
  inst(new THREE.BoxGeometry(0.34, 0.5, 0.34), M.emit(0xffc27a, 1.2), 3.75, false); inst(new THREE.ConeGeometry(0.36, 0.26, 4).rotateY(Math.PI / 4), M.steel, 4.13);
  lamps.forEach(([x, z]) => ctx.circles.push({ x, z, r: 0.2 }));

  // ---- lotus beds: off the Hubin shore, in the North Inner Lake by the Broken Bridge, and at Quyuan by the Su Causeway
  const pads = [], bed = (cx, cz, n, rx, rz) => { for (let i = 0; i < n; i++) { const a = rnd(0, 6.3), d = Math.sqrt(rnd()), x = cx + Math.cos(a) * d * rx, z = cz + Math.sin(a) * d * rz; if (pip(WATER, x, z) && !walkable(x, z)) pads.push([x, z]); } };
  bed(40, -8, 260, 60, 22); bed(-190, 120, 240, 60, 22); bed(470, -930, 500, 45, 70); bed(-330, -2440, 500, 60, 50); bed(-90, -1180, 200, 30, 30);
  const padI = new THREE.InstancedMesh(new THREE.CircleGeometry(0.42, 14, 0.25, 5.9).rotateX(-Math.PI / 2), M.lotus, pads.length);
  const budI = new THREE.InstancedMesh(new THREE.SphereGeometry(0.09, 8, 8).scale(1, 1.7, 1), new THREE.MeshStandardMaterial({ color: 0xd9788f, roughness: 0.5 }), Math.floor(pads.length / 9));
  pads.forEach(([x, z], i) => { o3.position.set(x, 0.04 + rnd(0, 0.05), z); o3.rotation.set(rnd(-0.12, 0.12), rnd(0, 6.3), rnd(-0.12, 0.12)); o3.scale.setScalar(rnd(0.6, 1.7)); o3.updateMatrix(); padI.setMatrixAt(i, o3.matrix);
    if (i % 9 === 0 && i / 9 < budI.count) { o3.position.y = 0.32; o3.rotation.set(0, 0, 0); o3.scale.setScalar(0.75); o3.updateMatrix(); budI.setMatrixAt(i / 9, o3.matrix); } });
  padI.receiveShadow = true; padI.frustumCulled = budI.frustumCulled = false; scene.add(padI, budI);

  tick.push((t) => { uTime.value = t; });
  // covered wooden boat; used for the moored ones here and for the ferry in transit.js
  ctx.makeBoat = (scale = 1) => { const g = new THREE.Group(), hullM = M.wood.clone(); hullM.side = THREE.DoubleSide;
    add(new THREE.SphereGeometry(1, 28, 12, 0, 6.3, Math.PI / 2, Math.PI / 2), hullM, 0, 0.42, 0, { parent: g }).scale.set(0.95, 0.6, 3.4);
    add(worldUV(new THREE.BoxGeometry(1.5, 0.05, 5), 1), M.wood, 0, 0.26, 0, { parent: g });
    for (const sx of [-0.7, 0.7]) for (const sz of [-1.3, 1.3]) add(new THREE.CylinderGeometry(0.035, 0.035, 1.5, 8), M.red, sx, 1.0, sz, { parent: g });
    add(new THREE.CylinderGeometry(0.95, 0.95, 3.1, 20, 1, true, -Math.PI / 2, Math.PI), roofMat, 0, 1.25, 0, { parent: g, rx: Math.PI / 2 });
    for (const sz of [-1.5, 1.5]) add(new THREE.SphereGeometry(0.1, 10, 8), M.emit(0xff5030, 3), 0.75, 1.55, sz, { parent: g, shadow: false });
    g.scale.setScalar(scale); return g; };
  for (const [x, z, ry] of [[60, -40, 0.5], [-420, -180, -0.9], [-900, -700, 1.9], [300, -700, 0.2], [-1500, -1000, 2.6], [-2200, -1300, 1.2], [-600, -1700, 0.4]]) {
    const g = ctx.makeBoat(); g.position.set(x, 0.1, z); g.rotation.y = ry; ctx.solids.add(g); tick.push((t) => { g.position.y = 0.1 + Math.sin(t * 0.9 + x) * 0.04; g.rotation.z = Math.sin(t * 0.7 + z) * 0.025; }); }
}
