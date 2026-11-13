// Five game tool rigs with model-specific ammunition and cooling animations.
import * as THREE from "./wl80-r3-three-three.module.js";
import { RoundedBoxGeometry } from "./wl80-r3-three-geometries-RoundedBoxGeometry.js";
import { toolIconTexture } from "./wl80-r3-game-tool-icons.js";

export const CARDS = [
  { name: 'Codex', model: 'Astra 6', sub: '精准穿透', tokens: 480, hex: 0x8ec8ff, rate: .68, heat: 21, spread: 0, kick: 1.8, ray: true, sight: 'scope' },
  { name: 'Claude Code', model: 'Fable 5.1', sub: '重型单发', tokens: 720, hex: 0xffa87b, rate: .88, heat: 27, spread: .002, kick: 2.3, sight: 'scope' },
  { name: 'DeepSeek Harness', model: 'DeepSeek V4.1 Flash', sub: '高速连发', tokens: 120, hex: 0x527dff, rate: .085, heat: 2.8, auto: true, spread: .012, kick: .42, sight: 'osight' },
  { name: 'WorkBuddy', model: '混元 Hy3', sub: '五路并发', tokens: 120, pellets: 5, hex: 0x69dba7, rate: .58, heat: 14, spread: .043, kick: 1.4, sight: 'reflex' },
  { name: 'Cursor', model: 'Composer 2.5', sub: '稳定连发', tokens: 190, hex: 0xc2a9ff, rate: .14, heat: 4.2, auto: true, spread: .006, kick: .55, sight: 'osight' },
];

export function sightMode(def) { return def.sight; }

function makeTool(M, def, index) {
  const g = new THREE.Group();
  const icon = new THREE.Group();
  icon.name = 'Tool icon';
  g.add(icon);
  const rgb = new THREE.MeshStandardMaterial({ color: 0, emissive: def.hex, emissiveIntensity: 1 });
  const core = new THREE.MeshStandardMaterial({ color: 0, emissive: def.hex, emissiveIntensity: 0 });
  const add = (parent, geometry, material, x, y, z) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z); parent.add(mesh); return mesh;
  };
  const plate = new THREE.MeshStandardMaterial({ color: [0xc6cff1, 0xc3795d, 0xeaf0ff, 0x13937b, 0x282e39][index], roughness: .4 });
  add(icon, new RoundedBoxGeometry(.18, .036, .18, 4, .016), plate, 0, 0, 0);
  add(icon, new RoundedBoxGeometry(.169, .009, .169, 3, .004), plate, 0, .017, 0);
  const texture = new THREE.CanvasTexture(toolIconTexture(index, () => { texture.needsUpdate = true; }));
  texture.colorSpace = THREE.SRGBColorSpace;
  const face = add(icon, new THREE.PlaneGeometry(.164, .164), new THREE.MeshBasicMaterial({
    map: texture, transparent: true, toneMapped: false,
  }), 0, .022, 0);
  face.rotation.x = -Math.PI / 2;
  add(g, new RoundedBoxGeometry(.047, .085, .049, 3, .009), M.shroud, 0, -.055, .027).rotation.x = -.22;
  add(g, new RoundedBoxGeometry(.065, .025, .029, 3, .006), M.shroud, 0, .002, -.093);
  add(g, new THREE.BoxGeometry(.044, .007, .003), core, 0, .004, -.109);
  add(g, new THREE.BoxGeometry(.003, .006, .058), rgb, .091, 0, .025);
  const muzzle = new THREE.Object3D(); muzzle.position.set(0, .004, -.113); g.add(muzzle);
  return { g, rgb, core, muzzle, def, temp: 38, throttled: false, cool: 0 };
}

function mountRedDot(card, M) {
  const { g } = card;
  const mount = new THREE.Group();
  mount.name = 'Mounted red dot';
  mount.position.set(0, .025, -.050);
  g.add(mount);
  const add = (geo, material, x, y, z) => {
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(x, y, z);
    mount.add(mesh);
    return mesh;
  };
  add(new RoundedBoxGeometry(.081, .016, .065, 2, .004), M.steel, 0, .008, 0);
  for (const x of [-.028, .028]) add(new THREE.BoxGeometry(.013, .012, .055), M.shroud, x, .002, 0);
  const outline = (shape, width, bottom, top, bevel) => {
    const x = width / 2;
    shape.moveTo(-x, bottom); shape.lineTo(x, bottom); shape.lineTo(x, top - bevel);
    shape.lineTo(x - bevel, top); shape.lineTo(-x + bevel, top); shape.lineTo(-x, top - bevel); shape.closePath();
    return shape;
  };
  const hood = outline(new THREE.Shape(), .084, .013, .081, .012);
  hood.holes.push(outline(new THREE.Path(), .069, .021, .074, .009));
  add(new THREE.ExtrudeGeometry(hood, { depth: .032, bevelEnabled: false }), M.shroud, 0, 0, -.016);
  const lens = outline(new THREE.Shape(), .069, .021, .074, .009);
  add(new THREE.ShapeGeometry(lens), new THREE.MeshBasicMaterial({
    color: 0x78bcc4, transparent: true, opacity: .095, depthWrite: false, side: THREE.DoubleSide,
  }), 0, 0, -.006);
  const reticle = new THREE.Group();
  reticle.name = 'Red dot reticle';
  reticle.position.set(0, .0475, .002);
  mount.add(reticle);
  const red = new THREE.MeshBasicMaterial({ color: 0xff5159, toneMapped: false, side: THREE.DoubleSide });
  reticle.add(new THREE.Mesh(new THREE.RingGeometry(.0051, .00555, 40), red));
  const dot = new THREE.Mesh(new THREE.CircleGeometry(.00068, 20), red);
  dot.position.z = .0003; reticle.add(dot);
  reticle.visible = false;
  return reticle;
}

