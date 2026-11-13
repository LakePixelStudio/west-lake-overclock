import * as THREE from "./wl80-r3-three-three.module.js";
import { RoundedBoxGeometry } from "./wl80-r3-three-geometries-RoundedBoxGeometry.js";
import { groundY } from "./wl80-r3-game-geo.js";
import { signTexture } from "./wl80-r3-game-mats.js";

const TYPES = {
  bank: { name: '充电宝', hp: 32, radius: 4.5, damage: 48, color: 0x4be9f1, centerY: 0.43 },
  pack: { name: '电动车电池', hp: 85, radius: 8.5, damage: 95, color: 0xffa343, centerY: 0.31 },
};

function makeModel(kind) {
  const { name, color } = TYPES[kind], group = new THREE.Group();
  const shell = new THREE.MeshStandardMaterial({ color: kind === 'bank' ? 0x21627a : 0x455465, metalness: 0.36, roughness: 0.38 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x171d24, roughness: 0.7 });
  const accent = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.85, roughness: 0.4 });
  const box = (w, h, d, material, x, y, z, radius = 0.03) => {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, radius), material);
    mesh.position.set(x, y, z);
    mesh.castShadow = mesh.receiveShadow = true;
    group.add(mesh);
  };
  const texture = signTexture([{ text: name }], { w: 512, h: 128, font: 'bold 74px "Microsoft YaHei",sans-serif', bg: '#131a24' });
  const label = new THREE.MeshBasicMaterial({ map: texture });
  const plate = (w, h, x, y, z, pitch = 0, yaw = 0) => {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), label);
    mesh.position.set(x, y, z);
    mesh.rotation.set(pitch, yaw, 0);
    group.add(mesh);
  };

  if (kind === 'bank') {
    box(0.53, 0.87, 0.27, shell, 0, 0.44, 0, 0.07);
    for (const side of [-1, 1]) {
      box(0.43, 0.66, 0.04, trim, 0, 0.44, side * 0.128);
      plate(0.36, 0.09, 0, 0.40, side * 0.151, 0, side < 0 ? Math.PI : 0);
      for (let i = 0; i < 4; i++) box(0.048, 0.027, 0.016, accent, (i - 1.5) * 0.071, 0.61, side * 0.151, 0.006);
    }
    box(0.37, 0.04, 0.22, accent, 0, 0.75, 0, 0.018);
  } else {
    box(1.92, 0.44, 1.14, shell, 0, 0.29, 0, 0.075);
    box(1.56, 0.055, 0.83, trim, 0, 0.512, 0);
    plate(1.05, 0.2625, 0, 0.543, 0, -Math.PI / 2);
    for (const side of [-1, 1]) {
      box(0.26, 0.15, 1.19, trim, side * 0.68, 0.081, 0);
      box(0.091, 0.06, 0.88, accent, side * 0.78, 0.508, 0);
      box(0.33, 0.04, 0.05, accent, 0, 0.34, side * 0.563, 0.016);
      plate(0.78, 0.195, 0, 0.21, side * 0.577, 0, side < 0 ? Math.PI : 0);
    }
  }
  return group;
}

export function createEnergyProps({ solids }, spots, onBurst) {
  const models = { bank: makeModel('bank'), pack: makeModel('pack') };
  const list = spots.map(({ x, z, kind, yaw = 0 }) => {
    const { name, hp, radius, damage, color, centerY } = TYPES[kind];
    const group = models[kind].clone(), y = groundY(x, z);
    group.name = name;
    group.position.set(x, y, z);
    group.rotation.y = yaw;
    const prop = { kind, name, group, center: new THREE.Vector3(x, y + centerY, z), hp, maxHp: hp, radius, damage, color };
    group.traverse((node) => {
      if (node.isMesh) node.userData.energyProp = prop;
    });
    solids.add(group);
    return prop;
  });
  return {
    list,
    hit(prop, damage, by) {
      if (!prop || prop.hp <= 0 || !Number.isFinite(damage) || damage <= 0) return false;
      prop.hp = Math.max(0, prop.hp - damage);
      if (prop.hp > 0) return false;
      prop.group.removeFromParent();
      onBurst(prop, by);
      return true;
    },
    reset() {
      for (const prop of list) {
        prop.hp = prop.maxHp;
        if (!prop.group.parent) solids.add(prop.group);
      }
    },
  };
}
