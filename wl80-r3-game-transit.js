// Public transport: the imported Metro Line 1 and the West Lake ferry.
import { LAND_Y as Y, BOAT_ROUTE, PIER_HUBIN, PIER_LEIFENG, makeStrip, pointAt } from "./wl80-r3-game-geo.js";
import { createMetro } from "./wl80-r3-game-metro.js";

export function createTransit(ctx, camera, note) {
  const metro = createMetro(ctx, camera, note);

  // ---------------- lake ferry
  const route = makeStrip(BOAT_ROUTE, 0), ferry = ctx.makeBoat(1.7); ctx.solids.add(ferry);
  const boat = { s: 0, v: 0, dir: 1 }, ends = [PIER_HUBIN, PIER_LEIFENG];
  const placeFerry = (t) => { const [x, z, dx, dz] = pointAt(route, boat.s); ferry.position.set(x, 0.12 + Math.sin(t * 0.9) * 0.05, z); ferry.rotation.set(0, Math.atan2(dx, dz), Math.sin(t * 0.7) * 0.02); };
  placeFerry(0);
  const pierEnd = (i) => pointAt(ends[i], ends[i].len - 1.5);

  let ride = null, tNow = 0;
  const pierAt = (p) => [0, 1].find((i) => { const [x, z] = pierEnd(i); return Math.abs(p.y - Y) < 2.4 && Math.hypot(p.x - x, p.z - z) < 5; });
  return {
    get riding() { return !!ride || metro.riding; },
    get indoors() { return metro.indoors; },
    get safe() { return metro.indoors || metro.riding; },
    get ready() { return metro.ready; },
    loadAssets() { return metro.loadAssets(); },
    floorAt: metro.floorAt,
    surfaceBlocked: metro.surfaceBlocked,
    reset() { ride = null; metro.reset(); },
    prompt(p) {
      const message = metro.prompt(p);
      if (message || metro.indoors || metro.riding) return message;
      const i = pierAt(p);
      if (i !== undefined) return i === 0 ? 'E — ferry to Leifeng Pagoda 雷峰塔' : 'E — ferry back to Hubin 湖滨';
      return '';
    },
    key(player) {
      if (ride) { note('Stay aboard — the ferry is under way'); return true; }
      if (metro.key(player)) return true;
      const i = pierAt(player.pos);
      if (i !== undefined) { boat.s = i ? route.len : 0; boat.dir = i ? -1 : 1; boat.v = 0; ride = { kind: 'boat', to: 1 - i }; note(i ? 'Ferry to Hubin 湖滨' : 'Ferry to Leifeng Pagoda 雷峰塔 — about two minutes'); return true; }
      return false;
    },
    update(dt, player) { // while riding this owns the camera; returns false when not riding
      tNow += dt;
      if (!ride) { placeFerry(tNow); return metro.update(dt, player); }
      const left = boat.dir > 0 ? route.len - boat.s : boat.s, target = Math.min(27, Math.max(3, left * 0.22));
      boat.v += Math.sign(target - boat.v) * Math.min(Math.abs(target - boat.v), 5 * dt); boat.s += boat.dir * boat.v * dt; placeFerry(tNow);
      player.pos.set(ferry.position.x, Y, ferry.position.z); player.vel.set(0, 0, 0);
      camera.position.set(ferry.position.x, ferry.position.y + 2.5, ferry.position.z); camera.rotation.set(player.pitch, player.yaw, ferry.rotation.z);
      if (left < 1.5) { const [x, z] = pierEnd(ride.to); player.pos.set(x, Y, z); boat.s = boat.dir > 0 ? route.len : 0; note(ride.to ? '雷峰塔码头 Leifeng Pagoda pier — the path leads up to the pagoda' : '湖滨码头 Hubin pier'); ride = null; }
      camera.fov += (70 - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
      return true;
    },
    boat, ferry, route,
  };
}
