import * as THREE from "./wl80-r3-three-three.module.js";
import { GLTFLoader } from "./wl80-r3-three-loaders-GLTFLoader.js";

const types = [
  { id: 'tesla', name: 'Tesla Model 3', asset: 'tesla-model', wheelRadius: 0.335, brake: 'breaklight_l' },
  { id: 'byd', name: '比亚迪海豹', asset: 'byd-seal', wheelRadius: 0.352 },
  { id: 'toyota', name: '丰田凯美瑞', asset: 'toyota-camry', wheelRadius: 0.330, brake: 'CAMRY_luz2' },
];
const wheelNames = ['wheel_fl', 'wheel_fr', 'wheel_rl', 'wheel_rr'];

export function createVehicleModels() {
  const loader = new GLTFLoader(), templates = new Map();

  async function load(car, type) {
    if (!templates.has(type.id)) {
      const url = new URL('./wl80-r3-game-vehicle-assets-' + type.asset + '.glb', import.meta.url);
      templates.set(type.id, loader.loadAsync(url.href).then(({ scene }) => scene));
    }
    const model = (await templates.get(type.id)).clone();
    const spin = [], pivots = [];
    let tail;
    model.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = node.receiveShadow = true;
      if (node.material.name === type.brake) {
        if (!tail) {
          tail = node.material.clone();
          tail.emissive.set(0x9c1208);
          tail.emissiveMap = tail.map;
          tail.emissiveIntensity = 0.15;
        }
        node.material = tail;
      }
    });
    for (const [i, name] of wheelNames.entries()) {
      const wheel = model.getObjectByName(name);
      if (!wheel) throw new Error('Missing wheel ' + name + ' in ' + type.asset);
      const pivot = new THREE.Group();
      pivot.position.copy(wheel.position);
      model.add(pivot); pivot.add(wheel);
      wheel.position.set(0, 0, 0);
      spin.push(wheel);
      if (i < 2) pivots.push(pivot);
    }
    // The chassis anchor includes the old procedural car's eight-centimetre offset.
    model.position.y = -0.08;
    car.g.add(model);
    Object.assign(car, { spin, pivots, tail, wheelRadius: type.wheelRadius });
    return model;
  }

  return { types, load };
}
