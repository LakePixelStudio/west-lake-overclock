import * as THREE from "./wl80-r3-three-three.module.js";
import { EffectComposer } from "./wl80-r3-three-postprocessing-EffectComposer.js";
import { RenderPass } from "./wl80-r3-three-postprocessing-RenderPass.js";
import { GTAOPass } from "./wl80-r3-three-postprocessing-GTAOPass.js";
import { UnrealBloomPass } from "./wl80-r3-three-postprocessing-UnrealBloomPass.js";
import { OutputPass } from "./wl80-r3-three-postprocessing-OutputPass.js";
import { SMAAPass } from "./wl80-r3-three-postprocessing-SMAAPass.js";
import { ShaderPass } from "./wl80-r3-three-postprocessing-ShaderPass.js";
import { RoundedBoxGeometry } from "./wl80-r3-three-geometries-RoundedBoxGeometry.js";
import { makeMats, signTexture } from "./wl80-r3-game-mats.js";
import { buildEnv, SUN, FOG, FOG_COLOR } from "./wl80-r3-game-env.js";
import { buildWorld } from "./wl80-r3-game-world.js";
import { buildScenery } from "./wl80-r3-game-scenery.js";
import { buildCity } from "./wl80-r3-game-city.js";
import { buildStreet } from "./wl80-r3-game-street.js";
import { buildPower, makeRam } from "./wl80-r3-game-power.js";
import { createWeapons, sightMode } from "./wl80-r3-game-weapons.js";
import { createDefense } from "./wl80-r3-game-defense.js";
import { createScope } from "./wl80-r3-game-scope.js";
import { createEnergyProps } from "./wl80-r3-game-energy-props.js";
import { createCars } from "./wl80-r3-game-vehicle.js";
import { createTransit } from "./wl80-r3-game-transit.js";
import { createZiplines } from "./wl80-r3-game-zipline.js";
import { createUI } from "./wl80-r3-game-ui.js";
import { initAudio, sfx, hum } from "./wl80-r3-game-audio.js";
import { createBattle } from "./wl80-r3-game-bots.js";
import { TEAMS } from "./wl80-r3-game-teams.js";
import { LAND_Y, groundY, walkable, POI, discInPoly, pipFlat } from "./wl80-r3-game-geo.js";

const $ = (id) => document.getElementById(id);
const hudValues = new Map();
function updateHud(id, value, property = 'textContent') {
  if (hudValues.get(id) === value) return;
  $(id)[property] = value;
  hudValues.set(id, value);
}
const rand = (a, b) => a + Math.random() * (b - a);
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));

let renderer;
try { renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' }); }
catch (firstError) {
  try { renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'default' }); }
  catch { throw new Error('WebGL 2 不可用。请在新版 Chrome 或 Edge 中打开，并开启图形加速。', { cause: firstError }); }
}
let quality = 'performance';
function renderScale() {
  return quality === 'high' ? Math.min(devicePixelRatio, 2)
    : Math.min(devicePixelRatio, 1, Math.sqrt(680000 / (innerWidth * innerHeight)));
}
renderer.setPixelRatio(renderScale()); renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.46; // applied by OutputPass
document.body.prepend(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.08, 16000);
camera.rotation.order = 'YXZ'; scene.add(camera);
const fx = new THREE.Group(); scene.add(fx); // additive / transparent effects, hidden from the AO pass

let M, env, world, zones, W, cars, transit, ziplines, rooftops, ui, scope, energyProps, driving = null, composer, film, started = false;
const qualityPasses = [];
const SPAWN = [-18, 96], POWER = [-1900, -3133]; // Hubin promenade by the music fountain; energy site west of Yanggongdi
const AIM_FOV = { scope: 35, reflex: 55, osight: 66 };

// ---------------------------------------------------------------- player + collision
const player = { pos: new THREE.Vector3(SPAWN[0], LAND_Y, SPAWN[1]), vel: new THREE.Vector3(), yaw: -0.3, pitch: 0.03, hp: 100, onGround: true, swimming: false, lastHurt: -99, bob: 0, tokensHit: 0, defense: createDefense() };
const R = 0.38, EYE = 1.68, SWIM_Y = -1.23, SWIM_SPEED = 2.65;
function blocked(x, y, z, allowWater = false) {
  if (!allowWater && !walkable(x, z)) return true;
  const n = world.near(x, z);
  for (const b of n.boxes) if (x > b.min.x - R && x < b.max.x + R && z > b.min.z - R && z < b.max.z + R && b.max.y > y + 0.35 && b.min.y < y + 1.75) return true;
  const nearGround = y < groundY(x, z) + 3;
  if (nearGround) for (const c of n.circles) if (Math.hypot(x - c.x, z - c.z) < c.r + R) return true;
  for (const p of n.polys) if (y < p.h && discInPoly(p.pts, x, z, R)) return true;
  if (nearGround) for (const c of world.dyn) if (Math.hypot(x - c.x, z - c.z) < c.r + R) return true;
  return false;
}
function groundAt(x, y, z) {
  let g = groundY(x, z);
  for (const b of world.near(x, z).boxes) if (x > b.min.x - R * 0.5 && x < b.max.x + R * 0.5 && z > b.min.z - R * 0.5 && z < b.max.z + R * 0.5 && b.max.y <= y + 0.35) g = Math.max(g, b.max.y);
  return g;
}
const keys = {}; let locked = false, touchPlay = false, unlockedPlay = false, lockPending = false, lockTimer, firing = false, trig = false, ads = false, mdx = 0, mdy = 0;
const playing = () => locked || touchPlay || unlockedPlay;
const look = (dx, dy) => {
  const s = 0.0021 * (ads ? AIM_FOV[sightMode(W.card.def)] / 72 : 1);
  player.yaw -= dx * s; player.pitch = Math.max(-1.5, Math.min(1.5, player.pitch - dy * s)); mdx += dx; mdy += dy;
};
addEventListener('keydown', (e) => { keys[e.code] = true; if (unlockedPlay && e.code.startsWith('Arrow')) e.preventDefault();
  if (unlockedPlay && e.code === 'Escape' && !e.repeat) { pauseUnlocked(); return; }
  if (!playing() || e.repeat) return; if (/^Digit[1-5]$/.test(e.code)) W.select(+e.code[5] - 1); if (e.code === 'KeyE') use(); if (e.code === 'KeyF' && driving) toggleFsd(); if (e.code === 'KeyT') traceNextTeam(); });
