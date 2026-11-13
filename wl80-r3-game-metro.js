import * as THREE from "./wl80-r3-three-three.module.js";
import { GLTFLoader } from "./wl80-r3-three-loaders-GLTFLoader.js";
import { mergeGeometries } from "./wl80-r3-three-utils-BufferGeometryUtils.js";
import { LAND_Y, groundY, makeStrip, nearest, pointAt } from "./wl80-r3-game-geo.js";
import { signTexture } from "./wl80-r3-game-mats.js";
import { METRO_COLOR, METRO_ROUTE, STATIONS } from "./wl80-r3-game-metro-data.js";

const DEPTH = 13.5, HALL = 6.5, SHAFT = 7, SHAFT_RUN = 12.6, SHAFT_END = 15.6;
const PLATFORM_Y = LAND_Y - DEPTH, HALL_Y = PLATFORM_Y + HALL;
const TRACK = 7, CAR_PITCH = 19.7, BOARD_Z = 7.55, STAIR_TOP = 6 - HALL / 0.57735;
const carCenter = (index) => (index - 2.5) * CAR_PITCH;
const DOORS = Array.from({ length: 6 }, (_, i) => [-6.9, -2.3, 2.3, 6.9].map((z) => carCenter(i) + z)).flat();
const nearestDoor = (z) => DOORS.reduce((best, door) => Math.abs(door - z) < Math.abs(best - z) ? door : best);
const DOOR_GAP = .63, DOOR_STEP = 5.05;
const PORTALS = [
  [-5, -36, 0, -1], [5, -36, 0, -1], [-5, 36, 0, 1], [5, 36, 0, 1],
  [-11, -25, -1, 0], [11, -25, 1, 0], [-11, 22, -1, 0], [11, 22, 1, 0],
];
const route = makeStrip(METRO_ROUTE, 0);
const stops = STATIONS.map(({ x, z }) => nearest(route.pts, route.cum, x, z).s);
const clamp = THREE.MathUtils.clamp;
const origin = (frame, x, z) => {
  const c = Math.cos(frame.yaw), s = Math.sin(frame.yaw);
  return [frame.x + x * c + z * s, frame.z - x * s + z * c];
};
const local = (frame, x, z) => {
  const c = Math.cos(frame.yaw), s = Math.sin(frame.yaw), dx = x - frame.x, dz = z - frame.z;
  return [dx * c - dz * s, dx * s + dz * c];
};
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const between = (a, b, p) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
const cross = (a, b, c, d) => between(a, b, c) * between(a, b, d) < 0 && between(c, d, a) * between(c, d, b) < 0;
// These Fengqi portals route around the hall in the browser game's flat terrain.
const FENGQI_PORTALS = { B: 4, F: 0, D1: 1, C5: 3 };

function corridorPaths(station) {
  const used = new Set(), paths = [];
  const exits = [...station.exits].sort((a, b) => Math.hypot(a.x - station.x, a.z - station.z) - Math.hypot(b.x - station.x, b.z - station.z));
  for (const exit of exits) {
    const landing = origin(exit, 0, SHAFT_END), behind = origin(exit, 0, SHAFT_END + 5);
    const options = PORTALS.map(([x, z, dx, dz], index) => {
      const start = origin(station, x, z), lead = origin(station, x + dx * 4, z + dz * 4);
      const [lx, lz] = local(exit, ...lead);
      const points = lz < SHAFT_END + 8
        ? [start, lead, origin(exit, lx >= 0 ? 14 : -14, SHAFT_END + 14), origin(exit, 0, SHAFT_END + 8), landing]
        : [start, lead, behind, landing];
      const backward = (behind[0] - start[0]) * (lead[0] - start[0]) + (behind[1] - start[1]) * (lead[1] - start[1]) < 0;
      return { index, points, score: dist(lead, behind) + (backward ? 40 : 0) };
    }).filter(({ index }) => !used.has(index)).sort((a, b) => a.score - b.score);
    const fixedPortal = station.id === 'fengqiroad' ? FENGQI_PORTALS[exit.ref] : undefined;
    const choice = options.find(({ index }) => index === fixedPortal) ?? options.find(({ points }) => !paths.some(({ pts }) =>
      points.slice(1).some((b, i) => pts.slice(1).some((d, j) => cross(points[i], b, pts[j], d))))) ?? options[0];
    used.add(choice.index);
    paths.push({ ...makeStrip(choice.points, 2.5), portal: choice.index, exit });
  }
  return paths;
}

