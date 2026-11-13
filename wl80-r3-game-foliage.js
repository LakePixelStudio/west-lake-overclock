// Broadleaf tree: a branching trunk under a canopy of alpha-tested leaf-cluster cards. Cards share outward-pointing normals so the
// crown shades like one soft volume; inner and lower cards are darkened (cheap ambient occlusion); the crown sways in the wind.
import * as THREE from "./wl80-r3-three-three.module.js";
import { mergeGeometries } from "./wl80-r3-three-utils-BufferGeometryUtils.js";
import { worldUV } from "./wl80-r3-game-mats.js";

function leafClusterTexture() { // neutral-toned leaves; each tree instance tints them, so one texture serves camphor, plane and peach blossom
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
  for (let i = 0; i < 300; i++) {
    const a = Math.random() * 6.3, d = Math.sqrt(Math.random()) * 104, L = 80 + Math.random() * 120, w = 4 + Math.random() * 2.6, l = 9 + Math.random() * 6;
    g.save(); g.translate(S / 2 + Math.cos(a) * d, S / 2 + Math.sin(a) * d); g.rotate(Math.random() * 6.3);
    g.fillStyle = `rgb(${L * 0.93 | 0},${L | 0},${L * 0.72 | 0})`;
    g.beginPath(); g.moveTo(-l, 0); g.quadraticCurveTo(0, -w, l, 0); g.quadraticCurveTo(0, w, -l, 0); g.fill();
    g.strokeStyle = `rgba(${L * 0.6 | 0},${L * 0.7 | 0},${L * 0.45 | 0},.9)`; g.lineWidth = 0.7; g.beginPath(); g.moveTo(-l, 0); g.lineTo(l, 0); g.stroke();
    g.restore();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

export function makeBroadleaf(M, rnd, uTime) {
  const C = new THREE.Vector3(0, 6.4, 0), RX = 3.4, RY = 2.6, P = [], U = [], N = [], K = [], I = [];
  const tips = [];
  for (let i = 0; i < 170; i++) {
    const th = rnd(0, 6.283), cy = rnd(-0.45, 1), sy = Math.sqrt(1 - cy * cy), dir = new THREE.Vector3(Math.cos(th) * sy, cy, Math.sin(th) * sy), k = 0.45 + 0.55 * Math.sqrt(rnd());
    const pos = new THREE.Vector3(dir.x * RX * k, dir.y * RY * k, dir.z * RX * k).add(C), size = rnd(0.85, 1.25);
    // card faces roughly outward, tipped at random so no two line up
    const n = dir.clone().add(new THREE.Vector3(rnd(-0.6, 0.6), rnd(-0.6, 0.6), rnd(-0.6, 0.6))).normalize(), t = new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)).cross(n).normalize(), b = n.clone().cross(t);
    const sn = dir.clone().multiplyScalar(0.8).add(new THREE.Vector3(0, 0.4, 0)).normalize(), shade = (0.42 + 0.58 * k) * (0.72 + 0.28 * (dir.y * 0.5 + 0.5)), base = P.length / 3;
    for (const [a, c] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { P.push(pos.x + (t.x * a + b.x * c) * size, pos.y + (t.y * a + b.y * c) * size, pos.z + (t.z * a + b.z * c) * size); U.push(a * 0.5 + 0.5, c * 0.5 + 0.5); N.push(sn.x, sn.y, sn.z); K.push(shade, shade, shade); }
    I.push(base, base + 1, base + 2, base, base + 2, base + 3, base, base + 2, base + 1, base, base + 3, base + 2); // both windings: same normal seen from either side
    if (i % 28 === 0) tips.push(pos.clone().lerp(C, 0.35));
  }
  const leaf = new THREE.BufferGeometry();
  leaf.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); leaf.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  leaf.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); leaf.setAttribute('color', new THREE.Float32BufferAttribute(K, 3)); leaf.setIndex(I);
  // trunk with a slight lean, forking into limbs that reach into the crown
  const wood = [new THREE.CylinderGeometry(0.17, 0.3, 3.7, 9).translate(0, 1.85, 0)];
  for (const tip of tips) wood.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0, 3.3, 0), new THREE.Vector3(tip.x * 0.35, 4.6, tip.z * 0.35), tip]), 6, 0.075, 6));
  const trunk = worldUV(mergeGeometries(wood), 1.2);

  const map = leafClusterTexture();
  const sway = (s) => { s.uniforms.uTime = uTime; s.vertexShader = 'uniform float uTime;\n' + s.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
      vec4 wp=instanceMatrix*vec4(position,1.); float sw=max(0.,position.y-3.2)*.045;
      transformed.x+=sin(uTime*1.1+wp.x*.21+wp.z*.13+position.y)*sw; transformed.z+=cos(uTime*.8+wp.z*.19+position.x)*sw*.8;
      #endif`); };
  const leafMat = new THREE.MeshStandardMaterial({ map, alphaTest: 0.25, vertexColors: true, roughness: 0.9 }); leafMat.onBeforeCompile = sway;
  const depthMat = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map, alphaTest: 0.25 }); depthMat.onBeforeCompile = sway;
  return { leaf, trunk, leafMat, depthMat };
}
