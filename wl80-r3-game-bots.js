// Robots are built from capsules, spheres and a lathed torso (no boxes), with a procedural walk cycle and an aiming pose.
import * as THREE from "./wl80-r3-three-three.module.js";
import { LAND_Y, RING, groundY, walkable, makeStrip, nearest, pointAt, pipFlat } from "./wl80-r3-game-geo.js";
import { TEAMS, SQUAD_SIZE } from "./wl80-r3-game-teams.js";
import { createBattleNavigation } from "./wl80-r3-game-battle-nav.js";

const SPAWN_AREAS = [[-18, 110], [153, 65], [158, 300], [-387, 244], [-147, 201], [305, -45], [467, 180]];
const HOTSPOTS = [
  { x: -18, z: 110, label: '湖滨 · 平海路' },
  { x: -147, z: 201, label: '仁和路 · 湖滨步行街' },
  { x: 158, z: 300, label: '学士路 · 延安路' },
];

export function createBattle(o) {
  const { scene, world, player } = o, group = new THREE.Group(); scene.add(group);
  const ring = makeStrip([...RING, RING[0]], 0), rand = (a, b) => a + Math.random() * (b - a);
  // ---- shared robot parts
  const shell = new THREE.MeshStandardMaterial({ color: 0xe6e8ea, roughness: 0.32, metalness: 0.15 }), joint = new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.5, metalness: 0.6 });
  const cap = (r, l) => new THREE.CapsuleGeometry(r, l, 6, 14).translate(0, -l / 2 - r * 0.2, 0);                // hangs down from its pivot
  const G = { torso: new THREE.LatheGeometry([[0.0, -0.06], [0.12, -0.05], [0.135, 0.04], [0.16, 0.2], [0.19, 0.33], [0.18, 0.43], [0.1, 0.5], [0.055, 0.55], [0, 0.56]].map(([r, y]) => new THREE.Vector2(r, y)), 22).scale(1, 1, 0.72),
    pelvis: new THREE.SphereGeometry(0.15, 18, 12).scale(1.1, 0.75, 0.85), head: new THREE.SphereGeometry(0.108, 22, 16).scale(0.95, 1.1, 1),
    visor: new THREE.SphereGeometry(0.112, 22, 10, Math.PI * 0.18, Math.PI * 0.64, Math.PI * 0.32, Math.PI * 0.24).scale(0.95, 1.1, 1),
    upper: cap(0.05, 0.2), fore: cap(0.043, 0.2), hand: new THREE.SphereGeometry(0.05, 12, 10), thigh: cap(0.072, 0.28), shin: cap(0.055, 0.3),
    foot: new THREE.CapsuleGeometry(0.048, 0.13, 4, 10).rotateX(Math.PI / 2).translate(0, -0.4, 0.06), ball: new THREE.SphereGeometry(0.062, 12, 10),
    gun: new THREE.CapsuleGeometry(0.03, 0.34, 4, 10).rotateX(Math.PI / 2).translate(0, -0.34, 0.16), stripe: new THREE.CapsuleGeometry(0.012, 0.26, 3, 8).rotateX(Math.PI / 2).translate(0, -0.305, 0.16) };
  const accents = TEAMS.map((t) => new THREE.MeshStandardMaterial({ color: 0, emissive: t.color, emissiveIntensity: 2.2 }));
  function makeRobot(bot) {
    const g = new THREE.Group(), acc = accents[bot.team], P = {};
    const m = (geo, mat, parent, x = 0, y = 0, z = 0) => { const k = new THREE.Mesh(geo, mat); k.position.set(x, y, z); k.castShadow = true; k.userData.bot = bot; parent.add(k); return k; };
    const pivot = (parent, x, y, z) => { const p = new THREE.Group(); p.position.set(x, y, z); parent.add(p); return p; };
    const hips = pivot(g, 0, 0.93, 0); P.hips = hips; m(G.pelvis, joint, hips);
    m(G.torso, shell, hips, 0, 0.06, 0); m(G.head, shell, hips, 0, 0.75, 0); m(G.visor, acc, hips, 0, 0.75, 0).rotation.y = -Math.PI / 2;
    for (const s of [-1, 1]) {
      const sh = pivot(hips, s * 0.235, 0.5, 0), el = pivot(sh, 0, -0.29, 0); m(G.ball, joint, sh); m(G.upper, shell, sh); m(G.ball, joint, el).scale.setScalar(0.8); m(G.fore, shell, el); m(G.hand, joint, el, 0, -0.3, 0);
      const hp = pivot(hips, s * 0.1, -0.04, 0), kn = pivot(hp, 0, -0.42, 0); m(G.thigh, shell, hp); m(G.ball, joint, kn).scale.setScalar(0.95); m(G.shin, shell, kn); m(G.foot, joint, kn);
      P[s < 0 ? 'armL' : 'armR'] = sh; P[s < 0 ? 'elL' : 'elR'] = el; P[s < 0 ? 'legL' : 'legR'] = hp; P[s < 0 ? 'knL' : 'knR'] = kn;
      if (s > 0) { m(G.gun, joint, el); m(G.stripe, acc, el); }
    }
    g.traverse((part) => {
      if (!part.isMesh) return;
      // Limb pivots animate; the attached mesh transforms are constant.
      part.updateMatrix();
      part.matrixAutoUpdate = false;
    });
    group.add(g); bot.g = g; bot.P = P;
  }
  // ---- cover check without raycasts: walk the sight line through the collision grid
  function los(a, b) {
    const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz), n = Math.ceil(d / 3);
    for (let i = 1; i < n; i++) { const t = i / n, x = a.x + dx * t, z = a.z + dz * t, y = a.y + 1.4 + (b.y - a.y) * t, c = world.near(x, z);
      for (const p of c.polys) if (y < p.h + LAND_Y && pipFlat(p.pts, x, z)) return false;
      for (const bx of c.boxes) if (y < bx.max.y && y > bx.min.y && x > bx.min.x && x < bx.max.x && z > bx.min.z && z < bx.max.z) return false; }
    return true;
  }
  // ---- entities: one human on team 0, with every other slot filled by a bot
  const me = { isPlayer: true, team: 0, pos: player.pos, vel: player.vel, kills: 0, get alive() { return player.hp > 0; } }, bots = [], ents = [me];
  for (let team = 0; team < TEAMS.length; team++) for (let slot = team === 0 ? 1 : 0; slot < SQUAD_SIZE; slot++) {
    const b = { team, slot, pos: new THREE.Vector3(), vel: new THREE.Vector3(), last: new THREE.Vector3() };
    makeRobot(b); bots.push(b); ents.push(b);
  }
  const squads = TEAMS.map(() => ({ x: 0, z: 0, count: 0, target: -1, members: [] }));
  const alive = TEAMS.map(() => 0);
  let over = null, elapsed = 0, scanIn = 0, soundIn = 0, hotspot = HOTSPOTS[0], findPath;

  function spawnNear(x, z, placed) {
    for (let r = 0; r <= 84; r += 3) {
      const steps = r ? Math.ceil(r * 2) : 1;
      for (let i = 0; i < steps; i++) {
        const a = i * Math.PI * 2 / steps;
        const px = x + Math.cos(a) * r, pz = z + Math.sin(a) * r, y = groundY(px, pz);
        if (!o.blocked(px, y, pz) && placed.every((p) => (px - p.x) ** 2 + (pz - p.z) ** 2 >= 2.5 ** 2)) return [px, y, pz];
      }
    }
    throw new Error(`No squad spawn near ${x}, ${z}`);
  }

  function reset() {
    over = null; elapsed = scanIn = soundIn = 0; hotspot = HOTSPOTS[0]; me.kills = 0;
    findPath = createBattleNavigation(o.blocked);
    const placed = [me.pos];
    for (const b of bots) {
      const districts = SPAWN_AREAS.length - 1, district = b.team ? 1 + (b.team - 1) % districts : 0;
      const [cx, cz] = SPAWN_AREAS[district];
      const wave = Math.floor((b.team - 1) / districts);
      const angle = wave * Math.PI / 2 + district * 0.31;
      const offset = b.team === 0 ? 0 : 23;
      const formation = b.slot * Math.PI / 2;
      b.pos.set(...spawnNear(cx + Math.cos(angle) * offset + Math.cos(formation) * 4,
        cz + Math.sin(angle) * offset + Math.sin(formation) * 4, placed));
      placed.push(b.pos);
      b.hp = 100; b.alive = true; b.kills = b.dead = b.stuck = b.yaw = 0;
      b.think = rand(0, 0.28); b.cool = rand(0.8, 1.9); b.phase = rand(0, 6);
      b.side = Math.random() < 0.5 ? 1 : -1; b.vel.set(0, 0, 0);
      b.target = b.goal = b.path = null; b.route = [0, 0]; b.routeIn = b.stalled = 0; b.last.copy(b.pos);
      b.g.visible = true; b.g.rotation.set(0, 0, 0); b.g.position.copy(b.pos);
    }
    for (const squad of squads) squad.target = -1;
    countAlive();
  }
  function countAlive() {
    alive.fill(0);
    for (const e of ents) if (e.alive) alive[e.team]++;
    return alive;
  }
  function locateSquad(team) {
    let x = 0, z = 0, count = 0;
    for (const e of ents) if (e.team === team && e.alive) { x += e.pos.x; z += e.pos.z; count++; }
    return count ? { x: x / count, z: z / count, count, label: TEAMS[team].name, color: TEAMS[team].color } : null;
  }
  function refreshIntel(playerAvailable) {
    for (const s of squads) { s.x = s.z = s.count = 0; s.members.length = 0; }
    for (const e of ents) if (e.alive && (e !== me || playerAvailable)) {
      const s = squads[e.team]; s.x += e.pos.x; s.z += e.pos.z; s.count++; s.members.push(e);
    }
    for (const s of squads) if (s.count) { s.x /= s.count; s.z /= s.count; }
    squads.forEach((s, team) => {
      s.target = -1;
      let best = Infinity;
      squads.forEach((rival, id) => {
        if (id === team || !rival.count) return;
        const distance = Math.hypot(rival.x - s.x, rival.z - s.z);
        const distanceFromFight = Math.hypot(rival.x - hotspot.x, rival.z - hotspot.z);
        const score = distance + distanceFromFight * 0.35 - rival.count * 6 + (id === 0 && elapsed < 10 ? 60 : 0);
        if (score < best) { best = score; s.target = id; }
      });
    });
  }
  function damage(e, dmg, by) {
    if (!e.alive || (by && by.team === e.team)) return false;
    if (e.isPlayer) { o.hurtPlayer(dmg); if (player.hp <= 0 && by) by.kills++; return true; }
    e.hp -= dmg; if (e.hp > 0) return true;
    e.alive = false; e.dead = 0.01; if (by) { by.kills++; if (by.isPlayer) o.note(`击倒 ${TEAMS[e.team].name} 的机器人 · 你已击倒 ${by.kills}`); }
    return true;
  }
  function explode(p, by, radius = 8, strength = 130) {
    o.boom(p);
    for (const e of ents) {
      const distance = e.pos.distanceTo(p);
      if (distance < radius) damage(e, strength * (1 - distance / (radius + 1)), by);
    }
    o.hitEnergyProps?.(p, by, radius, strength);
  }
  const shotCandidates = [], shotCenter = new THREE.Vector3();
  function shotHits(raycaster) {
    const { ray, near, far } = raycaster;
    shotCandidates.length = 0;
    for (const bot of bots) {
      if (!bot.alive || bot.team === me.team) continue;
      // This sphere contains the entire robot, including any limb pose.
      shotCenter.setFromMatrixPosition(bot.g.matrixWorld).sub(ray.origin);
      const depth = THREE.MathUtils.clamp(shotCenter.dot(ray.direction), near, far);
      if (shotCenter.addScaledVector(ray.direction, -depth).lengthSq() <= 2.2 ** 2) shotCandidates.push(bot.g);
    }
    return raycaster.intersectObjects(shotCandidates, true);
  }
  const from = new THREE.Vector3(), to = new THREE.Vector3();
  const SIGHT_RANGE = 105;
  const sightCandidates = [];
  const sightScores = new Float64Array(ents.length);
  const bySightScore = (a, b) => sightScores[a] - sightScores[b];
  function chooseTarget(bot, playerAvailable) {
    sightCandidates.length = 0;
    for (let i = 0; i < ents.length; i++) {
      const e = ents[i];
      if (!e.alive || e.team === bot.team || (e === me && !playerAvailable) || Math.abs(e.pos.y - bot.pos.y) > 8) continue;
      const distance = e.pos.distanceToSquared(bot.pos);
      if (distance >= SIGHT_RANGE ** 2) continue;
      sightScores[i] = e === me ? distance * (elapsed < 10 ? 3 : 1.55) : distance;
      sightCandidates.push(i);
    }
    // Sort is stable, so equal scores retain the same entity-order tie break.
    sightCandidates.sort(bySightScore);
    for (const i of sightCandidates) if (los(bot.pos, ents[i].pos)) return ents[i];
    return null;
  }
  function steer(b, gx, gz) { // -> unit direction toward a goal, round the lake when the straight line crosses water
    let dx = gx - b.pos.x, dz = gz - b.pos.z, d = Math.hypot(dx, dz) || 1, clear = d < 700;   // the whole line must be dry land, or they dither at the shore
    for (let s = 12; clear && s < d; s += 12) if (!walkable(b.pos.x + dx / d * s, b.pos.z + dz / d * s)) { clear = false; break; }
    if (!clear) { const a = nearest(ring.pts, ring.cum, b.pos.x, b.pos.z), g = nearest(ring.pts, ring.cum, gx, gz); let fwd = (g.s - a.s + ring.len) % ring.len; const dirn = fwd < ring.len / 2 ? 1 : -1;
      const [tx, tz] = pointAt(ring, (a.s + dirn * 16 + ring.len) % ring.len); dx = tx - b.pos.x; dz = tz - b.pos.z; d = Math.hypot(dx, dz) || 1; }
    return [dx / d, dz / d];
  }
  function sidestep(b, mx, mz) {
    const open = (x, z, d) => !o.blocked(b.pos.x + x * d, b.pos.y, b.pos.z + z * d);
    if (open(mx, mz, 2.4)) return [mx, mz];
    const yaw = Math.atan2(mx, mz);
    for (const turn of [0.72, -0.72, 1.55, -1.55, 2.3, -2.3]) {
      const a = yaw + turn * b.side, x = Math.sin(a), z = Math.cos(a);
      if (open(x, z, 2.4)) return [x, z];
    }
    return [mx, mz];
  }
  function update(dt) {
    if (over) return alive;
    elapsed += dt; soundIn -= dt;
    const cam = o.camera.position;
    const playerAvailable = me.alive && (o.canTargetPlayer?.() ?? true);
    if ((scanIn -= dt) <= 0) {
      hotspot = HOTSPOTS[Math.floor(elapsed / 30) % HOTSPOTS.length];
      refreshIntel(playerAvailable && walkable(me.pos.x, me.pos.z));
      scanIn = 0.6;
    }
    let routeBudget = 1;
    for (const b of bots) {
      const P = b.P;
      if (!b.alive) { if (b.dead > 0 && b.dead < 1) { b.dead = Math.min(1, b.dead + dt * 2.2); b.g.rotation.x = -b.dead * 1.5; b.g.position.y = b.pos.y + b.dead * 0.12; } continue; }
      b.routeIn -= dt;
      if (b.target && (!b.target.alive || (b.target === me && !playerAvailable))) b.target = null;
      if ((b.think -= dt) <= 0) { b.think = 0.28;
        const best = chooseTarget(b, playerAvailable);
        b.target = best;
        const moving = best || b.goal;
        if (moving && b.pos.distanceToSquared(b.last) < 0.55 ** 2) b.stalled += 0.28;
        else b.stalled = Math.max(0, b.stalled - 0.28);
        if (b.stalled >= 0.55 && b.stuck <= 0 && !b.path?.length) {
          b.stuck = 0.95; b.side *= -1;
        }
        b.last.copy(b.pos);
        if (best) { b.path = b.goal = null; }
        else {
          const rival = squads[squads[b.team].target];
          const nearFight = Math.hypot(b.pos.x - hotspot.x, b.pos.z - hotspot.z) < 130;
          const nearRival = rival && Math.hypot(b.pos.x - rival.x, b.pos.z - rival.z) < 150;
          const members = rival?.members.filter((e) => e.alive && (e !== me || playerAvailable));
          const contact = members?.reduce((closest, e) => !closest || e.pos.distanceToSquared(b.pos) < closest.pos.distanceToSquared(b.pos) ? e : closest, null);
          const goal = elapsed < 50 && !nearFight && !nearRival ? hotspot : contact?.pos;
          b.goal = goal ? [goal.x, goal.z] : null;
          if (b.goal) {
            if (routeBudget && b.routeIn <= 0 && (b.stalled > 0.55 || (elapsed > 16 && !b.path?.length))) {
              routeBudget--;
              b.routeIn = rand(2.2, 3.5);
              b.path = findPath(b.pos.x, b.pos.z, ...b.goal);
              if (b.path) b.stuck = b.stalled = 0;
            }
            if (!b.path?.length) b.route = sidestep(b, ...steer(b, ...b.goal));
          } else b.path = null;
        }
      }
      let mx = 0, mz = 0, speed = 0;
      if (b.target && b.target.alive) { const e = b.target, dx = e.pos.x - b.pos.x, dz = e.pos.z - b.pos.z, d = Math.hypot(dx, dz) || 1; b.yaw = Math.atan2(dx, dz);
        if (d > 26) { mx = dx / d; mz = dz / d; speed = 5.8; }
        else if (d < 9) { mx = -dx / d; mz = -dz / d; speed = 3; }
        else { mx = -dz / d * b.side; mz = dx / d * b.side; speed = 2.2; }
        if ((b.cool -= dt) <= 0) { b.cool = rand(0.22, 0.5);
          if (d < SIGHT_RANGE && los(b.pos, e.pos)) {
            from.set(b.pos.x + dx / d * 0.5, b.pos.y + 1.35, b.pos.z + dz / d * 0.5);
            const hit = Math.random() < Math.max(0.08, 0.62 - d / 130) * (e.vel.lengthSq() > 25 ? 0.55 : 1);
            to.set(e.pos.x + (hit ? 0 : rand(-1.5, 1.5)), e.pos.y + 1.2 + (hit ? 0 : rand(-0.6, 1.4)), e.pos.z + (hit ? 0 : rand(-1.5, 1.5)));
            const cameraDistance = from.distanceToSquared(cam);
            if (cameraDistance < 260 ** 2) o.tracer(from, to, TEAMS[b.team].color);
            if (cameraDistance < 90 ** 2 && soundIn <= 0) { o.sfx.botShot(); soundIn = 0.085; }
            if (hit) damage(e, 8, b);
          }
        }
      }
      else if (b.goal && Math.hypot(b.goal[0] - b.pos.x, b.goal[1] - b.pos.z) > 2) {
        while (b.path?.length && Math.hypot(b.path[0][0] - b.pos.x, b.path[0][1] - b.pos.z) < 0.55) b.path.shift();
        if (b.path?.length) {
          const dx = b.path[0][0] - b.pos.x, dz = b.path[0][1] - b.pos.z, d = Math.hypot(dx, dz);
          mx = dx / d; mz = dz / d;
        } else [mx, mz] = b.route;
        speed = 9.5; b.yaw = Math.atan2(mx, mz);
      }
      if (b.stuck > 0) { b.stuck -= dt; const a = Math.atan2(mx, mz) + b.side * 1.4; mx = Math.sin(a); mz = Math.cos(a); }
      b.vel.set(0, 0, 0);
      if (speed) { const x = b.pos.x, z = b.pos.z, nx = x + mx * speed * dt, nz = z + mz * speed * dt;
        if (!o.blocked(nx, b.pos.y, nz)) { b.pos.x = nx; b.pos.z = nz; } else if (!o.blocked(nx, b.pos.y, b.pos.z)) b.pos.x = nx; else if (!o.blocked(b.pos.x, b.pos.y, nz)) b.pos.z = nz; else speed = 0;
        b.pos.y = groundY(b.pos.x, b.pos.z);
        if (dt > 0) b.vel.set((b.pos.x - x) / dt, 0, (b.pos.z - z) / dt);
      }
      // pose
      b.phase += speed * dt * 2.1; const sw = Math.sin(b.phase) * Math.min(1, speed / 4) * 0.75, aiming = !!b.target;
      b.g.position.set(b.pos.x, b.pos.y + Math.abs(Math.cos(b.phase)) * 0.025 * Math.min(1, speed), b.pos.z);
      let dy = b.yaw - b.g.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); b.g.rotation.y += dy * Math.min(1, dt * 9);
      P.legL.rotation.x = -sw; P.legR.rotation.x = sw; P.knL.rotation.x = Math.max(0, sw) * 1.1 + 0.05; P.knR.rotation.x = Math.max(0, -sw) * 1.1 + 0.05;
      P.armL.rotation.x = sw * 0.8; P.elL.rotation.x = -0.25 - Math.abs(sw) * 0.4; P.armR.rotation.x += ((aiming ? -1.35 : -sw * 0.8) - P.armR.rotation.x) * Math.min(1, dt * 10); P.elR.rotation.x = aiming ? -0.15 : -0.3;
      P.hips.rotation.x = Math.min(0.2, speed * 0.03);
    }
    // ---- outcome
    countAlive();
    if (!me.alive) over = 'lose';
    else if (!alive.slice(1).some(Boolean)) over = 'win';
    return alive;
  }
  reset();
  return { group, bots, ents, me, update, reset, damage, explode, shotHits, get over() { return over; },
    get hotspot() { return hotspot; },
    trace: locateSquad,
    placing() { return countAlive().filter(Boolean).length; } };
}