function sign(parent, text, width, x, y, z, yaw, bg = '#242a32') {
  const map = signTexture([{ text }], { w: 512, h: 96, bg, font: 'bold 36px "Microsoft YaHei","Segoe UI",sans-serif' });
  const board = new THREE.Mesh(new THREE.PlaneGeometry(width, width * 96 / 512), new THREE.MeshBasicMaterial({ map }));
  board.position.set(x, y, z); board.rotation.y = yaw; parent.add(board);
  return board;
}

function corridorMesh(path, materials) {
  const edges = path.pts.map(([x, z], i) => {
    const a = path.pts[Math.max(0, i - 1)], b = path.pts[Math.min(i + 1, path.pts.length - 1)];
    const before = new THREE.Vector2(x - a[0], z - a[1]).normalize();
    const after = new THREE.Vector2(b[0] - x, b[1] - z).normalize();
    const t = before.clone().add(after).normalize();
    const width = path.half / Math.max(0.46, t.dot(i ? before : after));
    return [[x - t.y * width, z + t.x * width], [x + t.y * width, z - t.x * width]];
  });
  const parts = Array.from({ length: materials.length }, () => []);
  const quad = (group, a, b, c, d) => {
    for (const p of [a, b, c, a, c, d]) parts[group].push(...p);
  };
  const at = ([x, z], y) => [x, HALL_Y + y, z];
  for (let i = 1; i < edges.length; i++) {
    const [a, b] = edges[i - 1], [c, d] = edges[i];
    quad(0, at(a, 0), at(b, 0), at(d, 0), at(c, 0));
    quad(1, at(a, 3.2), at(c, 3.2), at(d, 3.2), at(b, 3.2));
    for (const [p, q] of [[a, c], [b, d]]) {
      quad(2, at(p, 0), at(q, 0), at(q, 3.2), at(p, 3.2));
      quad(3, at(p, 2.24), at(q, 2.24), at(q, 2.36), at(p, 2.36));
    }
    const led = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
    quad(4, at(led(a, b, .48), 3.18), at(led(c, d, .48), 3.18), at(led(c, d, .52), 3.18), at(led(a, b, .52), 3.18));
  }
  const meshes = parts.map((positions) => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.computeVertexNormals(); return geometry;
  });
  const result = new THREE.Mesh(mergeGeometries(meshes, true), materials);
  meshes.forEach((g) => g.dispose());
  return result;
}

// The source collision ramps follow the stairs, with separate walkable layers for hall and platform.
function stationFloor(station, x, y, z) {
  const [sx, sz] = local(station, x, z), floors = [];
  const doorThreshold = STATIONS[station.index + (sx < 0 ? 1 : -1)] && Math.abs(sz - nearestDoor(sz)) < DOOR_GAP;
  if (Math.abs(sx) <= (doorThreshold ? 5.48 : 5.12) && Math.abs(sz) < 59.45) {
    if (Math.abs(sx) < 2.48 && sz >= STAIR_TOP && sz <= 6.3) {
      if ((sx > -2.16 && sx < -.45) || (sx > .12 && sx < .95) || (sx > 1.3 && sx < 2.13)) {
        floors.push(PLATFORM_Y + HALL * (6.3 - sz) / (6.3 - STAIR_TOP));
      }
    } else floors.push(PLATFORM_Y);
  }
  if (Math.abs(sx) <= 10.62 && Math.abs(sz) <= 35.62) {
    const stairWell = Math.abs(sx) < 2.6 && sz >= STAIR_TOP && sz < 1.3;
    const gateDepth = Math.min(Math.abs(sz + 14), Math.abs(sz - 4));
    const gate = (Math.abs(sx) > 4.65 && gateDepth < .36)
      || (Math.abs(sx) < 4.95 && gateDepth < 1.1 && Math.abs(sx - Math.round(sx / 1.5) * 1.5) < .42);
    if (!stairWell && !gate) floors.push(HALL_Y);
  }
  for (const path of station.corridors) {
    if (x < path.minX || x > path.maxX || z < path.minZ || z > path.maxZ) continue;
    if (nearest(path.pts, path.cum, x, z).d <= path.half - .32) floors.push(HALL_Y);
  }
  for (const exit of station.exits) {
    const [ex, ez] = local(exit, x, z);
    if (Math.abs(ex) > 2.88 || ez < 0 || ez > SHAFT_END + .1) continue;
    let depth = SHAFT * clamp(ez / SHAFT_RUN, 0, 1);
    if (station.id === 'longxiangqiao' && exit.ref === 'A') {
      depth = ez < 4.25 ? 2.46 * ez / 4.25 : 2.46 + 4.54 * clamp((ez - 5.55) / 7.05, 0, 1);
    }
    floors.push(exit.y - depth);
  }
  return floors.reduce((best, h) => best === null || Math.abs(y - h) < Math.abs(y - best) ? h : best, null);
}

