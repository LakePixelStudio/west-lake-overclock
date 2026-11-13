// Street-level Hubin: the glass Apple store, the curved LED screen on the Gonglian CC corner, traffic lights, avenue lamps, shared bikes.
import * as THREE from "./wl80-r3-three-three.module.js";
import { mergeGeometries } from "./wl80-r3-three-utils-BufferGeometryUtils.js";
import { LAND_Y as Y, ROADS, WATER, pip, pointAt, makeStrip, walkable } from "./wl80-r3-game-geo.js";

export function buildStreet(ctx) {
  const { scene, M, add, box, cyl, tick } = ctx, o = new THREE.Object3D();
  const plain = (color, roughness = 0.6, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness, ...extra });

  // ---- Apple West Lake: a 15 m glass hall on Pinghai Road. Glass to the south and west, pale stone behind, a floating upper floor, a luminous ceiling.
  { const x0 = 6.3, x1 = 36.8, z0 = 281, z1 = 315.6, h = 15, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, w = x1 - x0, d = z1 - z0;
    const stone = plain(0xe6e3dc, 0.55), glass = plain(0xcfe0ea, 0.02, { transparent: true, opacity: 0.16, depthWrite: false, envMapIntensity: 1.6 });
    ctx.colliders.push(new THREE.Box3(new THREE.Vector3(x0, 0, z0), new THREE.Vector3(x1, h, z1)));
    box(w, 0.2, d, plain(0xb9b6ae, 0.35), cx, Y + 0.1, cz, { s: 2 });
    box(w + 1.2, 0.6, d + 1.2, stone, cx, Y + h, cz, { s: 2 }); box(w - 1.5, 0.05, d - 1.5, M.emit(0xfff6e8, 1.5), cx, Y + h - 0.34, cz, { shadow: false });
    box(0.6, h, d, stone, x1 - 0.3, Y + h / 2, cz, { s: 2 }); box(w, h, 0.6, stone, cx, Y + h / 2, z1 - 0.3, { s: 2 });
    box(0.08, h - 0.6, d, glass, x0 + 0.05, Y + h / 2, cz, { shadow: false }); box(w, h - 0.6, 0.08, glass, cx, Y + h / 2, z0 + 0.05, { shadow: false });
    for (let z = z0; z <= z1; z += d / 11) box(0.06, h - 0.6, 0.06, M.steel, x0 + 0.05, Y + h / 2, z, { s: 1 });               // glass joints
    for (let x = x0; x <= x1; x += w / 10) box(0.06, h - 0.6, 0.06, M.steel, x, Y + h / 2, z0 + 0.05, { s: 1 });
    box(13, 0.35, d - 1.2, stone, x1 - 7, Y + 7.3, cz, { s: 2 }); box(0.05, 1.1, d - 1.2, glass, x1 - 13.5, Y + 8, cz, { shadow: false });   // upper floor and its balustrade
    box(0.1, 3.2, 3.2, M.emit(0xffffff, 2.2), x1 - 0.65, Y + 11, cz, { shadow: false });
    for (const tx of [12, 18.5]) for (let i = 0; i < 4; i++) { const tz = z0 + 6 + i * 7.4; box(1.2, 0.08, 2.8, M.wood, tx, Y + 1.0, tz, { s: 1 }); for (const s of [-1, 1]) box(1.0, 0.8, 0.08, M.wood, tx, Y + 0.6, tz + s * 1.1, { s: 1 }); } }

  // ---- the curved LED wall wrapped round the Gonglian CC corner at Yan'an Road x Pinghai Road
  { const t = { value: 0 }, led = new THREE.Mesh(new THREE.CylinderGeometry(13, 13, 15, 48, 1, true, Math.PI, Math.PI / 2), new THREE.ShaderMaterial({ uniforms: { t }, side: THREE.DoubleSide,
      vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: `uniform float t;varying vec2 vUv;
        void main(){ vec2 p=vUv*vec2(3.,1.); float w=sin(p.x*4.+t*.9)+sin(p.y*6.-t*1.3)+sin((p.x+p.y)*5.+t*.6);
          vec3 c=.5+.5*cos(6.283*(w*.16+t*.04+vec3(0.,.33,.67))); c=mix(c,vec3(1.),smoothstep(.75,1.,sin(p.y*20.+p.x*3.-t*2.)));
          vec2 g=fract(vUv*vec2(420.,150.)); float px=smoothstep(.1,.3,g.x)*smoothstep(.1,.3,g.y);          // visible LED pixels up close
          gl_FragColor=vec4(c*mix(.55,1.,px)*1.5,1.); }` }));
    led.position.set(23.5, Y + 15.5, 391); ctx.solids.add(led); tick.push((s) => { t.value = s; });
    box(0.4, 15.6, 0.4, M.steel, 10.6, Y + 15.5, 391, { s: 1 }); box(0.4, 15.6, 0.4, M.steel, 23.5, Y + 15.5, 378.1, { s: 1 }); }

  // ---- traffic lights at the Yan'an Road junctions; they change every 12 seconds
  const red = M.emit(0xff1a10, 4), green = M.emit(0x20ff50, 4), amber = plain(0x2a2204, 0.5);
  for (const [jx, jz, cw] of [[2, 348, 14], [165, 342, 10], [-143, 353, 10], [-262, 358, 10], [-398, 363, 20], [468, 331, 24]]) for (const s of [-1, 1]) {
    const x = jx + s * (cw / 2 + 2.2), z = jz + s * 14.5;
    cyl(0.1, 0.13, 6.4, M.galv, x, Y + 3.2, z, {}, 10); box(0.12, 0.12, 6, M.galv, x, Y + 6.2, z - s * 3, { s: 1 }); ctx.circles.push({ x, z, r: 0.2 });
    box(0.34, 1.05, 0.3, M.shroud, x, Y + 5.6, z - s * 6, { s: 1 });
    [red, amber, green].forEach((m, i) => add(new THREE.SphereGeometry(0.11, 12, 8), m, x - s * 0.18, Y + 5.95 - i * 0.34, z - s * 6, { shadow: false }));
  }
  tick.push((s) => { const go = Math.floor(s / 12) % 2; green.emissiveIntensity = go ? 4 : 0.15; red.emissiveIntensity = go ? 0.15 : 4; });

  // ---- tall avenue lamps on both sides of the main roads through the district
  const posts = [], bikes = [], inDistrict = (x, z) => x > -600 && x < 620 && z > 60 && z < 820;
  const along = (name, step, off, fn) => { const [pts, w] = ROADS[name], st = makeStrip(pts, 0); for (let s = step / 2; s < st.len; s += step) { const [x, z, dx, dz] = pointAt(st, s); for (const sd of [-1, 1]) fn(x - dz * sd * (w / 2 + off), z + dx * sd * (w / 2 + off), Math.atan2(dx, dz), sd, s); } };
  const free = (x, z) => inDistrict(x, z) && walkable(x, z) && !pip(WATER, x, z) && !ctx.inBuilding(x, z);
  for (const name of ['延安路', '庆春路', '解放路', '平海路']) along(name, 38, 1.5, (x, z, yaw, sd) => { if (free(x, z)) posts.push([x, z, yaw + (sd > 0 ? Math.PI / 2 : -Math.PI / 2)]); });
  const lampG = mergeGeometries([new THREE.CylinderGeometry(0.07, 0.11, 9, 10).translate(0, 4.5, 0), new THREE.BoxGeometry(0.1, 0.1, 2.4).translate(0, 8.9, 1.1), new THREE.BoxGeometry(0.34, 0.08, 0.9).translate(0, 8.82, 2.1)].map((g) => g.toNonIndexed()));
  const lampI = new THREE.InstancedMesh(lampG, M.galv, posts.length);
  posts.forEach(([x, z, yaw], i) => { o.position.set(x, Y, z); o.rotation.set(0, yaw, 0); o.scale.setScalar(1); o.updateMatrix(); lampI.setMatrixAt(i, o.matrix); ctx.circles.push({ x, z, r: 0.18 }); });
  lampI.castShadow = lampI.receiveShadow = true; lampI.frustumCulled = false; scene.add(lampI);

  // ---- rows of shared bikes on the pavements (blue, yellow and teal fleets)
  for (const name of ['延安路', '平海路', '东坡路', '湖滨路', '学士路', '解放路', '仁和路']) along(name, 64, 2.3, (x, z, yaw, sd, s) => {
    if (sd < 0 === (Math.round(s / 64) % 2 === 0)) return;                                    // alternate sides
    const col = [0x1b6fe0, 0xf2c200, 0x1ec8b8][Math.round(s / 64) % 3];
    for (let k = -4; k <= 4; k++) { const bx = x + Math.sin(yaw) * k * 0.62, bz = z + Math.cos(yaw) * k * 0.62; if (free(bx, bz)) bikes.push([bx, bz, yaw + Math.PI / 2 + (Math.random() - 0.5) * 0.25, col]); } });
  const tube = (w, h, d, x, y, z, rx = 0) => new THREE.BoxGeometry(w, h, d).rotateX(rx).translate(x, y, z).toNonIndexed();
  const frameG = mergeGeometries([tube(0.035, 0.035, 0.62, 0, 0.66, 0.02), tube(0.035, 0.035, 0.66, 0, 0.5, -0.05, 0.75), tube(0.03, 0.5, 0.03, 0, 0.66, 0.3), tube(0.11, 0.045, 0.24, 0, 0.93, 0.3),
    tube(0.03, 0.62, 0.03, 0, 0.66, -0.47, -0.3), tube(0.46, 0.03, 0.03, 0, 0.99, -0.4), tube(0.28, 0.17, 0.2, 0, 0.8, -0.66), tube(0.035, 0.035, 0.5, 0, 0.42, 0.28, -0.55), tube(0.16, 0.02, 0.5, 0, 0.66, 0.52)]);
  const wheelG = mergeGeometries([-0.52, 0.52].map((z) => new THREE.TorusGeometry(0.31, 0.028, 6, 20).rotateY(Math.PI / 2).translate(0, 0.33, z).toNonIndexed()));
  const frameI = new THREE.InstancedMesh(frameG, plain(0xffffff, 0.45, { metalness: 0.3 }), bikes.length), wheelI = new THREE.InstancedMesh(wheelG, M.rubber, bikes.length);
  bikes.forEach(([x, z, yaw, col], i) => { o.position.set(x, Y + 0.02, z); o.rotation.set(0, yaw, 0.09); o.updateMatrix(); frameI.setMatrixAt(i, o.matrix); wheelI.setMatrixAt(i, o.matrix); frameI.setColorAt(i, new THREE.Color(col)); });
  for (const m of [frameI, wheelI]) { m.castShadow = m.receiveShadow = true; m.frustumCulled = false; scene.add(m); }
  return { lamps: posts.length, bikes: bikes.length };
}
