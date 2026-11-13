// Real West Lake geography at 1:1 scale, hand-reduced from OpenStreetMap (© OpenStreetMap contributors, ODbL).
// Local metres: origin = Pinghai Road at the Hubin lakefront (30.2564 N, 120.1557 E); +x = north, +z = east.
export const LAND_Y = 0.8;

// water outline: east shore N->S, south shore E->W, west edge (inside Yanggongdi) S->N, north shore W->E
export const WATER = [[554,-351],[434,-334],[266,-206],[224,-83],[121,-32],[-40,66],[-168,149],[-286,212],[-349,191],[-429,112],[-488,-9],[-648,-130],[-826,-231],[-866,-108],[-838,10],[-865,-47],
  [-1246,-383],[-1464,-560],[-1705,-576],[-1851,-595],[-2079,-445],[-2213,-418],[-2509,-594],[-2598,-566],[-2630,-630],[-2503,-648],[-2369,-804],[-2313,-867],[-2141,-963],[-2099,-1028],[-2193,-1063],
  [-2274,-1161],[-2347,-1335],[-2469,-1430],[-2633,-1324],[-2705,-1387],[-2748,-1542],[-2835,-1580],[-2944,-1785],[-2915,-1940],[-2900,-2080],[-2450,-2370],[-2110,-2780],[-1900,-2900],[-1580,-2640],
  [-1430,-2630],[-1017,-2740],[-606,-2790],[-300,-2790],[-260,-2700],[-300,-2422],[-240,-2130],[-175,-2045],[50,-1840],[80,-1740],[165,-1560],[410,-1305],[535,-1125],[540,-1040],[590,-950],[595,-860],
  [550,-770],[620,-600],[689,-386]];
export const GUSHAN = [[22,-1208],[-48,-1542],[-64,-1727],[-111,-1866],[-205,-1844],[-267,-1953],[-280,-2084],[-424,-2077],[-456,-2005],[-463,-1812],[-410,-1539],[-187,-1349],[-72,-1275]];
export const ISLETS = [{ x: -1680, z: -1340, r: 150, name: '小瀛洲' }, { x: -909, z: -1515, r: 45, name: '湖心亭' }, { x: -845, z: -1772, r: 32, name: '阮公墩' }];

// causeways and piers: walkable strips across the water; bridges are humps at arc length s
const strip = (pts, half, bridges = []) => { const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])); return { pts, half, bridges, cum, len: cum[cum.length - 1] }; };
export const BAI = strip([[585,-790],[450,-871],[117,-1122],[8,-1204]], 6, [{ s: 62, half: 22, rise: 3 }, { s: 570, half: 18, rise: 2.4 }]);   // Broken Bridge, Jindai Bridge
export const SU = strip([[-250,-2415],[-414,-2347],[-625,-2292],[-1100,-2152],[-1645,-2015],[-2142,-1868],[-2586,-1642],[-2870,-1520]], 8,
  [330, 770, 1210, 1650, 2090, 2500].map((s) => ({ s, half: 18, rise: 2.6 })));                                                              // the six bridges
export const XILING = strip([[-300,-2070],[-215,-2150]], 5, [{ s: 58, half: 20, rise: 2.2 }]);
export const PIER_HUBIN = strip([[-36,76],[-56,26]], 2.5), PIER_LEIFENG = strip([[-2462,-736],[-2412,-712]], 2.5);
export const STRIPS = [BAI, SU, XILING, PIER_HUBIN, PIER_LEIFENG];
export const BOAT_ROUTE = [[-60,16],[-700,-520],[-1900,-800],[-2404,-708]];