addEventListener('keyup', (e) => { keys[e.code] = false; });
addEventListener('keydown', (e) => { if (e.code === 'KeyP' && !e.repeat && started) setQuality(quality === 'high' ? 'performance' : 'high'); });
addEventListener('wheel', (e) => { if (locked || unlockedPlay) W.select((W.next + (e.deltaY > 0 ? 1 : W.cards.length - 1)) % W.cards.length); });
addEventListener('mousemove', (e) => { if (locked || (unlockedPlay && e.target === renderer.domElement)) look(e.movementX, e.movementY); });
addEventListener('mousedown', (e) => { if (!locked && !(unlockedPlay && e.target === renderer.domElement)) return; if (e.button === 0) firing = trig = true; if (e.button === 2) ads = true; });
addEventListener('mouseup', (e) => { if (e.button === 0) firing = false; if (e.button === 2) ads = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
const overlay = $('overlay');
const deploy = $('deploy');
function clearLockRequest() {
  lockPending = false;
  clearTimeout(lockTimer);
}
function enterUnlocked() {
  if (!lockPending || locked || player.hp <= 0) return;
  clearLockRequest();
  unlockedPlay = true;
  overlay.style.display = 'none';
  note('鼠标锁定不可用 · 移动鼠标或方向键转向 · Esc 暂停');
}
function pauseUnlocked() {
  if (!unlockedPlay) return;
  unlockedPlay = false;
  for (const key of Object.keys(keys)) keys[key] = false;
  firing = trig = ads = false;
  scope?.update({ visible: false });
  overlay.style.display = 'flex';
  $('msg').textContent = '已暂停，点击继续';
  deploy.textContent = '继续比赛';
}
const start = () => {
  if (!started || playing() || lockPending) return;
  try { initAudio(); } catch (error) { console.warn('Audio unavailable; continuing without audio', error); }
  if (player.hp <= 0) resetGame();
  setTimeout(() => { cars.loadAssets(); transit.loadAssets(); }, 750);
  if (ui.touch) {
    touchPlay = true; overlay.style.display = 'none';
    try { document.documentElement.requestFullscreen?.()?.catch(() => {}); } catch {}
    return;
  }
  lockPending = true;
  lockTimer = setTimeout(enterUnlocked, 900);
  try {
    const request = renderer.domElement.requestPointerLock;
    if (!request) enterUnlocked();
    else request.call(renderer.domElement)?.catch(enterUnlocked);
  } catch { enterUnlocked(); }
};
overlay.addEventListener('click', start);
overlay.addEventListener('keydown', (e) => {
  if (e.target === overlay && (e.code === 'Enter' || e.code === 'Space')) { e.preventDefault(); start(); }
});
document.addEventListener('pointerlockerror', enterUnlocked);
document.addEventListener('pointerlockchange', () => {
  const wasLocked = locked;
  locked = document.pointerLockElement === renderer.domElement;
  if (ui.touch) return;
  if (locked) { clearLockRequest(); unlockedPlay = false; overlay.style.display = 'none'; return; }
  if (!wasLocked) return;
  for (const key of Object.keys(keys)) keys[key] = false;
  firing = trig = ads = false; scope?.update({ visible: false }); overlay.style.display = 'flex';
  if (player.hp > 0) { $('msg').textContent = '已暂停，点击继续'; deploy.textContent = '继续比赛'; }
});
addEventListener('blur', () => {
  for (const key of Object.keys(keys)) keys[key] = false;
  firing = trig = ads = false;
  if (unlockedPlay) pauseUnlocked();
});
let noteT = 0; const note = (s) => { $('note').textContent = s; $('note').style.opacity = 1; noteT = 3; };

// E: finish the active ride or use a nearby station, pier, or car.
function use() {
  if (ziplines.riding) return ziplines.key(player);
  if (transit.riding || transit.indoors) return transit.key(player);
  if (driving) { const c = driving, h = c.heading;
    if (Math.abs(c.v) > 3) return note('Slow down before getting out');
    for (const [side, forward] of [[1.9, 0], [-1.9, 0], [2.4, 0], [-2.4, 0], [1.9, 1.7], [-1.9, 1.7], [1.9, -1.7], [-1.9, -1.7], [0, -3.1], [0, 3.1]]) {
      const x = c.pos.x - Math.cos(h) * side - Math.sin(h) * forward, z = c.pos.z + Math.sin(h) * side - Math.cos(h) * forward;
      if (!blocked(x, c.pos.y, z) && !transit.surfaceBlocked(x, z)) { player.pos.set(x, groundY(x, z), z); player.vel.set(0, 0, 0); player.yaw = h; player.pitch = 0; cars.setFsd(c, false); driving = null; return; } }
    return note('No room to get out here'); }
  if (ziplines.key(player) || transit.key(player)) return;
  const c = !player.swimming && nearbyCarAt(player.pos);
  if (c && !c.visualReady) return note('车辆模型加载中…');
  if (c) {
    driving = c;
    const mode = c.type.id === 'tesla' ? (ui.touch ? '点 FSD 按钮开启模拟' : '按 F 开启 FSD 模拟') : '手动驾驶';
    note(c.type.name + ' · ' + mode);
  }
}
function nearbyCarAt(p) {
  const car = cars.nearest(p, 3.6);
  return car && Math.abs(car.pos.y - p.y) < 2 ? car : null;
}
function toggleFsd() {
  if (!driving) return false;
  const enabled = !driving.auto;
  if (!cars.setFsd(driving, enabled)) { note('FSD 模拟仅可在 Tesla Model 3 使用'); return false; }
  note(enabled ? 'FSD 模拟已开启 · 操作方向、油门或刹车可接管' : '已退出 FSD · 手动驾驶');
  return enabled;
}

// ---------------------------------------------------------------- pooled effects
const SP = 1600, spPos = new Float32Array(SP * 3).fill(-99), spCol = new Float32Array(SP * 3), spVel = new Float32Array(SP * 3), spLife = new Float32Array(SP);
let spI = 0, sparks, decals = [], decalI = 0, tracers = [], tracerI = 0, beam, boomLight, lampLights = [];
const energyWaves = [];
function buildFx() {
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(spPos, 3).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('color', new THREE.BufferAttribute(spCol, 3).setUsage(THREE.DynamicDrawUsage));
  sparks = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.06, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); sparks.frustumCulled = false; fx.add(sparks);
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), rg = x.createRadialGradient(32, 32, 2, 32, 32, 30);
  rg.addColorStop(0, 'rgba(0,0,0,1)'); rg.addColorStop(0.3, 'rgba(10,8,8,.9)'); rg.addColorStop(0.55, 'rgba(30,26,24,.45)'); rg.addColorStop(1, 'rgba(40,38,36,0)'); x.fillStyle = rg; x.fillRect(0, 0, 64, 64);
  const dm = new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, roughness: 1, polygonOffset: true, polygonOffsetFactor: -8, polygonOffsetUnits: -8 });
  for (let i = 0; i < 90; i++) { const d = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.16), dm); d.visible = false; fx.add(d); decals.push(d); }
  const tg = new THREE.CylinderGeometry(1, 1, 1, 8).rotateX(Math.PI / 2), tm = () => new THREE.MeshBasicMaterial({ transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  for (let i = 0; i < 10; i++) { const t = new THREE.Mesh(tg, tm()); t.visible = false; t.userData.life = 0; fx.add(t); tracers.push(t); }
  beam = new THREE.Mesh(tg, tm()); beam.visible = false; beam.userData.life = 0; fx.add(beam);
  boomLight = new THREE.PointLight(0xff7a30, 0, 30, 2); scene.add(boomLight);
  const wave = new THREE.RingGeometry(0.9, 1, 48).rotateX(-Math.PI / 2);
  for (let i = 0; i < 4; i++) {
    const mesh = new THREE.Mesh(wave, new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
    mesh.visible = false; fx.add(mesh); energyWaves.push({ mesh, age: 1, radius: 0 });
  }
  for (let i = 0; i < 4; i++) { const l = new THREE.PointLight(0xffb870, 10, 20, 2); scene.add(l); lampLights.push(l); } // roam to the nearest lamp posts
}
function burst(p, n, count, speed, r, g, b) {
  for (let i = 0; i < count; i++) {
    const j = (spI = (spI + 1) % SP) * 3;
    spPos[j] = p.x; spPos[j + 1] = p.y; spPos[j + 2] = p.z;
    spVel[j] = (n.x * 0.8 + rand(-1, 1)) * speed * Math.random(); spVel[j + 1] = (n.y * 0.8 + rand(-0.6, 1.2)) * speed * Math.random(); spVel[j + 2] = (n.z * 0.8 + rand(-1, 1)) * speed * Math.random();
    spCol[j] = r; spCol[j + 1] = g; spCol[j + 2] = b; spLife[spI] = rand(0.25, 0.9);
  }
}
function streak(mesh, a, b, radius, color, k, life) { mesh.position.copy(a).lerp(b, 0.5); mesh.lookAt(b); mesh.scale.set(radius, radius, a.distanceTo(b)); mesh.material.color.set(color).multiplyScalar(k); mesh.visible = true; mesh.userData.life = mesh.userData.max = life; mesh.userData.r = radius; }
const up = new THREE.Vector3(0, 1, 0), skidP = new THREE.Vector3(); let skidT = 0;
const onSkid = (x, y, z) => { burst(skidP.set(x, y, z), up, 2, 1.6, 0.42, 0.42, 0.42); if (skidT <= 0) { sfx.skid(); skidT = 0.09; } }; // tyre smoke

let battle, tracedTeam = 0, trackedSquad = null;
function traceNextTeam() {
  if (!playing() || player.hp <= 0) return;
  const enemies = TEAMS.flatMap((_, team) => {
    const marker = team && battle.trace(team);
    return marker ? [{ team, marker }] : [];
  });
  if (!enemies.length) return;
  const current = enemies.findIndex(({ team }) => team === tracedTeam);
  const closest = (a, b) => Math.hypot(a.marker.x - player.pos.x, a.marker.z - player.pos.z) <
    Math.hypot(b.marker.x - player.pos.x, b.marker.z - player.pos.z) ? a : b;
  const { team, marker } = current < 0 ? enemies.reduce(closest) : enemies[(current + 1) % enemies.length];
  tracedTeam = team; trackedSquad = marker;
  note(`反垄断追踪 · 已锁定 ${marker.label}`);
}

// ---------------------------------------------------------------- Defense pickups
const rams = [];
function buildRam() {
  for (const [x, z] of [[-100, 138], [40, 46], [300, -984], [-10, -1228], [-1100, -2152], [-2142, -1868], [-2600, -695], [-8, 244], [79, 339.5], [600, -745], [POWER[0] - 70, POWER[1] + 61], [POWER[0] + 95, POWER[1] + 61], [-1283, -120], [-1904, -2940]]) {
    const r = makeRam(M); r.group.position.set(x, groundY(x, z) + 1.15, z); r.group.scale.setScalar(0.62); scene.add(r.group); rams.push({ ...r, x, z, respawn: 0 });
  }
}

const gpuPickups = [];
function buildGpuPickups() {
  for (const [x, z] of [[-28, 110], [140, 180], [-80, 255], [POWER[0] + 26, POWER[1] + 48]]) {
    const group = new THREE.Group();
    group.position.set(x, groundY(x, z) + .73, z);
    const shell = new THREE.Mesh(new RoundedBoxGeometry(.72, .34, .15, 3, .035), M.shroud);
    const strip = new THREE.Mesh(new THREE.BoxGeometry(.65, .035, .015), M.emit(0x62d8ff, 2.2));
    strip.position.set(0, .1, .083);
    group.add(shell, strip);
    const name = signTexture([{ text: 'GPU' }], { w: 256, h: 96 });
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(.38, .1425), new THREE.MeshBasicMaterial({ map: name, side: THREE.DoubleSide }));
    plate.position.z = .083; group.add(plate);
    scene.add(group); gpuPickups.push(group);
  }
}

// ---------------------------------------------------------------- shooting
const ray = new THREE.Raycaster(), v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), v3 = new THREE.Vector3(), v4 = new THREE.Vector3();
const TOKENS_PER_HP = 10;
let lastTokenHit = -Infinity, recentTokens = 0, lastHitModel;
function countTokens(tokens, model) {
  player.tokensHit += tokens;
  recentTokens = model === lastHitModel && now - lastTokenHit < .22 ? recentTokens + tokens : tokens;
  lastTokenHit = now; lastHitModel = model;
  $('token-hit').textContent = `+${recentTokens.toLocaleString('en-US')} Token · ${model}`;
  $('token-hit').style.opacity = 1;
}
const hitMark = () => { const h = $('hit'); h.style.transition = 'none'; h.style.opacity = 1; requestAnimationFrame(() => { h.style.transition = 'opacity .25s'; h.style.opacity = 0; }); };
function shotRay(c, d, col, dmg, sp) { // one hitscan ray: robots first, then walls or water
  v1.set(rand(-sp, sp), rand(-sp, sp), -1).normalize().transformDirection(camera.matrixWorld);
  ray.set(camera.getWorldPosition(v2), v1); ray.far = 600;
  const solid = ray.intersectObject(world.solids, true)[0], tW = v1.y < 0 ? -v2.y / v1.y : Infinity;
  const far = Math.min(solid ? solid.distance : 600, tW), end = v2.clone().addScaledVector(v1, far);
  ray.far = far; const seen = new Set(); let stop = null;
  for (const h of battle.shotHits(ray)) { const b = h.object.userData.bot; if (seen.has(b)) continue; seen.add(b);
    if (battle.damage(b, dmg, battle.me)) countTokens(d.tokens, d.model);
    burst(h.point, v3.copy(v1).negate(), 12, 4, 1.6, 0.9, 0.3); sfx.hit(); hitMark();
    if (!d.ray) { stop = h.point; break; }
  }
  c.muzzle.getWorldPosition(v3);
  if (d.ray) streak(beam, v3, end, 0.035, col, 9, 0.28); else streak(tracers[tracerI = (tracerI + 1) % tracers.length], v3, stop || end, 0.006, col, 7, 0.05);
  if (stop) return;
  if (tW < (solid ? solid.distance : 600)) { burst(end, v3.set(0, 1, 0), d.ray ? 60 : 16, 4, 0.5, 0.6, 0.7); sfx.splash(); return; }
  if (!solid) return;
  const prop = solid.object.userData.energyProp;
  if (prop) {
    if (!energyProps.hit(prop, dmg, battle.me)) {
      burst(end, v3.copy(v1).negate(), 12, 4, 0.4, 1.6, 2.2);
      sfx.impact();
    }
    hitMark();
    return;
  }
  const n = solid.face ? v3.copy(solid.face.normal).transformDirection(solid.object.matrixWorld) : v3.copy(v1).negate();
  burst(end, n, d.ray ? 50 : 10, d.ray ? 7 : 3.5, col.r * 2, col.g * 2, col.b * 2); burst(end, n, 6, 1.2, 0.15, 0.15, 0.15); sfx.impact();
  const dc = decals[decalI = (decalI + 1) % decals.length]; dc.position.copy(end).addScaledVector(n, 0.02); dc.lookAt(v4.copy(end).add(n)); dc.rotateZ(rand(0, 6.3)); dc.scale.setScalar(rand(0.7, 1.2) * (d.ray ? 3 : 1)); dc.visible = true;
}
function fire(c) {
  if (player.swimming && !c.def.waterproof) return;
  const d = c.def, col = new THREE.Color(d.hex), dmg = d.tokens / TOKENS_PER_HP;
  c.temp += d.heat; c.cool = d.rate; W.kick(); (sfx.shot[W.cur] || sfx.shot[W.cur % 3])();
  player.pitch += d.kick * 0.008 + Math.random() * 0.003; player.yaw += rand(-0.004, 0.004) * d.kick;
  const moving = Math.hypot(player.vel.x, player.vel.z) > 1, sp = d.spread * (ads ? 0.3 : moving ? 2 : 1);
  for (let i = 0; i < (d.pellets || 1); i++) shotRay(c, d, col, dmg, sp);
}
function endMatch(text) { $('msg').textContent = `${text} ${ui.touch ? '点击屏幕' : '点击'}再来一局`; player.hp = 0; touchPlay = unlockedPlay = false; clearLockRequest(); deploy.textContent = '再来一局'; scope.update({ visible: false }); overlay.style.display = 'flex'; document.exitPointerLock?.(); }
function hurt(dmg) {
  if (player.hp <= 0 || transit.safe) return;
  const damage = player.defense.absorb(dmg * (driving ? .5 : 1), !player.swimming);
  player.hp -= damage; player.lastHurt = now; film.uniforms.hurt.value = 1; sfx.hurt();
  if (player.hp <= 0) endMatch(`你被淘汰了 · 击倒 ${battle.me.kills} 个 · 还剩 ${battle.placing()} 支队伍。`);
}
function resetGame() {
  transit.reset();
  ziplines.reset();
  energyProps.reset();
  player.defense.reset();
  for (const group of gpuPickups) group.visible = true;
  for (const ram of rams) { ram.respawn = 0; ram.group.visible = true; }
  for (const wave of energyWaves) { wave.mesh.visible = false; wave.age = 1; }
  tracedTeam = 0; trackedSquad = null;
  firing = trig = ads = ui.fire = ui.aim = false;
  W.adsT = 0;
  player.swimming = false;
  cars.setFsd(driving, false);
  player.pos.set(SPAWN[0], LAND_Y, SPAWN[1]); player.vel.set(0, 0, 0); player.yaw = -0.3; player.pitch = 0.03; player.hp = 100; player.tokensHit = 0; lastTokenHit = -Infinity; recentTokens = 0; player.onGround = true; driving = null;
  for (const c of W.cards) { c.temp = 38; c.throttled = false; } battle.reset();
}

