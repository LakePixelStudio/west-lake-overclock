import * as THREE from "./wl80-r3-three-three.module.js";
import { groundY } from "./wl80-r3-game-geo.js";
import { signTexture } from "./wl80-r3-game-mats.js";

const REACH = 4, EYE_HEIGHT = 1.68, CABLE_HEIGHT = 2.85, TRANSFER_TIME = 0.38;

export function createZiplines({ solids, M }, camera, rooftops, note) {
  const frame = new THREE.MeshStandardMaterial({ color: 0x182835, metalness: 0.55, roughness: 0.45 });
  const orange = M.emit(0xffaa45, 1.25);
  const cable = new THREE.MeshStandardMaterial({ color: 0x9f9e99, emissive: 0x61421e, emissiveIntensity: 0.7, roughness: 0.42, metalness: 0.45 });
  const up = new THREE.Vector3(0, CABLE_HEIGHT, 0);
  const point = (x, y, z) => new THREE.Vector3(x, y, z);
  const add = (parent, geometry, material, position) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    parent.add(mesh);
    return mesh;
  };
  const box = (group, material, w, h, d, x, y, z) => add(group, new THREE.BoxGeometry(w, h, d), material, point(x, y, z));
  function station(position, facing, label, top) {
    const station = new THREE.Group();
    station.name = label;
    station.position.copy(position);
    station.rotation.y = Math.atan2(facing.x, facing.z);
    solids.add(station);
    for (const side of [-1, 1]) {
      box(station, frame, 0.8, 0.13, 0.76, side * 1.65, 0.065, 0);
      box(station, frame, 0.22, 3.25, 0.24, side * 1.65, 1.625, 0);
      box(station, orange, 0.08, 1.1, 0.028, side * 1.65, 2.04, 0.138);
    }
    box(station, frame, 3.55, 0.22, 0.3, 0, 3.22, 0);
    box(station, frame, 0.33, 0.28, 0.32, 0, 2.99, 0);
    for (const side of [-1, 1]) box(station, orange, 0.34, 0.035, 1.45, side * 1.45, 0.025, 0.5);
    const texture = signTexture([{ text: label }, { text: top ? '↓ 地面 · DESCEND' : '↑ 屋顶 · ASCEND', font: '600 40px "Microsoft YaHei", sans-serif', color: '#ffc87b' }], {
      w: 768, h: 220, bg: '#141e29', font: 'bold 58px "Microsoft YaHei", sans-serif',
    });
    const plate = add(station, new THREE.PlaneGeometry(2.4, 0.64), new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide }), point(0, 3.68, 0.17));
    plate.name = top ? 'ZIPLINE DOWN' : 'ZIPLINE UP';
  }

  const lines = rooftops.map((roof) => {
    const ground = point(roof.groundX, groundY(roof.groundX, roof.groundZ), roof.groundZ);
    const top = point(roof.roofX, roof.y, roof.roofZ);
    const towardRoof = point(top.x - ground.x, 0, top.z - ground.z).normalize();
    const start = ground.clone().add(up), end = top.clone().add(up);
    // The line rises outside the facade and only crosses the parapet after gaining clearance.
    const shoulder = start.clone().lerp(end, 0.27).setY(end.y - 5);
    const crest = shoulder.clone().setY(end.y + 8);
    const settle = end.clone().setY(end.y + 8);
    const path = new THREE.CurvePath();
    path.add(new THREE.LineCurve3(start, shoulder));
    path.add(new THREE.CubicBezierCurve3(shoulder, crest, settle, end));
    const length = path.getLength();
    const mesh = add(solids, new THREE.TubeGeometry(path, Math.ceil(length / 1.4), 0.075, 8, false), cable, point(0, 0, 0));
    mesh.name = roof.name + ' 滑索';
    const out = towardRoof.clone().negate();
    station(ground, out, roof.name, false);
    station(top, towardRoof, roof.name, true);
    return { ground, top, towardRoof, path, name: roof.name, duration: Math.max(4, length / 27) };
  });

  let ride = null;
  const handle = new THREE.Vector3();
  const find = (position) => {
    for (const line of lines) {
      const near = (station) => Math.abs(position.y - station.y) < 1.45
        && Math.hypot(position.x - station.x, position.z - station.z) < REACH;
      if (near(line.ground)) return { line, ascending: true };
      if (near(line.top)) return { line, ascending: false };
    }
    return null;
  };
  return {
    list: rooftops,
    get riding() { return ride !== null; },
    prompt(position) {
      if (ride) return '';
      const here = find(position);
      if (!here) return '';
      return here.ascending ? 'E · 乘滑索直达 ' + here.line.name : 'E · 乘滑索返回地面';
    },
    key(player) {
      if (ride) return true;
      const here = find(player.pos);
      if (!here) return false;
      const { line, ascending } = here;
      const direction = ascending ? 1 : -1;
      const destination = ascending ? line.top : line.ground;
      ride = {
        ...here, elapsed: 0, start: player.pos.clone(),
        landing: destination.clone().addScaledVector(line.towardRoof, direction * 1.45),
      };
      player.vel.set(0, 0, 0);
      player.yaw = Math.atan2(-line.towardRoof.x * direction, -line.towardRoof.z * direction);
      player.pitch = 0;
      note(ascending ? '滑索上升 · ' + line.name : '滑索下降 · 返回地面');
      return true;
    },
    update(dt, player) {
      if (!ride) return false;
      const { line, ascending, start, landing } = ride;
      ride.elapsed += dt;
      const t = Math.min(1, Math.max(0, (ride.elapsed - TRANSFER_TIME) / line.duration));
      const progress = THREE.MathUtils.smoothstep(t, 0, 1);
      line.path.getPoint(ascending ? progress : 1 - progress, handle);
      handle.y -= CABLE_HEIGHT;
      if (ride.elapsed < TRANSFER_TIME) {
        player.pos.lerpVectors(start, handle, THREE.MathUtils.smoothstep(ride.elapsed, 0, TRANSFER_TIME));
      } else {
        player.pos.copy(handle);
        if (t >= 1) {
          const settled = THREE.MathUtils.smoothstep(ride.elapsed, TRANSFER_TIME + line.duration, 2 * TRANSFER_TIME + line.duration);
          player.pos.lerp(landing, settled);
          if (settled >= 1) {
            ride = null;
            note(ascending ? '已到达 ' + line.name + '楼顶' : '已返回地面');
          }
        }
      }
      player.vel.set(0, 0, 0);
      player.onGround = ride === null;
      camera.position.copy(player.pos);
      camera.position.y += EYE_HEIGHT;
      camera.rotation.set(player.pitch, player.yaw, 0);
      camera.fov += (70 - camera.fov) * Math.min(1, dt * 6);
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
      return true;
    },
    reset() { ride = null; },
  };
}