function setDoors(model, prefix, side, gap) {
  for (const leaf of ['a', 'b']) {
    const part = model.getObjectByName(prefix + '_' + side + '_' + leaf);
    if (part) part.position.z = (leaf === 'a' ? -1 : 1) * gap;
  }
}

export function createMetro({ scene }, camera, note) {
  const loader = new GLTFLoader(), templates = new Map();
  const load = (name) => {
    if (!templates.has(name)) {
      templates.set(name, loader.loadAsync(new URL('./wl80-r3-game-metro-assets-' + name + '.glb', import.meta.url).href).then(({ scene: model }) => {
        const seen = new Set();
        model.traverse((node) => {
          if (node.name.endsWith('_col')) node.visible = false;
          if (!node.isMesh) return;
          for (const m of Array.isArray(node.material) ? node.material : [node.material]) {
            if (seen.has(m)) continue;
            seen.add(m);
            if (m.name === 'line') m.color.set(METRO_COLOR);
            if (/floor|wall|ceiling|white|slats|lining/.test(m.name) && m.emissive && !m.emissive.getHex()) {
              m.emissive.copy(m.color); m.emissiveMap = m.map; m.emissiveIntensity = .21;
            }
          }
        });
        return model;
      }));
    }
    return templates.get(name);
  };
  const stations = STATIONS.map((st, index) => ({
    ...st, index, exits: st.exits.map((e) => ({ ...e, y: groundY(e.x, e.z) })),
  }));
  const metroRoot = new THREE.Group(); metroRoot.name = 'Metro Line 1'; scene.add(metroRoot);
  const tunnelRoot = new THREE.Group(); tunnelRoot.visible = false; metroRoot.add(tunnelRoot);
  const train = new THREE.Group(); train.name = 'Metro Line 1 train'; train.visible = false; metroRoot.add(train);
  const lights = new THREE.Group(); lights.visible = false; scene.add(lights);
  lights.add(new THREE.HemisphereLight(0xfff8ee, 0xc1b9b3, .95));
  const materials = [0x555358, 0x94999d, 0xc4c9cc, METRO_COLOR].map((color) =>
    new THREE.MeshStandardMaterial({ color, roughness: .72, side: THREE.DoubleSide }));
  materials.push(new THREE.MeshBasicMaterial({ color: 0xfff7e5, side: THREE.DoubleSide }));
  const cars = [], tunnels = [];
  let inside = null, ride = null, ready = false, failed = false, parked = null;

  let loadStarted = false;
  function loadAssets() {
    if (loadStarted) return;
    loadStarted = true;
    const stationLoads = stations.map(async (st) => {
    const group = st.group = new THREE.Group(); group.name = 'station_' + st.id;
    group.position.set(st.x, PLATFORM_Y, st.z); group.rotation.y = st.yaw; group.visible = false; metroRoot.add(group);
    const asset = st.id + (st.id === 'longxiangqiao' ? '' : '_l1');
    const [platform, hall] = await Promise.all([load('platform_' + asset), load('concourse_' + asset)]);
    st.platform = platform.clone(); group.add(st.platform);
    const concourse = hall.clone(); concourse.position.y = HALL; group.add(concourse);
    st.corridors = corridorPaths(st);
    for (const path of st.corridors) {
      const xs = path.pts.map((p) => p[0]), zs = path.pts.map((p) => p[1]);
      Object.assign(path, { minX: Math.min(...xs) - 3, maxX: Math.max(...xs) + 3, minZ: Math.min(...zs) - 3, maxZ: Math.max(...zs) + 3 });
      const cap = concourse.getObjectByName('cap_' + path.portal);
      if (cap) cap.visible = false;
      const oldSign = concourse.getObjectByName('portal_sign_' + path.portal);
      if (oldSign) oldSign.visible = false;
      const [x, z, dx, dz] = PORTALS[path.portal];
      sign(concourse, path.exit.ref + ' 口 · EXIT', 2.9, x - dx * .15, 2.77, z - dz * .15, Math.atan2(-dx, -dz));
      const corridor = corridorMesh(path, materials);
      corridor.name = 'corridor_' + st.id + '_' + path.exit.ref;
      group.updateMatrix();
      corridor.applyMatrix4(group.matrix.clone().invert()); group.add(corridor);
    }
    for (const dir of [-1, 1]) {
      const next = STATIONS[st.index + dir];
      if (next) sign(group, '上车 → ' + next.name, 1.9, -dir * 4.8, 2.7, dir * BOARD_Z, dir * Math.PI / 2, METRO_COLOR);
    }
    await Promise.all(st.exits.map(async (e) => {
      const detail = st.id === 'longxiangqiao';
      const model = (await load(detail ? 'exit_longxiangqiao_' + e.ref.toLowerCase() : 'exit')).clone();
      model.name = 'exit_' + st.id + '_' + e.ref;
      model.position.set(e.x, e.y, e.z); model.rotation.y = e.yaw; metroRoot.add(model);
      model.getObjectByName('landing_cap').visible = false;
      if (!detail) sign(model, st.name + '  ·  ' + e.ref + ' 口', 2.95, .45, 2.08, -1.275, Math.PI, METRO_COLOR);
    }));
  });
  const railLoads = Promise.all([load('car_cab_line1'), load('car_mid_line1'), load('tunnel')]).then(([cab, mid, tunnel]) => {
    for (let i = 0; i < 6; i++) {
      const car = (i === 0 || i === 5 ? cab : mid).clone();
      car.position.z = carCenter(i); if (i === 5) car.rotation.y = Math.PI;
      train.add(car); cars.push(car);
    }
    for (let i = 0; i < 26; i++) {
      const segment = tunnel.clone(); tunnelRoot.add(segment); tunnels.push(segment);
    }
  });
  Promise.all([...stationLoads, railLoads]).then(() => { ready = true; }).catch((error) => {
    failed = true; console.error('Metro Line 1 assets could not load', error);
    });
  }

  const stationVisible = (st) => {
    for (const s of stations) if (s.group) s.group.visible = s === st;
  };
  const positionPlayer = (player, frame, x, y, z, yaw) => {
    const [px, pz] = origin(frame, x, z);
    player.pos.set(px, y, pz); player.vel.set(0, 0, 0);
    player.yaw = yaw; player.pitch = 0; player.onGround = true;
  };
  const entranceAt = (p) => {
    let best = null, distance = Infinity;
    for (const st of stations) for (const e of st.exits) {
      if (Math.abs(p.y - e.y) > 1.9) continue;
      const [x, z] = local(e, p.x, p.z);
      // Let players use E from the sidewalk around the kiosk as well as from the stair mouth.
      if (Math.abs(x) > 6.2 || z < -7 || z > 9) continue;
      const d = x * x + z * z;
      if (d < distance) { best = { st, e }; distance = d; }
    }
    return best;
  };
  const exitAt = (p) => inside?.exits.find((e) => {
    const [x, z] = local(e, p.x, p.z);
    return Math.abs(x) < 2.9 && z < 2.5 && z > -.1 && Math.abs(p.y - e.y) < 1.9;
  });
  const boardingAt = (p, walking = false) => {
    if (!inside || Math.abs(p.y - PLATFORM_Y) > .4) return null;
    const [x, z] = local(inside, p.x, p.z), dir = x < 0 ? 1 : -1, door = nearestDoor(z);
    return STATIONS[inside.index + dir] && Math.abs(x) > (walking ? DOOR_STEP : 3.4) && Math.abs(z - door) < (walking ? DOOR_GAP : 1.25)
      ? { dir, door } : null;
  };
  function placeParked(st, dir, open) {
    const [x, z] = origin(st, -dir * TRACK, 0);
    train.position.set(x, PLATFORM_Y, z); train.rotation.y = st.yaw + (dir > 0 ? Math.PI : 0);
    train.visible = true;
    for (const [i, car] of cars.entries()) setDoors(car, 'door', i === 5 ? 'R' : 'L', open ? .64 : 0);
    if (parked) setDoors(parked.st.platform, 'psd', parked.dir > 0 ? 'L' : 'R', 0);
    if (open) setDoors(st.platform, 'psd', dir > 0 ? 'L' : 'R', .78);
    parked = open ? { st, dir } : null;
  }
  function placeMoving(s, dir) {
    const [x, z, dx, dz] = pointAt(route, s);
    train.rotation.y = Math.atan2(-dir * dx, -dir * dz);
    train.position.set(x + Math.cos(train.rotation.y) * TRACK, PLATFORM_Y, z - Math.sin(train.rotation.y) * TRACK);
    train.visible = true;
  }
  function showTunnels(s, dir) {
    tunnelRoot.visible = true;
    const base = Math.floor(s / 6) * 6;
    tunnels.forEach((segment, i) => {
      const d = base + (i - 12) * 6, [x, z, dx, dz] = pointAt(route, d);
      const yaw = Math.atan2(-dir * dx, -dir * dz);
      segment.position.set(x + Math.cos(yaw) * TRACK, PLATFORM_Y, z - Math.sin(yaw) * TRACK);
      segment.rotation.y = yaw;
      segment.visible = d > 60 && d < route.len - 60 && !stops.some((stop) => Math.abs(d - stop) < 60);
    });
  }
  function disembark(player) {
    const st = stations[ride.index], dir = ride.dir, door = ride.carZ * -dir;
    ride = null; inside = st; stationVisible(st); tunnelRoot.visible = false;
    positionPlayer(player, st, -dir * 4.35, PLATFORM_Y, door, st.yaw - dir * Math.PI / 2);
    note(st.name + ' · 往站厅请走楼梯');
  }
  function startLeg(index, dir, carZ, dwell) {
    const start = stops[index], end = stops[index + dir];
    ride = { index, dir, carZ, start, end, elapsed: 0, duration: Math.max(17, Math.abs(end - start) / 43), arrived: false, dwell };
    placeParked(stations[index], dir, dwell > 0);
    note('下一站 · ' + STATIONS[index + dir].name);
  }
  function board(player, { dir, door }) {
    const index = inside.index;
    startLeg(index, dir, -dir * door, 2);
    inside = null;
    player.vel.set(0, 0, 0);
    player.pitch = 0;
  }
  function reset() {
    if (parked) setDoors(parked.st.platform, 'psd', parked.dir > 0 ? 'L' : 'R', 0);
    inside = ride = parked = null; stationVisible(null); lights.visible = train.visible = tunnelRoot.visible = false;
  }
  const cameraOffset = new THREE.Vector3();
  return {
    get ready() { return ready; },
    loadAssets,
    get indoors() { return !!inside; },
    get riding() { return !!ride; },
    surfaceBlocked(x, z) {
      return stations.some((st) => st.exits.some((e) => {
        const [ex, ez] = local(e, x, z);
        return Math.abs(ex) < 3.5 && ez > -.24 && ez < (st.id === 'longxiangqiao' && e.ref === 'A' ? 8.95 : 5.35);
      }));
    },
    floorAt(x, y, z) { return inside ? stationFloor(inside, x, y, z) : null; },
    reset,
    prompt(p) {
      if (ride) return ride.arrived || ride.dwell > 0 ? 'E — 下车 · ' + STATIONS[ride.index].name : '下一站 · ' + STATIONS[ride.index + ride.dir].name;
      if (inside) {
        const exit = exitAt(p), boarding = boardingAt(p);
        if (exit) return 'E — ' + exit.ref + ' 口出站';
        if (boarding) return 'E — 上车 · 开往 ' + STATIONS[inside.index + boarding.dir].name;
        if (Math.abs(p.y - PLATFORM_Y) < .4) {
          const [x] = local(inside, p.x, p.z), dir = x < 0 ? 1 : -1;
          return STATIONS[inside.index + dir] ? '沿站台走到开启的车门前上车' : '请从对面站台上车';
        }
        return '';
      }
      const entry = entranceAt(p);
      if (!entry) return '';
      if (!ready) return failed ? '地铁资源加载失败' : '地铁资源加载中…';
      return 'E — 进站 · ' + entry.st.name + ' ' + entry.e.ref + ' 口';
    },
    key(player) {
      const p = player.pos;
      if (ride) {
        if (ride.arrived || ride.dwell > 0) disembark(player);
        else note('列车运行中 · 到站后按 E 下车');
        return true;
      }
      if (inside) {
        const exit = exitAt(p), boarding = boardingAt(p);
        if (exit) {
          positionPlayer(player, exit, 0, exit.y, -3, exit.yaw);
          reset(); note('已出站 · ' + exit.ref + ' 口');
        } else if (boarding) board(player, boarding);
        return true;
      }
      const entry = entranceAt(p);
      if (!entry) return false;
      if (!ready) { note(failed ? '地铁资源加载失败' : '地铁资源加载中…'); return true; }
      const { st, e } = entry;
      inside = st; stationVisible(st); lights.visible = true;
      positionPlayer(player, e, -1.6, e.y, 1.8, e.yaw + Math.PI);
      player.pos.y = stationFloor(st, p.x, e.y - 1, p.z);
      note(st.name + ' · 沿楼梯进入站厅');
      return true;
    },
    update(dt, player) {
      if (!ride) {
        if (inside && player.pos.y < PLATFORM_Y + 1) {
          const dir = inside.index === 0 ? 1 : inside.index === stations.length - 1 ? -1 : local(inside, player.pos.x, player.pos.z)[0] < 0 ? 1 : -1;
          if (!parked || parked.st !== inside || parked.dir !== dir) placeParked(inside, dir, true);
        } else if (train.visible) {
          if (parked) setDoors(parked.st.platform, 'psd', parked.dir > 0 ? 'L' : 'R', 0);
          train.visible = false; parked = null;
        }
        const boarding = boardingAt(player.pos, true);
        if (!boarding) return false;
        board(player, boarding);
      }
      const previousYaw = train.rotation.y;
      if (ride.dwell > 0) {
        ride.dwell = Math.max(0, ride.dwell - dt);
        if (ride.dwell === 0) placeParked(stations[ride.index], ride.dir, false);
      } else ride.elapsed += dt;
      if (ride.arrived && ride.elapsed > 10) {
        const dir = STATIONS[ride.index + ride.dir] ? ride.dir : -ride.dir;
        startLeg(ride.index, dir, ride.carZ, 0);
      }
      if (!ride.arrived && ride.dwell === 0) {
        const t = Math.min(1, ride.elapsed / ride.duration);
        const s = THREE.MathUtils.lerp(ride.start, ride.end, t * t * (3 - 2 * t));
        if (t >= 1) {
          ride.index += ride.dir; ride.arrived = true; ride.elapsed = 0;
          stationVisible(stations[ride.index]); tunnelRoot.visible = false;
          placeParked(stations[ride.index], ride.dir, true);
          note('到站 · ' + STATIONS[ride.index].name + ' · 按 E 下车');
        } else {
          placeMoving(s, ride.dir);
          const nearby = stations.find((st) => Math.abs(stops[st.index] - s) < 70);
          stationVisible(nearby); showTunnels(s, ride.dir);
        }
      }
      cameraOffset.set(.18, 1.57, ride.carZ).applyAxisAngle(THREE.Object3D.DEFAULT_UP, train.rotation.y).add(train.position);
      player.pos.set(cameraOffset.x, PLATFORM_Y, cameraOffset.z); player.vel.set(0, 0, 0);
      player.yaw += Math.atan2(Math.sin(train.rotation.y - previousYaw), Math.cos(train.rotation.y - previousYaw));
      camera.position.copy(cameraOffset); camera.rotation.set(player.pitch, player.yaw, 0);
      camera.fov += (70 - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
      return true;
    },
  };
}