// ---------------------------------------------------------------- movement modes
let now = 0, stepT = 0, fps = 60, bobX = 0, bobY = 0;
function walk(dt, t) {
  const p = player.pos, f = (keys.KeyW ? 1 : 0) - (keys.KeyS ? 1 : 0) + ui.moveY, s = (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0) + ui.moveX, mag = Math.max(1, Math.hypot(f, s));
  const indoors = transit.indoors, wasSwimming = player.swimming;
  const sprint = !wasSwimming && (keys.ShiftLeft || ui.moveY > 0.92) && f > 0 && !ads;
  const sp = (wasSwimming ? SWIM_SPEED : ads ? 2.4 : sprint ? 7.4 : 4.5) / mag;
  const sy = Math.sin(player.yaw), cy = Math.cos(player.yaw), k = player.onGround ? 12 : wasSwimming ? 5 : 2.5;
  player.vel.x = damp(player.vel.x, (-sy * f + cy * s) * sp, k, dt); player.vel.z = damp(player.vel.z, (-cy * f - sy * s) * sp, k, dt);
  if (!indoors && keys.Space && player.onGround) { player.vel.y = 6.7; player.onGround = false; }
  const canWalk = (x, z) => {
    if (!indoors) {
      const y = wasSwimming && walkable(x, z) ? groundY(x, z) : p.y;
      return !blocked(x, y, z, true) && !transit.surfaceBlocked(x, z);
    }
    const floor = transit.floorAt(x, p.y, z);
    return floor !== null && Math.abs(floor - p.y) <= 0.35;
  };
  const nx = p.x + player.vel.x * dt; if (canWalk(nx, p.z)) p.x = nx; else player.vel.x = 0;
  const nz = p.z + player.vel.z * dt; if (canWalk(p.x, nz)) p.z = nz; else player.vel.z = 0;
  const overWater = !indoors && !walkable(p.x, p.z);
  player.swimming = false;
  if (indoors) {
    p.y = transit.floorAt(p.x, p.y, p.z) ?? p.y;
    player.vel.y = 0; player.onGround = true;
  } else {
    const previousY = p.y;
    player.vel.y -= 21 * dt;
    p.y += player.vel.y * dt;
    if (overWater) {
      player.swimming = wasSwimming || p.y <= 0;
      if (player.swimming) {
        p.y = damp(p.y, SWIM_Y, 10, dt); player.vel.y = 0;
      }
      player.onGround = false;
    } else {
      const gY = groundAt(p.x, player.vel.y < 0 ? previousY : p.y, p.z);
      if (p.y <= gY || (player.onGround && player.vel.y <= 0 && p.y - gY < 0.4)) { if (!wasSwimming && player.vel.y < -8) W.recoil += 0.8; p.y = gY; player.vel.y = 0; player.onGround = true; } else player.onGround = false;
    }
  }
  if (player.swimming !== wasSwimming) {
    if (player.swimming) {
      sfx.splash();
      burst(v4.set(p.x, 0.04, p.z), up, 22, 2.4, 0.48, 0.83, 1.15);
      note('已进入西湖 · 非防水电子装备离线');
    } else if (!indoors) note('已离开湖水 · 电子装备恢复');
  }
  const hs = Math.hypot(player.vel.x, player.vel.z), amp = Math.min(1, hs / 4);
  if (player.onGround && hs > 0.5) { player.bob += hs * dt * 1.9; stepT -= hs * dt; if (stepT < 0) { stepT = 2.3; sfx.step(); } }
  bobY = player.swimming ? Math.sin(t * 3.6) * 0.035 : Math.sin(player.bob * 2) * 0.022 * amp;
  bobX = player.swimming ? Math.sin(t * 2.8) * 0.016 : Math.cos(player.bob) * 0.014 * amp;
  camera.position.set(p.x, p.y + EYE + bobY, p.z); camera.rotation.set(player.pitch, player.yaw, bobX * 0.4);
  const targetFov = ads && (!player.swimming || W.card.def.waterproof) ? AIM_FOV[sightMode(W.card.def)] : sprint && !player.swimming ? 78 : 72;
  camera.fov = damp(camera.fov, targetFov, 14, dt); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
}
let orbit = 0;
function drive(dt) { // third-person chase camera; drag / mouse swings it round the car to enjoy the view
  const c = driving, back = 6.8 + Math.abs(c.v) * 0.07;
  player.pos.copy(c.pos); player.vel.set(c.vx, 0, c.vz); player.onGround = true; bobX = bobY = 0;
  orbit = damp(orbit + -mdx * 0.004, 0, Math.abs(mdx) > 0.5 ? 0 : 0.6, dt); const a = c.heading + orbit;
  v4.set(c.pos.x + Math.sin(a) * back, c.pos.y + 2.5 + Math.max(-1.2, Math.min(3, player.pitch * -3)), c.pos.z + Math.cos(a) * back);
  camera.position.lerp(v4, 1 - Math.exp(-7 * dt)); camera.lookAt(c.pos.x, c.pos.y + 1.2, c.pos.z);
  camera.fov = damp(camera.fov, 62 + Math.abs(c.v) * 0.55, 4, dt); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
}