// roads: [points, width, surface]
export const ROADS = {
  '湖滨路': [[[565,-276],[466,-241],[428,-168],[143,14],[-280,242],[-377,241],[-483,113],[-493,71],[-610,18],[-706,1],[-911,27]], 12, 'paving'],
  '南山路': [[[-402,237],[-490,116],[-614,28],[-945,29],[-1018,-18],[-1283,-136],[-1450,-242],[-1846,-200],[-1987,-261],[-2106,-365],[-2254,-404],[-2370,-480],[-2429,-494],[-2659,-469],[-2719,-783],[-2687,-973],[-2760,-1407],[-3077,-2029]], 14, 'asphalt'],
  '杨公堤': [[[-3077,-2029],[-2465,-2415],[-2133,-2829],[-2005,-2929],[-1904,-2956],[-1808,-2924],[-1557,-2679],[-1434,-2679],[-1017,-2789],[-606,-2836],[-269,-2842],[-151,-2884]], 12, 'asphalt'],
  '北山街': [[[-151,-2884],[-225,-2749],[-224,-2663],[-273,-2422],[-207,-2142],[-146,-2063],[76,-1858],[105,-1747],[188,-1575],[435,-1322],[465,-1255],[561,-1134],[566,-1047],[596,-985],[620,-874],[620,-840],[577,-757],[661,-567],[807,-238]], 11, 'asphalt'],
  '环城西路': [[[2078,-573],[887,-268],[807,-238],[467,-180]], 18, 'asphalt'],
  '庆春路': [[[467,-180],[471,443],[430,1128],[431,1540]], 24, 'asphalt'],
  '延安路': [[[1803,284],[-548,369],[-1483,421]], 24, 'asphalt'],
  '解放路': [[[-402,237],[-385,248],[-406,380],[-366,1125],[-365,1415]], 20, 'asphalt'],
  '平海路': [[[-17,110],[26,1106]], 14, 'asphalt'],
  '学士路': [[[153,59],[160,348],[182,830]], 10, 'asphalt'],
  '长生路': [[[307,-76],[345,720]], 10, 'asphalt'],
  '仁和路': [[[-148,181],[-142,357],[-125,720]], 10, 'asphalt'],
  '邮电路': [[[-268,372],[-243,955]], 10, 'asphalt'],
  '吴山路': [[[-719,472],[170,456]], 10, 'asphalt'],
  '东坡路': [[[-274,252],[285,227],[465,125]], 12, 'paving'],
  '圣塘路': [[[467,-180],[428,-168]], 12, 'asphalt'],
};
const R = ROADS;
// the scenic loop round the lake that auto-drive follows: Hubin -> Nanshan -> Yanggongdi -> Beishan -> back
export const RING = [...R['湖滨路'][0].slice(2, 6), ...R['南山路'][0], ...R['杨公堤'][0].slice(1), ...R['北山街'][0].slice(1), [640,-209], [480,-183]]; // closes via Huancheng West Road, clear of the Shengtang inlet

// real building footprints around Hubin: [name, x0, x1, z0, z1, height, sign]
export const BLOCKS = [
  ['in77 A', -138, -31, 176, 234, 24, 'in77 · A'], ['in77 B', -262, -160, 262, 345, 24, 'in77 · B'], ['in77 D', -74, -27, 253, 335, 26, 'in77 · D'], ['东坡大世界', -137, -80, 255, 340, 22, '东坡大世界'],
  ['in77 E', -375, -280, 270, 360, 26, 'in77 · E'], ['in77 C1', -133, -17, 385, 451, 30, 'in77 · C1'], ['in77 C2', -262, -147, 385, 455, 30, 'in77 · C2'], ['in77 C3', -386, -277, 391, 447, 30, 'in77 · C3'],
  ['湖滨in88', 7, 145, 158, 218, 22, '湖滨 in88'], ['Apple 西湖', 8, 36, 283, 314, 15, 'Apple 西湖'], ['工联CC', 11, 137, 375, 448, 34, '工联CC'], ['工联CC二期', 80, 159, 462, 538, 40, ''],
  ['解百', -537, -420, 397, 461, 36, '解百'], ['解百新世纪', -528, -417, 474, 561, 60, '解百新世纪'], ['涌金广场', -858, -734, 229, 364, 70, '涌金广场'], ['杭州嘉里中心', 601, 765, 103, 293, 80, '嘉里中心 KERRY'],
];
export const POI = { leifeng: [-2784, -654], baochu: [770, -1186], chenghuang: [-1819, 606], pavilion: [-10, -1245], fountain: [-34, 3], qjnt: [-1300, 5300], lakeCentre: [-1150, -1450] };