export function createWeapons(camera, M) {
  const root = new THREE.Group(); camera.add(root);
  const cards = CARDS.map((d, index) => {
    const c = makeTool(M, d, index);
    if (sightMode(d) === 'osight') c.reticle = mountRedDot(c, M);
    c.g.visible = false; root.add(c.g); return c;
  });
  // muzzle flash sprite (drawn on a canvas) + light
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const x = cv.getContext('2d'); x.translate(64, 64);
  for (let i = 0; i < 10; i++) { x.rotate(0.4 + Math.random()); const l = 28 + Math.random() * 34, gr = x.createLinearGradient(0, 0, l, 0); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.beginPath(); x.moveTo(0, -6); x.lineTo(l, 0); x.lineTo(0, 6); x.fill(); }
  const rg = x.createRadialGradient(0, 0, 0, 0, 0, 30); rg.addColorStop(0, 'rgba(255,255,255,1)'); rg.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = rg; x.fillRect(-64, -64, 128, 128);
  const flash = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.26), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  flash.visible = false; camera.add(flash);
  const light = new THREE.PointLight(0xffffff, 0, 14, 2); light.position.set(0, 0, -0.9); camera.add(light);

  const HIP = new THREE.Vector3(0.12, -0.145, -0.34), ADS = new THREE.Vector3(0.02, -0.105, -0.3), sightPose = new THREE.Vector3();
  const W = { cards, cur: 0, next: 0, swap: 0, recoil: 0, flashT: 0, adsT: 0, sway: new THREE.Vector2(), flash, light, root,
    get card() { return cards[W.cur]; },
    select(i) { if (i !== W.next && cards[i]) { W.next = i; W.swap = 0.36; } },
    kick() { const c = W.card; W.recoil = Math.min(W.recoil + c.def.kick, 3); W.flashT = c.def.ray ? 0.12 : 0.04; flash.material.color.set(c.def.hex).multiplyScalar(c.def.ray ? 9 : 5); light.color.set(c.def.hex); flash.rotation.z = Math.random() * 6.3; flash.scale.setScalar((0.7 + Math.random() * 0.5) * (c.def.ray ? 2 : 1)); },
    update(dt, s) { // s: {ads, bobX, bobY, mdx, mdy, t, vy}
      const k = (a, b, r) => a + (b - a) * (1 - Math.exp(-r * dt));
      if (W.swap > 0) { W.swap -= dt; if (W.swap < 0.18 && W.cur !== W.next) W.cur = W.next; }
      const drop = W.swap > 0 ? Math.sin(Math.min(1, W.swap / 0.36) * Math.PI) : 0;
      cards.forEach((c, i) => {
        c.g.visible = i === W.cur;
        if (s.submerged && !c.def.waterproof) {
          c.rgb.emissiveIntensity = c.core.emissiveIntensity = 0;
          return;
        }
        const heat = Math.min(1, Math.max(0, (c.temp - 38) / 57));
        c.rgb.emissive.set(c.def.hex).lerp(new THREE.Color(0xff2a08), heat * heat);      // light bar shifts red as it cooks
        c.rgb.emissiveIntensity = c.throttled ? 2 + 4 * Math.abs(Math.sin(s.t * 9)) : 3 + heat * 3;
        c.core.emissiveIntensity = k(c.core.emissiveIntensity, 0.4 + heat * 2, 6);
      });
      const c = W.card; W.adsT = k(W.adsT, s.ads ? 1 : 0, 16); W.recoil = k(W.recoil, 0, 10);
      W.sway.x = k(W.sway.x, -s.mdx * 0.0006, 10); W.sway.y = k(W.sway.y, s.mdy * 0.0006, 10);
      const hip = 1 - W.adsT, g = c.g;
      g.position.lerpVectors(HIP, ADS, W.adsT);
      g.position.x += (W.sway.x + s.bobX * 0.5) * hip; g.position.y += (W.sway.y - s.bobY * 0.4) * hip - drop * 0.3 - Math.max(0, -s.vy) * 0.004;
      g.position.z += W.recoil * 0.022;
      g.rotation.set(W.recoil * 0.03 * (0.4 + hip) + W.sway.y * 1.5 + .34 * hip - drop * 0.8, 0.07 * hip + W.sway.x * 2 * hip, (.24 + .2 * W.adsT) - W.sway.x * 1.2 * hip);
      if (c.reticle) {
        sightPose.set(0, -c.reticle.parent.position.y - c.reticle.position.y, -.24 + W.recoil * .007);
        g.position.lerp(sightPose, W.adsT);
        g.rotation.x *= hip; g.rotation.y *= hip; g.rotation.z *= hip;
        c.reticle.visible = W.adsT > .8 && !s.submerged;
      }
      W.flashT -= dt; flash.visible = W.flashT > 0; light.intensity = W.flashT > 0 ? (c.def.ray ? 160 : 50) : 0;
      if (flash.visible) { c.muzzle.getWorldPosition(flash.position); camera.worldToLocal(flash.position); if (W.flashT > 0.02) c.core.emissiveIntensity = 30; }
    },
  };
  return W;
}