// ---------------------------------------------------------------- per-frame game update (only while playing)
function update(dt, t) {
  const p = player.pos; skidT -= dt;
  if (unlockedPlay) look(((keys.ArrowRight ? 1 : 0) - (keys.ArrowLeft ? 1 : 0)) * 850 * dt,
    ((keys.ArrowDown ? 1 : 0) - (keys.ArrowUp ? 1 : 0)) * 650 * dt);
  if (ui.fsdTap) { ui.fsdTap = false; if (driving) toggleFsd(); }
  if (transit.safe) { firing = trig = ads = ui.fire = ui.aim = false; }
  else if (ui.touch) { firing = ui.fire; if (ui.fire && !W.card.def.auto && W.card.cool <= 0) trig = true; ads = ui.aim; }
  const thr = (keys.KeyW ? 1 : 0) - (keys.KeyS ? 1 : 0), steer = (keys.KeyA ? 1 : 0) - (keys.KeyD ? 1 : 0) - (Math.abs(ui.moveX) > 0.15 ? ui.moveX : 0);
  const fsdWasActive = driving?.auto;
  const manual = keys.KeyW || keys.KeyS || keys.KeyA || keys.KeyD || keys.Space || Math.abs(ui.moveX) > .15;
  cars.update(dt, driving, driving ? { thr, steer: Math.max(-1, Math.min(1, steer)), brake: !!keys.Space, manual } : null);
  if (fsdWasActive && !driving.auto) note('已接管 · 手动驾驶');
  const transitRide = transit.update(dt, player);
  const riding = ziplines.update(dt, player) || transitRide;
  const indoors = transit.indoors;
  if (driving || riding || indoors) {
    player.swimming = false;
    firing = trig = ads = ui.fire = ui.aim = false; W.adsT = 0;
  }
  if (!riding) { if (driving) drive(dt); else walk(dt, t); }
  const wetEquipment = player.swimming && !W.card.def.waterproof;
  const armed = !driving && !riding && !indoors && !wetEquipment;
  if (wetEquipment) {
    firing = trig = ads = ui.fire = ui.aim = false;
    W.adsT = W.flashT = 0;
  }
  env.water.visible = env.sun.visible = !transit.safe;

  const defense = player.defense, armorOnline = !player.swimming;
  const chargeZone = armorOnline && !transit.safe && zones.find((z) =>
    Math.abs(p.y - LAND_Y) < 3 && Math.hypot(p.x - z.x, p.z - z.z) < z.r);
  if (chargeZone) defense.recharge(18 * dt);
  for (const c of W.cards) {
    c.cool -= dt; c.temp = Math.max(38, c.temp - (c === W.card ? 13 : 22) * dt);
    if (c.temp >= 95 && !c.throttled) { c.throttled = true; sfx.throttle(); note('Thermal throttle'); } else if (c.throttled && c.temp < 66) c.throttled = false;
  }
  const c = W.card, want = c.def.auto ? firing : trig; trig = false;
  if (want && armed && W.swap <= 0 && c.cool <= 0 && !c.throttled) fire(c);
  W.update(dt, { ads, bobX, bobY, mdx, mdy, t, vy: player.vel.y, submerged: player.swimming }); mdx = mdy = 0;
  const mode = sightMode(W.card.def);
  W.root.visible = armed && (mode !== 'scope' || W.adsT < 0.78);
  W.flash.visible = armed && W.flash.visible;
  if (!armed) W.light.intensity = 0;
  scope.update({ visible: armed && mode !== 'osight' && player.hp > 0, amount: W.adsT, mode, recoil: W.recoil });
  const heat = (c.temp - 38) / 57, spd = driving ? Math.abs(driving.v) : 0; hum(wetEquipment ? 0 : driving ? 0.012 + spd * 0.0015 : riding ? 0.02 : 0.004 + heat * 0.05, driving ? 110 + spd * 42 : riding ? 140 : 160 + heat * 520);
  if (t - player.lastHurt > 5 && player.hp < 100) player.hp = Math.min(100, player.hp + 10 * dt);

  const canCollect = !transit.safe && !player.swimming && !riding;
  for (const ram of rams) {
    if (ram.respawn > 0) {
      ram.respawn -= dt; ram.group.visible = ram.respawn <= 0;
      continue;
    }
    if (canCollect && Math.abs(p.y + 1.15 - ram.group.position.y) < 2
      && Math.hypot(p.x - ram.x, p.z - ram.z) < (driving ? 2.6 : 1.5) && defense.addRam()) {
      ram.respawn = 25; ram.group.visible = false; sfx.pickup(); note('防御 RAM · ' + defense.ram + ' GB');
    }
  }
  for (const group of gpuPickups) {
    if (!group.visible) continue;
    group.rotation.y = t * 1.2;
    if (canCollect && Math.abs(p.y - group.position.y) < 1.5
      && Math.hypot(p.x - group.position.x, p.z - group.position.z) < 1.8 && defense.upgradeGpu()) {
      group.visible = false; sfx.pickup(); note('防御显卡已升级 · ' + defense.gpu.name);
    }
  }

  const aliveBy = battle.update(dt);
  if (battle.over === 'win' && player.hp > 0) endMatch(`胜利！${TEAMS[0].name}是最后的幸存队伍 · 你击倒 ${battle.me.kills} 个。`);

  // HUD (monitoring-overlay style)
  const tc = c.temp > 80 ? 'hot' : '', bar = (v) => '█'.repeat(Math.round(Math.max(0, Math.min(1, v)) * 12)).padEnd(12, '░');
  const nearbyCar = !driving && !indoors && !riding && !player.swimming ? nearbyCarAt(p) : null;
  const carPrompt = nearbyCar && (nearbyCar.visualReady ? 'E — 驾驶 ' + nearbyCar.type.name : '车辆模型加载中…');
  const prompt = driving ? '' : ziplines.prompt(p) || transit.prompt(p) || carPrompt || '';
  const fsdLine = driving?.auto ? '\n<span class="oc">FSD 模拟 · ' + driving.fsdStatus + '</span>'
    : driving?.type.id === 'tesla' && !ui.touch ? '\nF 开启 FSD 模拟' : '';
  const carLine = driving ? `${driving.type.name} · ${Math.abs(driving.v * 3.6).toFixed(0)} km/h${driving.slip > 3.2 ? ' <span class="hot">DRIFT</span>' : ''}${fsdLine}` : '—';
  const armorStatus = armorOnline ? Math.round(defense.reduction * 100) + '%' : '离线';
  updateHud('osd', `<b>防御 GPU</b> ${defense.gpu.name}\n<b>减伤</b> ${armorStatus} · <b>RAM</b> ${defense.ram} GB\n<b>能源盾</b> ${Math.ceil(defense.energy)} / ${defense.maxEnergy}${chargeZone ? ' <span class="oc">充电中</span>' : ''}\n<b>命中 TOKEN</b> ${player.tokensHit.toLocaleString('en-US')}\n<b>武器温度</b> <span class="${tc}">${c.temp.toFixed(0)}°C ${bar(heat)}</span>${c.throttled ? ' <span class="hot">过热</span>' : ''}\n<b>FPS</b> ${fps.toFixed(0)}\n<b>CAR</b> ${carLine}`, 'innerHTML');
  updateHud('hp', Math.ceil(player.hp)); $('hpb').style.width = player.hp + '%';
  updateHud('wname', c.def.name);
  updateHud('wsub', wetEquipment ? '湖水导电 · 装备离线'
    : `${c.def.model} · ${c.def.sub} · ${c.def.tokens} Token${c.def.pellets ? ' × ' + c.def.pellets : ' / 命中'}`);
  if (now - lastTokenHit > 1.2 && $('token-hit').style.opacity === '1') $('token-hit').style.opacity = 0;
  updateHud('slots', W.cards.map((x, i) => `<div class="${i === W.next ? 'on' : ''}">${i + 1} · ${x.def.name}${x.throttled ? ' — hot' : ''}</div>`).join(''), 'innerHTML');
  updateHud('top', prompt || (player.swimming ? '游泳中' : ''));
  const teamsLeft = aliveBy.filter(Boolean).length;
  const playersLeft = aliveBy.reduce((total, count) => total + count, 0);
  updateHud('battle-status', `${teamsLeft} 队 · ${playersLeft} 人 · ${TEAMS[0].name} ${aliveBy[0]} 人`);
  trackedSquad = tracedTeam ? battle.trace(tracedTeam) : null;
  const trackedDistance = trackedSquad && Math.round(Math.hypot(trackedSquad.x - p.x, trackedSquad.z - p.z));
  updateHud('trace-status', trackedSquad ? `${trackedSquad.label} · ${trackedSquad.count} 人 · ${trackedDistance} m`
    : tracedTeam ? `${TEAMS[tracedTeam].name} 已出局` : '未锁定公司');
  $('cross').style.opacity = armed ? Math.max(0, 1 - W.adsT * 2) : 0;
  if (noteT > 0 && (noteT -= dt) <= 0) $('note').style.opacity = 0;
  ui.mode(driving, riding, prompt, indoors, player.swimming, wetEquipment);
}
// ambient animation that keeps running behind the menu
let lampT = 0, mapT = 0;
const lampDistances = new Float64Array(4), nearestLamps = new Array(4);
function updateFx(dt, t) {
  for (const wave of energyWaves) {
    if (!wave.mesh.visible) continue;
    wave.age += dt * 2.8;
    wave.mesh.visible = wave.age < 1;
    wave.mesh.scale.setScalar(0.3 + wave.radius * wave.age);
    wave.mesh.material.opacity = 0.85 * Math.max(0, 1 - wave.age);
  }
  let changedParticles = false;
  const fade = Math.exp(-4 * dt), fadeGB = fade * fade;
  for (let i = 0; i < SP; i++) {
    if (spLife[i] <= 0) continue; spLife[i] -= dt; const j = i * 3;
    changedParticles = true;
    spVel[j + 1] -= 9.8 * dt; spPos[j] += spVel[j] * dt; spPos[j + 1] += spVel[j + 1] * dt; spPos[j + 2] += spVel[j + 2] * dt;
    spCol[j] *= fade; spCol[j + 1] *= fadeGB; spCol[j + 2] *= fadeGB; if (spLife[i] <= 0) spPos[j + 1] = -99;
  }
  if (changedParticles) sparks.geometry.attributes.position.needsUpdate = sparks.geometry.attributes.color.needsUpdate = true;
  for (let i = 0; i <= tracers.length; i++) {
    const tr = i === tracers.length ? beam : tracers[i];
    if (!tr.visible) continue;
    tr.userData.life -= dt;
    const q = tr.userData.life / tr.userData.max;
    if (q <= 0) tr.visible = false; else tr.scale.x = tr.scale.y = tr.userData.r * q;
  }
  boomLight.intensity = damp(boomLight.intensity, 0, 9, dt);
  for (const r of rams) { r.group.rotation.y = t * 1.2 + r.x; r.group.position.y = groundY(r.x, r.z) + 1.15 + Math.sin(t * 2 + r.z) * 0.08; r.rgb.emissive.setHSL((t * 0.25 + r.x * 0.01) % 1, 1, 0.5); }
  for (const fn of world.tick) fn(t);
  if ((lampT -= dt) <= 0 && world.lamps.length) { // hand the real lights to the nearest lamp posts
    lampT = 0.3;
    lampDistances.fill(Infinity);
    for (const lamp of world.lamps) {
      const distance = Math.hypot(lamp[0] - player.pos.x, lamp[1] - player.pos.z);
      let i = lampDistances.length - 1;
      if (distance >= lampDistances[i]) continue;
      for (; i > 0 && distance < lampDistances[i - 1]; i--) {
        lampDistances[i] = lampDistances[i - 1]; nearestLamps[i] = nearestLamps[i - 1];
      }
      lampDistances[i] = distance; nearestLamps[i] = lamp;
    }
    lampLights.forEach((l, i) => { const [x, z] = nearestLamps[i]; l.position.set(x, groundY(x, z) + 3.6, z); });
  }
  if ((mapT -= dt) <= 0) { mapT = 0.12; ui.drawMap({ x: player.pos.x, z: player.pos.z, yaw: driving ? driving.heading : player.yaw, fsd: driving?.auto, cars: cars.list, ferry: transit.ferry.position, rooftops, mates: battle.bots.filter((b) => b.alive && b.team === 0), trace: trackedSquad, hotspot: battle.hotspot }); }
  env.update(t, dt, camera.position.y < -10 ? player.pos : camera.position);
  film.uniforms.time.value = t; film.uniforms.hurt.value = damp(film.uniforms.hurt.value, player.hp < 35 ? 0.35 : 0, 3, dt);
}

