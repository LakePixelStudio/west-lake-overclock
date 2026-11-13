// Vehicle physics for the imported fleet. The procedural car is a fallback if a model fails to load.
import * as THREE from "./wl80-r3-three-three.module.js";
import { groundY, walkable, RING, makeStrip, discInPoly } from "./wl80-r3-game-geo.js";
import { createVehicleModels } from "./wl80-r3-game-vehicle-models.js";
import { createFsd } from "./wl80-r3-game-fsd.js";

const lerpTab = (t, tab) => { for (let i = 1; i < tab.length; i++) if (t <= tab[i][0]) { const a = tab[i - 1], b = tab[i], k = (t - a[0]) / (b[0] - a[0]), s = k * k * (3 - 2 * k); return a[1] + (b[1] - a[1]) * s; } return tab[tab.length - 1][1]; };
const sp = (v, e) => Math.sign(v) * Math.pow(Math.abs(v), e);
const L = 4.75, W_TAB = [[0, 0.5], [0.05, 0.8], [0.18, 0.94], [0.5, 0.965], [0.84, 0.94], [0.95, 0.84], [1, 0.58]];
const BELT = [[0, 0.56], [0.04, 0.7], [0.28, 0.9], [0.4, 0.99], [0.86, 1.03], [0.95, 0.99], [1, 0.8]], FLOOR = [[0, 0.44], [0.07, 0.25], [0.92, 0.25], [1, 0.42]];