// ---- helpers
export function pip(poly, x, z) { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > z) !== (b[1] > z) && x < (b[0] - a[0]) * (z - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; }
// nearest point on a polyline: distance d and arc length s
export function nearest(pts, cum, x, z) {
  let best = { d: 1e9, s: 0, i: 0 };
  for (let i = 0; i < pts.length - 1; i++) {
    const ax = pts[i][0], az = pts[i][1], dx = pts[i + 1][0] - ax, dz = pts[i + 1][1] - az, L2 = dx * dx + dz * dz, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / L2));
    const d = Math.hypot(x - ax - dx * t, z - az - dz * t); if (d < best.d) best = { d, s: (cum ? cum[i] : 0) + Math.sqrt(L2) * t, i };
  }
  return best;
}
export function pointAt(st, s) { // -> [x, z, dirx, dirz]
  s = Math.max(0, Math.min(st.len, s)); let i = 0; while (i < st.pts.length - 2 && st.cum[i + 1] < s) i++;
  const a = st.pts[i], b = st.pts[i + 1], L = st.cum[i + 1] - st.cum[i], t = (s - st.cum[i]) / L;
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, (b[0] - a[0]) / L, (b[1] - a[1]) / L];
}
export const makeStrip = strip;
export const hump = (st, s) => { let h = 0; for (const b of st.bridges) if (Math.abs(s - b.s) < b.half) h = Math.max(h, b.rise * 0.5 * (1 + Math.cos(Math.PI * (s - b.s) / b.half))); return h; };
const near = (st, x, z, pad) => { const n = nearest(st.pts, st.cum, x, z); return n.d <= st.half + pad ? n : null; };
const CAUSE = [BAI, SU, XILING];
export function groundY(x, z) {
  if (x < 700 && z < -700) for (const st of CAUSE) { const n = near(st, x, z, 1); if (n) return LAND_Y + hump(st, n.s); }
  return LAND_Y;
}
export function walkable(x, z) {
  if (!pip(WATER, x, z)) return true;
  for (const st of STRIPS) if (near(st, x, z, -0.5)) return true;
  if (pip(GUSHAN, x, z)) return true;
  for (const i of ISLETS) if (Math.hypot(x - i.x, z - i.z) < i.r - 1) return true;
  return false;
}
// paved city ground east of Hubin Road (also where park trees are not planted)
export const CITY = [[565, -290], [466, -255], [428, -182], [143, 0], [-280, 228], [-377, 227], [-483, 99], [-610, 30], [-911, 40], [-911, 9000], [2500, 9000], [2500, -560], [887, -282], [807, -252]];
// hills that carry a landmark: [x, z, radius, height]
export const MOUNDS = { leifeng: [-2800, -640, 85, 40], baochu: [800, -1250, 180, 70], chenghuang: [-1819, 606, 240, 60] };
// point-in-polygon for a flat [x0, z0, x1, z1, ...] outline
export function pipFlat(p, x, z) { let c = false; for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) if ((p[i + 1] > z) !== (p[j + 1] > z) && x < (p[j] - p[i]) * (z - p[i + 1]) / (p[j + 1] - p[i + 1]) + p[i]) c = !c; return c; }
// is a disc of radius r touching the outline? (centre plus four rim points: plenty for walking and driving)
export const discInPoly = (p, x, z, r) => pipFlat(p, x, z) || pipFlat(p, x + r, z) || pipFlat(p, x - r, z) || pipFlat(p, x, z + r) || pipFlat(p, x, z - r);