// ---------------------------------------------------------------- post-processing
function buildPost() {
  const w = innerWidth, h = innerHeight;
  composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
  const gtao = new GTAOPass(scene, camera, w, h), gr = gtao.render.bind(gtao);
  gtao.render = (...a) => {
    const hidden = [fx, W.flash, env.water, ...world.noAO].filter((o) => o.visible);
    const { autoUpdate, needsUpdate } = renderer.shadowMap;
    for (const o of hidden) o.visible = false;
    // RenderPass already generated this frame's shadows; GTAO needs scene depth and normals only.
    renderer.shadowMap.autoUpdate = renderer.shadowMap.needsUpdate = false;
    try {
      gr(...a);
    } finally {
      renderer.shadowMap.autoUpdate = autoUpdate;
      renderer.shadowMap.needsUpdate = needsUpdate;
      for (const o of hidden) o.visible = true;
    }
  };
  const bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.05, 0.4, 4.0), smaa = new SMAAPass();
  qualityPasses.push(gtao, bloom, smaa);
  composer.addPass(gtao);
  composer.addPass(bloom);
  composer.addPass(new OutputPass()); composer.addPass(smaa);
  film = new ShaderPass({ uniforms: { tDiffuse: { value: null }, time: { value: 0 }, hurt: { value: 0 } },
    vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `uniform sampler2D tDiffuse;uniform float time,hurt;varying vec2 vUv;
      void main(){vec2 c=vUv-.5;float d=dot(c,c);vec2 o=c*d*.008;
        vec3 col=vec3(texture2D(tDiffuse,vUv+o).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-o).b);
        col*=1.-d*.7; float n=fract(sin(dot(gl_FragCoord.xy+fract(time)*91.7,vec2(12.9898,78.233)))*43758.5453); col+=(n-.5)*.02;
        col=mix(col,vec3(.55,0.,0.),clamp(hurt*d*3.,0.,.8)); gl_FragColor=vec4(col,1.);}` });
  composer.addPass(film);
}
function resize() {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  const scale = renderScale();
  renderer.setPixelRatio(scale); renderer.setSize(innerWidth, innerHeight);
  composer?.setPixelRatio(scale); composer?.setSize(innerWidth, innerHeight);
}
function setQuality(mode) {
  quality = mode;
  renderer.shadowMap.enabled = mode === 'high';
  if (mode === 'high' && !composer) buildPost();
  for (const pass of qualityPasses) pass.enabled = mode === 'high';
  env.setQuality(mode);
  resize();
  $('quality').textContent = mode === 'high' ? '画质 · 高' : '画质 · 流畅';
  try { localStorage.setItem('westlake-quality', mode); } catch {}
  if (started) note(mode === 'high' ? '已切换到高画质' : '已切换到流畅画质');
}
addEventListener('resize', resize);