function loft(NS, NA, ring, closed) { // ring(t, k) -> [x, y]; stations run front (t=0, -z) to rear
  const pos = [], idx = [];
  for (let i = 0; i <= NS; i++) for (let k = 0; k <= NA; k++) { const t = i / NS, [x, y] = ring(t, k / NA); pos.push(x, y, (t - 0.5) * L); }
  for (let i = 0; i < NS; i++) for (let k = 0; k < NA; k++) { const a = i * (NA + 1) + k, b = a + NA + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  if (closed) for (const end of [0, NS]) { const c = pos.length / 3, t = end / NS; pos.push(0, (lerpTab(t, BELT) + lerpTab(t, FLOOR)) / 2, (t - 0.5) * L); for (let k = 0; k < NA; k++) { const a = end * (NA + 1) + k; end ? idx.push(c, a + 1, a) : idx.push(c, a, a + 1); } }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}

function carModel(M, hex, plateText) {
  const g = new THREE.Group(); g.rotation.order = 'YXZ';
  const paint = new THREE.MeshPhysicalMaterial({ color: hex, roughness: 0.32, metalness: 0.55, clearcoat: 1, clearcoatRoughness: 0.04, side: THREE.DoubleSide });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x05080c, roughness: 0.03, metalness: 0.9, clearcoat: 1, side: THREE.DoubleSide });
  const part = (geo, mat, x = 0, y = 0, z = 0, parent = g) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; parent.add(m); return m; };
  // lower body: rounded-rectangle sections with a little tumblehome above the waist
  part(loft(44, 36, (t, u) => { const a = u * Math.PI * 2, w = lerpTab(t, W_TAB), top = lerpTab(t, BELT), bot = lerpTab(t, FLOOR), c = Math.cos(a), s = Math.sin(a);
    return [sp(c, 0.36) * w * (1 - 0.07 * Math.max(0, s)), (top + bot) / 2 + sp(s, 0.42) * (top - bot) / 2]; }, true), paint);
  // glasshouse: one continuous dark canopy from the cowl over a fastback tail
  part(loft(30, 20, (t0, u) => { const t = 0.3 + t0 * 0.64, a = u * Math.PI, w = lerpTab(t, W_TAB) * 0.87 * (0.86 + 0.14 * Math.sin(Math.PI * t0)), h = 0.5 * Math.pow(Math.sin(Math.PI * Math.pow(t0, 0.78)), 0.5);
    return [Math.cos(a) * w * (1 - 0.2 * Math.sin(a)) * (0.55 + 0.45 * Math.pow(Math.abs(Math.cos(a)), 0.25)), lerpTab(t, BELT) - 0.035 + Math.pow(Math.sin(a), 0.55) * h]; }, false), glass);
  // trim and lights
  for (const s of [-1, 1]) {
    part(new THREE.BoxGeometry(0.035, 0.07, 2.7), M.rubber, s * 0.955, 0.3, 0.02);                                                         // sill
    const mir = part(new THREE.SphereGeometry(0.1, 14, 10), paint, s * 1.03, 1.02, -0.72); mir.scale.set(0.5, 0.6, 1.1);
    const hl = part(new THREE.BoxGeometry(0.36, 0.045, 0.1), M.emit(0xeaf4ff, 3.5), s * 0.6, 0.71, -L / 2 + 0.17); hl.rotation.y = -s * 0.5; hl.castShadow = false;
    part(new THREE.BoxGeometry(0.3, 0.012, 0.012), M.galv, s * 0.975, 0.86, 0.35).castShadow = false; part(new THREE.BoxGeometry(0.3, 0.012, 0.012), M.galv, s * 0.975, 0.86, -0.55).castShadow = false; // flush door handles
  }
  part(new THREE.BoxGeometry(1.1, 0.12, 0.06), M.rubber, 0, 0.4, -L / 2 + 0.07);                                                            // lower intake
  const tail = M.emit(0xff1508, 2.5); part(new THREE.BoxGeometry(1.46, 0.04, 0.06), tail, 0, 0.9, L / 2 - 0.1).castShadow = false;
  const pc = document.createElement('canvas'); pc.width = 440; pc.height = 140; const px = pc.getContext('2d'), gr = px.createLinearGradient(0, 0, 440, 0);
  gr.addColorStop(0, '#e9f6ee'); gr.addColorStop(1, '#38b56b'); px.fillStyle = gr; px.fillRect(0, 0, 440, 140); px.strokeStyle = '#111'; px.lineWidth = 6; px.strokeRect(5, 5, 430, 130);
  px.fillStyle = '#111'; px.font = 'bold 86px "Segoe UI","Microsoft YaHei",sans-serif'; px.textAlign = 'center'; px.textBaseline = 'middle'; px.fillText(plateText, 220, 74);
  const pt = new THREE.CanvasTexture(pc); pt.colorSpace = THREE.SRGBColorSpace;
  part(new THREE.PlaneGeometry(0.44, 0.14), new THREE.MeshStandardMaterial({ map: pt, roughness: 0.4 }), 0, 0.6, L / 2 - 0.035).castShadow = false; // green new-energy plate
  // wheels: lathed tyre, alloy rim with ten spokes, brake disc; arches are dark liners set into the body side
  const tyre = new THREE.LatheGeometry([[0.2, -0.12], [0.3, -0.125], [0.345, -0.1], [0.36, -0.04], [0.36, 0.04], [0.345, 0.1], [0.3, 0.125], [0.2, 0.12]].map(([r, y]) => new THREE.Vector2(r, y)), 36).rotateZ(Math.PI / 2);
  const rimM = new THREE.MeshStandardMaterial({ color: 0x9a9da2, metalness: 1, roughness: 0.25 }), spin = [], pivots = [];
  for (const sx of [-1, 1]) for (const z of [-1.47, 1.42]) {
    const pv = new THREE.Group(); pv.position.set(sx * 0.845, 0.36, z); g.add(pv); const s = new THREE.Group(); pv.add(s);
    part(tyre, M.rubber, 0, 0, 0, s); part(new THREE.CylinderGeometry(0.29, 0.29, 0.2, 32, 1, true).rotateZ(Math.PI / 2), rimM, 0, 0, 0, s).material.side = THREE.DoubleSide;
    part(new THREE.CylinderGeometry(0.2, 0.2, 0.02, 24).rotateZ(Math.PI / 2), M.steel, sx * 0.02, 0, 0, s); part(new THREE.CylinderGeometry(0.06, 0.07, 0.05, 16).rotateZ(Math.PI / 2), rimM, sx * 0.1, 0, 0, s);
    for (let k = 0; k < 10; k++) part(new THREE.BoxGeometry(0.025, 0.25, 0.035).translate(0, 0.16, 0).rotateX(k * Math.PI / 5), rimM, sx * 0.095, 0, 0, s);
    spin.push(s); if (z < 0) pivots.push(pv);
  }
  return { g, spin, pivots, tail };
}

