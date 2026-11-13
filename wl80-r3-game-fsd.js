// Tesla-style driving assistance for the game's closed scenic route.
import { groundY, nearest, pointAt } from "./wl80-r3-game-geo.js";

const JOIN_DISTANCE = 25;
const LANE_OFFSET = 1.45;
const CRUISE_SPEED = 13.5;
const BRAKE_COMFORT = 3.5;
const FRONT_BUFFER = 3.6;
const ROUTE_STEP = 3;
const LANE_CHOICES = [1.45, 0, -1.45, 2.9, -2.9, 4.35, -4.35, 5.8, -5.8];
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const angle = (radians) => Math.atan2(Math.sin(radians), Math.cos(radians));

export function createFsd(ring, free, roadClear) {
  const directions = new WeakMap(), routes = new Map();
  const count = Math.ceil(ring.len / ROUTE_STEP), step = ring.len / count;
  const wrap = (s) => ((s % ring.len) + ring.len) % ring.len;
  const sample = (s) => pointAt(ring, wrap(s));
  const atOffset = (s, offset) => {
    const [x, z] = sample(s), [ax, az] = sample(s - 3), [bx, bz] = sample(s + 3);
    const dx = bx - ax, dz = bz - az, length = Math.hypot(dx, dz) || 1;
    return [x - dz * offset / length, z + dx * offset / length];
  };
  const lane = (s, dir) => {
    if (!roadClear) return atOffset(s, dir * LANE_OFFSET);
    if (!routes.has(dir)) {
      // Scan the road shoulder around each sample so we start moving around fixed map
      // props before reaching them. Moving blockers still require a full stop.
      const offsets = Array.from({ length: count }, (_, i) => {
        const segment = i * step;
        return dir * (LANE_CHOICES.find((offset) => [-6, -3, 0, 3, 6].every((delta) => {
          return [-.52, 0, .52].every((margin) => {
            const [x, z] = atOffset(segment + delta, dir * offset + margin);
            return roadClear(x, z, groundY(x, z) + .08);
          });
        })) ?? LANE_OFFSET);
      });
      routes.set(dir, offsets);
    }
    const offsets = routes.get(dir), u = wrap(s) / step, i = Math.floor(u), t = u - i;
    return atOffset(s, offsets[i] * (1 - t) + offsets[(i + 1) % count] * t);
  };

  function control(car) {
    const { x, z } = car.pos;
    const projection = nearest(ring.pts, ring.cum, x, z);
    if (projection.d > JOIN_DISTANCE) return { thr: 0, steer: 0, serviceBrake: 1, status: '请手动驶入环湖路线' };

    const s = projection.s, [, , dx, dz] = sample(s);
    const previousDirection = directions.get(car);
    const dir = previousDirection ?? (-Math.sin(car.heading) * dx - Math.cos(car.heading) * dz >= 0 ? 1 : -1);
    const speed = Math.max(0, car.v);
    const look = clamp(6 + speed * 0.68 + projection.d * 0.24, 6, 18);
    const [tx, tz] = lane(s + dir * look, dir);
    const headingError = angle(Math.atan2(x - tx, z - tz) - car.heading);
    const steer = clamp(headingError * 2.35, -1, 1);
    const joining = projection.d > 4.5;
    if (previousDirection === undefined && joining && Math.abs(headingError) > 1.35) {
      return { thr: 0, steer: 0, serviceBrake: 1, status: '请手动调整方向后接入路线' };
    }
    directions.set(car, dir);
    let target = joining ? 5 : CRUISE_SPEED;
    target = Math.min(target, CRUISE_SPEED / (1 + 2.1 * Math.abs(headingError)));

    // Slow down before the bend enters the immediate steering target.
    const horizon = Math.max(14, speed * speed / (2 * BRAKE_COMFORT) + 8);
    const [lx, lz] = lane(s, dir), joinLength = Math.max(look, Math.hypot(lx - x, lz - z) + 4);
    let previousHeading = Math.atan2(dir * dx, dir * dz), previousX = lx, previousZ = lz;
    for (let ahead = 4; ahead <= horizon; ahead += 4) {
      const [px, pz] = lane(s + dir * ahead, dir);
      const heading = Math.atan2(px - previousX, pz - previousZ);
      const turn = Math.abs(angle(heading - previousHeading));
      const cornerSpeed = CRUISE_SPEED / (1 + turn * 2.9);
      target = Math.min(target, Math.sqrt(cornerSpeed ** 2 + 2 * BRAKE_COMFORT * (ahead - 4)));
      previousHeading = heading; previousX = px; previousZ = pz;
    }

    // Blend the measured lateral offset into the route rather than testing a teleport to its center.
    let status = joining ? '接入环湖路线' : target < CRUISE_SPEED - 2 ? '弯道减速' : '巡航';
    for (let ahead = 2; ahead <= horizon; ahead += 2) {
      const [px, pz] = lane(s + dir * ahead, dir), mix = Math.max(0, 1 - ahead / joinLength);
      const qx = px + (x - lx) * mix, qz = pz + (z - lz) * mix;
      if (free(car, qx, qz, groundY(qx, qz) + 0.08)) continue;
      const limit = Math.sqrt(2 * BRAKE_COMFORT * Math.max(0, ahead - FRONT_BUFFER - 1));
      if (limit <= target) {
        target = limit;
        status = '前方受阻 · 等待';
      }
      break;
    }

    if (car.v < -0.15 || target <= 0.1) return { thr: 0, steer, serviceBrake: 1, status };
    const delta = target - speed;
    return {
      thr: clamp(delta * 0.24, 0, 0.78),
      steer,
      serviceBrake: clamp((-delta - 0.3) * 0.37, 0, 1),
      status,
    };
  }

  control.reset = (car) => directions.delete(car);
  return control;
}
