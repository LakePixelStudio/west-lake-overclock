// Sky, sun, lake water and the hills that ring the lake on its south, west and north sides (the east is the city).
import * as THREE from "./wl80-r3-three-three.module.js";
import { Sky } from "./wl80-r3-three-objects-Sky.js";
import { Water } from "./wl80-r3-three-objects-Water.js";
import { fbm, waterNormals } from "./wl80-r3-game-mats.js";
import { POI } from "./wl80-r3-game-geo.js";

export const SUN = new THREE.Vector3(-0.5, 0.62, -0.6).normalize(); // mid-afternoon sun in the south-west
export const FOG = 0.00021, FOG_COLOR = new THREE.Color(0.62, 0.69, 0.76);

export function buildEnv(scene, renderer) {
  scene.fog = new THREE.FogExp2(FOG_COLOR, FOG);
  const sky = new Sky(); sky.scale.setScalar(24000);
  const su = sky.material.uniforms;
  su.turbidity.value = 3.2; su.rayleigh.value = 1.1; su.mieCoefficient.value = 0.004; su.mieDirectionalG.value = 0.86; su.sunPosition.value.copy(SUN);
  su.cloudCoverage.value = 0.3; su.cloudDensity.value = 0.45; su.cloudElevation.value = 0.5;
  let skyEnvironment;
  scene.environmentIntensity = 0.65; scene.add(sky);

  const sun = new THREE.DirectionalLight(0xffeccf, 4.4);
  sun.castShadow = true;
  const sc = sun.shadow.camera; sc.left = sc.bottom = -90; sc.right = sc.top = 90; sc.near = 1; sc.far = 520;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.06;
  scene.add(sun, sun.target);
  const fill = new THREE.HemisphereLight(0xcfdcf0, 0x57503f, 1.0); scene.add(fill);

  const water = new Water(new THREE.PlaneGeometry(24000, 24000), {
    textureWidth: 1024, textureHeight: 1024, waterNormals: waterNormals(), sunDirection: SUN, sunColor: 0xfff4e0, waterColor: 0x1d4a44, distortionScale: 2.2, fog: true,
  });
  water.rotation.x = -Math.PI / 2; water.material.uniforms.size.value = 5; scene.add(water);
  const renderReflection = water.onBeforeRender;
  water.material.fragmentShader = water.material.fragmentShader
    .replace('vec3 worldToEye = eye-worldPosition.xyz;', 'vec3 worldToEye = cameraPosition - worldPosition.xyz;')
    .replace(
      'vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );',
      `#ifdef LAKE_REFLECTIONS
        vec3 reflectionSample = texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ).rgb;
        #else
        vec3 reflectionSample = mix( vec3( 0.19, 0.30, 0.36 ), vec3( 0.36, 0.51, 0.65 ), clamp( eyeDirection.y, 0.0, 1.0 ) );
        #endif`,
    );
  let quality;
  function setQuality(next) {
    if (next === quality) return;
    quality = next;
    const reflections = quality === 'high';
    if (reflections && !skyEnvironment) {
      const skyScene = new THREE.Scene();
      skyScene.add(sky.clone());
      const pm = new THREE.PMREMGenerator(renderer);
      try { skyEnvironment = pm.fromScene(skyScene, 0, 0.1, 20000); }
      catch (error) { console.warn('Sky lighting unavailable', error); }
      finally { pm.dispose(); }
    }
    scene.environment = reflections ? (skyEnvironment?.texture ?? null) : null;
    fill.intensity = scene.environment ? 0.55 : 1.0;
    if (reflections) water.material.defines.LAKE_REFLECTIONS = 1;
    else delete water.material.defines.LAKE_REFLECTIONS;
    water.material.needsUpdate = true;
    const size = reflections ? 2048 : 1024;
    sun.shadow.mapSize.set(size, size);
    sun.shadow.dispose();
    sun.shadow.map = sun.shadow.mapPass = null;
    sun.shadow.needsUpdate = true;
  }
  water.onBeforeRender = (...args) => {
    if (quality === 'high' && !args[1].overrideMaterial) renderReflection.apply(water, args);
  };
  setQuality('performance');

  // three ranks of hills: Nanshan in the south, round the west, to Baoshi and Geling in the north
  const [cx0, cz0] = POI.lakeCentre;
  function ridge(radius, a0, a1, base, amp, hex, seed, freq) {
    const N = 420, pos = [], idx = [];
    for (let i = 0; i <= N; i++) {
      const t = i / N, a = a0 + (a1 - a0) * t, edge = Math.min(1, Math.min(t, 1 - t) * 9);
      const h = (base + amp * (fbm(t, 0.3, freq, 1, 5, seed) - 0.3) * 1.6) * edge, cx = Math.cos(a), cz = Math.sin(a);
      for (const [dr, k] of [[-2.4, 0], [-1.3, 0.55], [-0.5, 0.9], [0, 1], [1.2, 0]]) pos.push(cx0 + cx * (radius + dr * h), h * k - 0.5, cz0 + cz * (radius + dr * h));
      if (i < N) for (let j = 0; j < 4; j++) { const p = i * 5 + j; idx.push(p, p + 5, p + 1, p + 1, p + 5, p + 6); }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    scene.add(new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: hex, roughness: 1, side: THREE.DoubleSide })));
  }
  ridge(2400, 2.62, 6.42, 60, 80, 0x243b1e, 311, 30);
  ridge(3050, 2.5, 6.5, 130, 140, 0x2a4224, 321, 22);
  ridge(3900, 2.4, 6.6, 210, 220, 0x30492b, 331, 14);

  return {
    sun, water, sky, setQuality,
    update(t, dt, focus) {
      water.material.uniforms.time.value += dt * 0.7; su.time.value = t;
      const fx = Math.round(focus.x / 4) * 4, fy = Math.max(0, Math.round(focus.y / 4) * 4), fz = Math.round(focus.z / 4) * 4;
      sun.target.position.set(fx, fy, fz); sun.position.copy(sun.target.position).addScaledVector(SUN, 260);
    },
  };
}