export function createCars(ctx, spots, M, onSkid, { shaftAt, actorAt } = {}) {
  const models = createVehicleModels(), ring = makeStrip([...RING, RING[0]], 0);
  const list = spots.map(([x, z, heading, modelId], i) => {
    const g = new THREE.Group(); g.rotation.order = 'YXZ'; ctx.scene.add(g);
    const type = models.types.find((entry) => entry.id === modelId) ?? models.types[i % models.types.length];
    const car = {
      g, type, spin: [], pivots: [], tail: null, modelLoaded: false, visualReady: false,
      pos: new THREE.Vector3(x, groundY(x, z), z), heading, vx: 0, vz: 0, v: 0, slip: 0, steer: 0,
      auto: false, fsdStatus: '', circles: [{ x, z, r: 0.95 }, { x, z, r: 0.95 }],
    };
    ctx.dyn.push(...car.circles); return car;
  });
  let ready;
  const loadAssets = (progress) => ready ??= Promise.all(list.map(async (car) => {
    try {
      await models.load(car, car.type);
      car.modelLoaded = true;
    } catch (error) {
      throw new Error('车辆 ' + car.type.asset + '.glb（' + (error.message || '无法读取模型') + '）', {cause:error});
    }
    car.visualReady = true;
    progress?.();
  }));
  const roadClear = (x, z, y) => {
    if (!walkable(x, z) || shaftAt?.(x, z)) return false;
    const n = ctx.near(x, z);
    for (const b of n.boxes) if (x > b.min.x - 0.9 && x < b.max.x + 0.9 && z > b.min.z - 0.9 && z < b.max.z + 0.9 && b.max.y > y + 0.3 && b.min.y < y + 1.4) return false;
    for (const c of n.circles) if (Math.hypot(x - c.x, z - c.z) < c.r + 0.9) return false;
    for (const p of n.polys) if (discInPoly(p.pts, x, z, 0.9)) return false;
    return true;
  };
  const free = (car, x, z, y) => {
    if (!roadClear(x, z, y)) return false;
    for (const c of ctx.dyn) if (!car.circles.includes(c) && Math.hypot(x - c.x, z - c.z) < c.r + 0.9) return false;
    return true;
  };
  const assistedClear = (car, x, z, y) => free(car, x, z, y) && !actorAt?.(x, z, y);
  const fsd = createFsd(ring, assistedClear, roadClear);
  const setFsd = (car, active) => {
    if (!car || car.type.id !== 'tesla') return false;
    fsd.reset(car); car.auto = active; car.fsdStatus = '';
    return true;
  };
  return {
    list, ring, get ready() { return ready; }, loadAssets, setFsd,
    nearest(p, max) {
      let result;
      for (const car of list) {
        const distance = Math.hypot(car.pos.x - p.x, car.pos.z - p.z);
        if (distance < max) { max = distance; result = car; }
      }
      return result;
    },
    update(dt, driven, input) {
      for (const car of list) {
        let inp = car === driven ? input : { thr: 0, steer: 0, brake: Math.abs(car.v) < 6, parked: true };
        if (car === driven && car.auto) {
          if (inp.manual || inp.thr || inp.steer || inp.brake) setFsd(car, false);
          else { inp = fsd(car); car.fsdStatus = inp.status; }
        }
        const k = (a, b, r) => a + (b - a) * (1 - Math.exp(-r * dt)), h0 = car.heading, fx = -Math.sin(h0), fz = -Math.cos(h0), rx = Math.cos(h0), rz = -Math.sin(h0);
        let vf = car.vx * fx + car.vz * fz, vl = car.vx * rx + car.vz * rz;
        if (inp.thr > 0) vf += (vf < 0 ? 16 : 9.5) * inp.thr * dt; else if (inp.thr < 0) vf -= (vf > 0.5 ? 17 : 5) * -inp.thr * dt; else vf = k(vf, 0, 0.45);
        if (inp.serviceBrake) vf -= Math.sign(vf) * Math.min(Math.abs(vf), 8 * inp.serviceBrake * dt);
        if (inp.brake) vf = k(vf, 0, inp.parked ? 3 : 1.1);                                   // handbrake: rear wheels lock...
        vl = k(vl, 0, inp.brake && !inp.parked ? 1.3 : Math.abs(vl) > 5 ? 3.2 : 9);           // ...and lateral grip goes, so the tail steps out
        vf = Math.max(-8, Math.min(34, vf));
        car.steer = k(car.steer, inp.steer * 0.55 / (1 + Math.abs(vf) * (inp.brake ? 0.04 : 0.085)), 8);
        const h = h0 + vf * Math.tan(car.steer) / 2.9 * (inp.brake && !inp.parked ? 1.6 : 1) * dt;
        car.vx = fx * vf + rx * vl; car.vz = fz * vf + rz * vl;
        const nx = car.pos.x + car.vx * dt, nz = car.pos.z + car.vz * dt, y = car.pos.y, f2x = -Math.sin(h), f2z = -Math.cos(h);
        if (Math.abs(vf) + Math.abs(vl) > 0.01) {
          const clear = car.auto ? assistedClear : free;
          if (clear(car, nx + f2x * 1.5, nz + f2z * 1.5, y) && clear(car, nx - f2x * 1.5, nz - f2z * 1.5, y) && clear(car, nx, nz, y)) { car.pos.x = nx; car.pos.z = nz; car.heading = h; }
          else if (car.auto) { car.vx = car.vz = vf = vl = 0; car.fsdStatus = '前方受阻 · 等待'; }
          else { car.vx *= -0.25; car.vz *= -0.25; }                                          // bump and bounce back
        }
        car.v = vf; car.slip = Math.abs(vl);
        const cxh = -Math.sin(car.heading), czh = -Math.cos(car.heading);
        const yf = groundY(car.pos.x + cxh * 1.47, car.pos.z + czh * 1.47), yr = groundY(car.pos.x - cxh * 1.42, car.pos.z - czh * 1.42);
        car.pos.y = (yf + yr) / 2 + 0.08; car.g.position.copy(car.pos);
        car.g.rotation.set(Math.atan2(yf - yr, 2.89), car.heading, Math.max(-0.07, Math.min(0.07, -car.steer * Math.min(1, Math.abs(vf) / 12) * 0.1 + vl * 0.006)));
        for (const s of car.spin) s.rotation.x -= (inp.brake && !inp.parked ? vf * 0.2 : vf) / (car.wheelRadius ?? 0.36) * dt;
        for (const p of car.pivots) p.rotation.y = car.steer;
        if (car.tail) {
          const braking = !inp.parked && (inp.brake || inp.serviceBrake > .15 || (inp.thr < 0 && vf > 0.5));
          car.tail.emissiveIntensity = braking ? 3 : .3;
        }
        if (car.slip > 3.2 && Math.abs(vf) > 4 && onSkid) for (const s of [-1, 1]) onSkid(car.pos.x - cxh * 1.4 + czh * s * 0.8, car.pos.y + 0.1, car.pos.z - czh * 1.4 - cxh * s * 0.8);
        car.circles[0].x = car.pos.x + cxh * 1.2; car.circles[0].z = car.pos.z + czh * 1.2; car.circles[1].x = car.pos.x - cxh * 1.2; car.circles[1].z = car.pos.z - czh * 1.2;
      }
    },
  };
}