// ---------------------------------------------------------------- boot
async function boot() {
  const stage = async (label) => {
    const status = $('msg');
    status.textContent = label;
    status.dataset.stage = label;
    await new Promise(resolve => setTimeout(resolve, 35));
  };
  await stage('正在生成西湖地形…');
  M = makeMats(renderer); env = buildEnv(scene, renderer); world = buildWorld(scene, M);
  await stage('正在生成湖滨街道和建筑…');
  rooftops = buildCity(world, { SUN, FOG, FOG_COLOR }); buildStreet(world);
  await stage('正在生成树木和远景…');
  buildScenery(world); // city first, so nothing gets planted inside a building
  // energy site (substation, battery storage, solar charging hub) on open ground west of Yanggongdi, with its own access road
  await stage('正在布置能源设施和交通…');
  const pw = buildPower(world.shifted(POWER[0], POWER[1]));
  zones = pw.zones.map((z) => ({ ...z, x: z.x + POWER[0], z: z.z + POWER[1] }));
  world.ribbon(world.dense([[-1904, -2956], [-1900, -3010], [-1900, -3072]]), 9, world.over(M.asphalt, 4), LAND_Y + 0.07);
  world.ribbon(world.dense([[-2030, -3078], [-1780, -3078]]), 12, world.over(M.asphalt, 4), LAND_Y + 0.07);
  const spots = [...pw.carSpots.slice(0, 3).map(([x, z, h]) => [x + POWER[0], z + POWER[1], h]),
    [-70, 128, 2.1, 'tesla'], [-66, 144, 2.1, 'byd'], [-6, 262, -1.57, 'toyota'], [140, 352, 3.14], [-640, 58, 1.2], [640, -690, 0.4], [-2725, -700, 1.4], [-1560, -2712, 0], [-2150, -1866, -1.3]];
  cars = createCars(world, spots, M, onSkid, {
    shaftAt: (x, z) => transit?.surfaceBlocked(x, z),
    actorAt: (x, z, y) => battle?.bots.some((b) => b.alive && Math.abs(b.pos.y - y) < 1.8 && (b.pos.x - x) ** 2 + (b.pos.z - z) ** 2 < 1.7 ** 2),
  });
  cars.update(0.016, null, null);
  ui = createUI({ keys, onLook: look, onUse: () => playing() && use(), onSwap: () => W.select((W.next + 1) % W.cards.length) });
  scope = createScope($('hud'));
  transit = createTransit(world, camera, (s) => { note(s); sfx.chime(); });
  ziplines = createZiplines(world, camera, rooftops, note);
  await stage('正在配置操作和画质…');
  W = createWeapons(camera, M); buildFx(); buildRam(); buildGpuPickups();
  film = {uniforms: {time: {value: 0}, hurt: {value: 0}}};
  setQuality(quality);
  $('quality').addEventListener('click', (e) => { e.stopPropagation(); setQuality(quality === 'high' ? 'performance' : 'high'); });
  $('trace-team').addEventListener('mousedown', (e) => e.stopPropagation());
  $('trace-team').addEventListener('click', traceNextTeam);
  energyProps = createEnergyProps(world, [
    { kind: 'bank', x: -10, z: 86, yaw: .25 },
    { kind: 'bank', x: 35, z: 245, yaw: 1.1 },
    { kind: 'pack', x: 25, z: 113, yaw: -.3 },
    { kind: 'pack', x: POWER[0] + 13, z: POWER[1] + 51, yaw: Math.PI / 2 },
  ], (prop, by) => {
    battle.explode(prop.center, by, prop.radius, prop.damage);
    const color = new THREE.Color(prop.color);
    burst(prop.center, up, 45, 8, color.r * 2, color.g * 2, color.b * 2);
    const wave = energyWaves.reduce((oldest, current) => current.age > oldest.age ? current : oldest);
    wave.age = 0; wave.radius = prop.radius;
    wave.mesh.position.copy(prop.center).setY(prop.group.position.y + 0.1);
    wave.mesh.scale.setScalar(0.3);
    wave.mesh.material.color.copy(color); wave.mesh.material.opacity = 0.85; wave.mesh.visible = true;
    if (by?.isPlayer) note(prop.name + ' · 已引爆');
  });
  await stage('正在准备 20 支队伍…');
  battle = createBattle({ scene, world, player, blocked, note, sfx, camera, hurtPlayer: hurt,
    canTargetPlayer: () => !transit.safe && player.pos.y - groundY(player.pos.x, player.pos.z) < 8,
    hitEnergyProps: (p, by, radius, damage) => {
      for (const prop of energyProps.list) {
        const distance = prop.center.distanceTo(p);
        if (prop.hp > 0 && distance < radius) energyProps.hit(prop, damage * (1 - distance / (radius + 1)), by);
      }
    },
    tracer: (a, b, hex) => streak(tracers[tracerI = (tracerI + 1) % tracers.length], a, b, 0.012, new THREE.Color(hex), 5, 0.07),
    boom: (pt) => { burst(pt, up, 130, 10, 2.2, 1.0, 0.3); burst(pt, up, 60, 4, 0.3, 0.3, 0.3); boomLight.position.copy(pt); boomLight.intensity = 700; sfx.boom(); } });
  // Water blocks land vehicles and bots; swimmers can cross the same footprint.
  console.assert(blocked(-600, LAND_Y, -900) && !blocked(-600, LAND_Y, -900, true) && !blocked(SPAWN[0], LAND_Y, SPAWN[1]) && blocked(-200, LAND_Y, 420) && walkable(532, -822) && walkable(-1100, -2152) && walkable(-2784, -700), 'collision self-check failed');
  console.assert(groundY(532, -822) > LAND_Y + 2 && groundY(0, 300) === LAND_Y, 'ground self-check failed');
  camera.position.set(player.pos.x, player.pos.y + EYE, player.pos.z); camera.rotation.set(player.pitch, player.yaw, 0);
  W.update(0.016, { ads: false, bobX: 0, bobY: 0, mdx: 0, mdy: 0, t: 0, vy: 0 }); ui.mode(null, false, '');
  started = true; deploy.disabled = false; $('msg').textContent = '地图已就绪';
  window.G = { scene, camera, player, renderer, world, env, W, get battle() { return battle; }, rams, gpuPickups, energyProps, cars, keys, ui, transit, ziplines, rooftops, use, toggleFsd, blocked, POI, get driving() { return driving; }, get quality() { return quality; }, setQuality, hurt, fire: () => fire(W.card), step: (dt) => { now += dt; update(dt, now); } }; // debug + smoke test
  let last;
  renderer.setAnimationLoop((ms) => {
    const elapsed = last === undefined ? 1 / 60 : Math.max(0.001, (ms - last) / 1000);
    const dt = Math.min(elapsed, 0.05); last = ms;
    fps = damp(fps, 1 / elapsed, 2, Math.min(elapsed, 0.5));
    if (playing() && player.hp > 0) { now += dt; update(dt, now); }
    if (!playing()) return;
    updateFx(dt, ms / 1000);
    if (quality === 'high' && composer) composer.render(dt);
    else renderer.render(scene, camera);
  });
}
await new Promise(resolve => setTimeout(resolve, 60)); // let the loading text paint first
await boot();
