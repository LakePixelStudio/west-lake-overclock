// Touch controls for phones and tablets, and the map (corner minimap; M or a tap opens the full lake map).
import { WATER, GUSHAN, ISLETS, ROADS, RING, STRIPS, BLOCKS, POI, BOAT_ROUTE } from "./wl80-r3-game-geo.js";
import { FULL_LINE_1, METRO_COLOR, STATIONS } from "./wl80-r3-game-metro-data.js";

const css = `
#hud{z-index:1}#overlay{z-index:2}
#map{position:fixed;right:18px;top:18px;width:190px;height:190px;border-radius:50%;border:2px solid rgba(255,255,255,.55);box-shadow:0 2px 12px rgba(0,0,0,.5);pointer-events:auto;cursor:pointer;background:#27402a}
#map.big{right:50%;top:50%;transform:translate(50%,-50%);width:min(86vmin,760px);height:min(86vmin,760px);border-radius:10px}
#line-map{position:fixed;z-index:2;top:calc(50% - min(43vmin,380px) + 10px);right:calc(50% - min(43vmin,380px) + 10px);padding:6px 10px;border:1px solid #d58a99;border-radius:5px;background:#281820;color:#fff;font:600 13px "Microsoft YaHei",sans-serif;pointer-events:auto;cursor:pointer}
#touch{position:fixed;inset:0;display:none;touch-action:none;-webkit-user-select:none;user-select:none}
#touch.on{display:block}
#stick{position:absolute;left:5vw;bottom:9vh;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.4)}
#stick i{position:absolute;left:50%;top:50%;width:64px;height:64px;margin:-32px;border-radius:50%;background:rgba(255,255,255,.55)}
.tb{position:absolute;min-width:76px;height:76px;padding:0 10px;border-radius:38px;border:2px solid rgba(255,255,255,.55);background:rgba(10,14,20,.45);color:#fff;font:600 14px "Segoe UI","Microsoft YaHei",sans-serif;letter-spacing:.06em}
.tb.act{background:rgba(255,176,0,.75);color:#111}.tb.hide{display:none}
#bGas{right:5vw;bottom:9vh;width:104px;height:104px;border-radius:52px;font-size:17px}#bBrake{right:calc(5vw + 118px);bottom:7vh}#bDrift{right:5vw;bottom:calc(9vh + 118px)}
#bAuto{right:calc(5vw + 100px);bottom:calc(9vh + 104px)}#bFire{right:5vw;bottom:9vh;width:104px;height:104px;border-radius:52px;font-size:17px}#bJump{right:calc(5vw + 118px);bottom:7vh}
#bUse{right:5vw;bottom:calc(9vh + 208px)}#bSwap{right:calc(5vw + 100px);bottom:calc(9vh + 104px)}#bAim{right:5vw;bottom:calc(9vh + 118px)}
@media (pointer:coarse){#osd{font-size:10px!important}#right,#left{bottom:auto!important;top:230px}#left{top:150px}.big{font-size:22px!important}#map{width:132px;height:132px}}`;

export function createUI({ keys, onLook, onUse, onSwap }) {
  document.head.appendChild(Object.assign(document.createElement('style'), { textContent: css }));
  const hud = document.getElementById('hud'), map = Object.assign(document.createElement('canvas'), { id: 'map', width: 760, height: 760 }); hud.appendChild(map);
  const lineButton = Object.assign(document.createElement('button'), { id: 'line-map', type: 'button', hidden: true });
  hud.appendChild(lineButton);
  const touch = Object.assign(document.createElement('div'), { id: 'touch' }); document.body.appendChild(touch);
  touch.innerHTML = '<div id="stick"><i></i></div>' + [['bGas', '加速 GAS'], ['bBrake', 'BRAKE'], ['bDrift', '漂移 DRIFT'], ['bAuto', 'FSD'], ['bFire', 'FIRE'], ['bJump', 'JUMP'], ['bAim', 'AIM'], ['bSwap', '换工具'], ['bUse', 'E']].map(([id, t]) => `<button class="tb" id="${id}">${t}</button>`).join('');
  const $ = (id) => document.getElementById(id), ui = { touch: matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window, moveX: 0, moveY: 0, fire: false, aim: false, big: false, fullLine: false, fsdTap: false };
  if (ui.touch) {
    touch.classList.add('on');
    $('trace-team').textContent = '反垄断追踪';
  }

  // joystick: move on foot, steer when driving
  const stick = $('stick'), knob = stick.firstChild; let sid = null;
  const stickMove = (t) => { const r = stick.getBoundingClientRect(), dx = (t.clientX - r.left - 75) / 60, dy = (t.clientY - r.top - 75) / 60, l = Math.max(1, Math.hypot(dx, dy)); ui.moveX = dx / l; ui.moveY = -dy / l; knob.style.transform = `translate(${ui.moveX * 44}px,${-ui.moveY * 44}px)`; };
  stick.addEventListener('touchstart', (e) => { e.preventDefault(); sid = e.changedTouches[0].identifier; stickMove(e.changedTouches[0]); }, { passive: false });
  stick.addEventListener('touchmove', (e) => { e.preventDefault(); for (const t of e.changedTouches) if (t.identifier === sid) stickMove(t); }, { passive: false });
  const stickEnd = (e) => { for (const t of e.changedTouches) if (t.identifier === sid) { sid = null; ui.moveX = ui.moveY = 0; knob.style.transform = ''; } };
  stick.addEventListener('touchend', stickEnd); stick.addEventListener('touchcancel', stickEnd);
  // drag anywhere else to look
  const looks = new Map();
  touch.addEventListener('touchstart', (e) => { for (const t of e.changedTouches) if (t.target === touch) looks.set(t.identifier, [t.clientX, t.clientY]); }, { passive: true });
  touch.addEventListener('touchmove', (e) => { e.preventDefault(); for (const t of e.changedTouches) { const p = looks.get(t.identifier); if (p) { onLook((t.clientX - p[0]) * 2.2, (t.clientY - p[1]) * 2.2); looks.set(t.identifier, [t.clientX, t.clientY]); } } }, { passive: false });
  const lookEnd = (e) => { for (const t of e.changedTouches) looks.delete(t.identifier); }; touch.addEventListener('touchend', lookEnd); touch.addEventListener('touchcancel', lookEnd);
  // buttons: hold = key down
  const hold = (id, down, up) => { const b = $(id); const d = (e) => { e.preventDefault(); e.stopPropagation(); b.classList.add('act'); down(); }, u = (e) => { e.preventDefault(); b.classList.remove('act'); up && up(); };
    b.addEventListener('touchstart', d, { passive: false }); b.addEventListener('touchend', u); b.addEventListener('touchcancel', u); b.addEventListener('mousedown', d); b.addEventListener('mouseup', u); };
  hold('bGas', () => (keys.KeyW = true), () => (keys.KeyW = false)); hold('bBrake', () => (keys.KeyS = true), () => (keys.KeyS = false)); hold('bDrift', () => (keys.Space = true), () => (keys.Space = false));
  hold('bJump', () => (keys.Space = true), () => (keys.Space = false)); hold('bFire', () => (ui.fire = true), () => (ui.fire = false)); hold('bAim', () => (ui.aim = !ui.aim));
  hold('bAuto', () => (ui.fsdTap = true)); hold('bUse', onUse); hold('bSwap', onSwap);
  const updateMapButton = () => {
    lineButton.hidden = !ui.big;
    lineButton.textContent = (ui.fullLine ? '返回西湖地图' : '查看 1 号线全线') + (ui.touch ? '' : ' · L');
    lineButton.setAttribute('aria-pressed', String(ui.fullLine));
  };
  map.addEventListener('click', () => {
    ui.big = !ui.big; ui.fullLine = false; map.classList.toggle('big', ui.big); updateMapButton();
  });
  lineButton.addEventListener('click', () => { ui.fullLine = !ui.fullLine; updateMapButton(); });
  addEventListener('keydown', (e) => {
    if (e.repeat) return;
    if (e.code === 'KeyM') map.click();
    if (e.code === 'KeyL' && ui.big) lineButton.click();
  });

  // which buttons show depends on what the player is doing
  let previousMode;
  ui.mode = (car, riding, prompt, indoors = false, swimming = false, wetEquipment = false) => {
    // The input handlers also change these classes when a button is released.
    $('bAuto').classList.toggle('act', !!car?.auto);
    $('bAim').classList.toggle('act', ui.aim);
    const mode = [!!car, car?.type.id === 'tesla', !!car?.auto, !!riding, !!prompt, indoors, swimming, wetEquipment].join('|');
    if (mode === previousMode) return;
    previousMode = mode;
    const show = (id, on) => $(id).classList.toggle('hide', !on);
    for (const id of ['bGas', 'bBrake', 'bDrift']) show(id, !!car);
    const onFoot = !car && !riding && !indoors;
    for (const id of ['bFire', 'bAim']) show(id, onFoot && !wetEquipment);
    show('bJump', onFoot && !swimming);
    show('bSwap', onFoot);
    show('bAuto', car?.type.id === 'tesla');
    $('bAuto').textContent = car?.auto ? 'FSD ✓' : 'FSD';
    $('bUse').textContent = car ? '下车 EXIT' : '互动 USE'; show('bUse', !!car || !!prompt || riding); stick.style.display = riding ? 'none' : '';
  };

  // ---- map
  const g = map.getContext('2d');
  ui.drawMap = (s) => {
    if (ui.fullLine) { drawLineOverview(g); return; }
    const S = 760, span = ui.big ? 9200 : 950, cx = ui.big ? POI.lakeCentre[0] : s.x, cz = ui.big ? 1280 : s.z, k = S / span;
    const X = (z) => S / 2 + (z - cz) * k, Yp = (x) => S / 2 - (x - cx) * k;
    const path = (pts, close) => { g.beginPath(); pts.forEach(([x, z], i) => (i ? g.lineTo(X(z), Yp(x)) : g.moveTo(X(z), Yp(x)))); if (close) g.closePath(); };
    g.fillStyle = '#2f4a2c'; g.fillRect(0, 0, S, S);
    g.fillStyle = '#3d4348'; g.fillRect(X(Math.max(cz - span, 230)), 0, S, S);                                         // city tint east of Hubin
    path(WATER, true); g.fillStyle = '#3f86a8'; g.fill();
    g.fillStyle = '#2f4a2c'; path(GUSHAN, true); g.fill(); for (const i of ISLETS) { g.beginPath(); g.arc(X(i.z), Yp(i.x), i.r * k, 0, 7); g.fill(); }
    g.lineCap = g.lineJoin = 'round';
    for (const st of STRIPS) { path(st.pts); g.strokeStyle = '#cfc7ae'; g.lineWidth = Math.max(2, st.half * 2 * k); g.stroke(); }
    for (const [pts, w] of Object.values(ROADS)) { path(pts); g.strokeStyle = '#e8e4d8'; g.lineWidth = Math.max(1.5, w * k); g.stroke(); }
    path([...RING, RING[0]]); g.strokeStyle = s.fsd ? '#58a6ff' : 'rgba(255,176,0,.9)'; g.lineWidth = s.fsd ? 5 : ui.big ? 3 : 2; g.setLineDash(s.fsd ? [] : [10, 8]); g.stroke(); g.setLineDash([]);
    path(BOAT_ROUTE); g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = 1.5; g.setLineDash([4, 6]); g.stroke(); g.setLineDash([]);
    g.fillStyle = '#8b3a3a'; for (const [, x0, x1, z0, z1] of BLOCKS) g.fillRect(X(z0), Yp(x1), (z1 - z0) * k, (x1 - x0) * k);
    path(FULL_LINE_1.points); g.strokeStyle = METRO_COLOR; g.lineWidth = ui.big ? 5 : 4; g.stroke();
    const fs = ui.big ? 17 : 22; g.font = `600 ${fs}px "Microsoft YaHei","Segoe UI",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    const label = (t, x, z, col = '#fff') => { g.fillStyle = 'rgba(0,0,0,.55)'; g.fillText(t, X(z) + 1, Yp(x) + 1); g.fillStyle = col; g.fillText(t, X(z), Yp(x)); };
    for (const st of STATIONS) {
      for (const exit of st.exits) {
        const size = ui.big ? 4 : 7;
        g.fillStyle = '#ffe1e4'; g.fillRect(X(exit.z) - size / 2, Yp(exit.x) - size / 2, size, size);
        if (!ui.big && Math.hypot(exit.x - s.x, exit.z - s.z) < 160) {
          label(exit.ref, exit.x - 13, exit.z, '#ffe1e4');
        }
      }
      g.fillStyle = '#fff0f0'; g.beginPath(); g.arc(X(st.z), Yp(st.x), ui.big ? 5 : 7, 0, Math.PI * 2); g.fill();
      g.strokeStyle = METRO_COLOR; g.lineWidth = 3; g.stroke();
      label('1 ' + st.name, st.x + (ui.big ? 70 : 26), st.z, '#ffb3b3');
    }
    for (const roof of s.rooftops || []) {
      const x = X(roof.groundZ), y = Yp(roof.groundX), r = ui.big ? 6 : 8;
      if (x < 12 || x > S - 12 || y < 12 || y > S - 12) continue;
      g.beginPath(); g.moveTo(x, y - r); g.lineTo(x + r, y + r); g.lineTo(x - r, y + r); g.closePath();
      g.fillStyle = '#ffd45f'; g.strokeStyle = '#30240d'; g.lineWidth = 2; g.fill(); g.stroke();
      label(roof.name + (ui.big ? '' : ' · 滑索'), roof.groundX - (ui.big ? 170 : 24), roof.groundZ, '#ffe6a3');
    }
    for (const [t, p] of [['雷峰塔', POI.leifeng], ['保俶塔', POI.baochu], ['断桥', [569, -801]], ['平湖秋月', POI.pavilion], ['苏堤', [-1400, -2080]], ['白堤', [280, -1000]], ['in77', [-90, 250]], ['码头', [-56, 26]], ['码头', [-2412, -712]], ['孤山', [-230, -1700]], ['三潭印月', [-1680, -1340]]]) label(t, p[0], p[1], '#ffe9b0');
    if (ui.big) { label('钱江新城', -1120, POI.qjnt[1], '#ffe9b0'); g.font = '12px sans-serif'; g.fillStyle = 'rgba(255,255,255,.7)'; g.textAlign = 'left'; g.fillText('map data © OpenStreetMap contributors', 10, S - 12); g.fillText('N ↑', 12, 18); }
    for (const c of s.cars) { g.fillStyle = '#6fd3ff'; g.fillRect(X(c.pos.z) - 5, Yp(c.pos.x) - 5, 10, 10); }
    for (const m of s.mates || []) { g.fillStyle = '#30d8ff'; g.beginPath(); g.arc(X(m.pos.z), Yp(m.pos.x), ui.big ? 4 : 6, 0, 7); g.fill(); }   // teammates
    if (s.ferry) { g.fillStyle = '#fff'; g.beginPath(); g.arc(X(s.ferry.z), Yp(s.ferry.x), 6, 0, 7); g.fill(); }
    const mark = (point, tracked) => {
      if (!point) return;
      const x = X(point.z), y = Yp(point.x), r = ui.big ? 11 : 17;
      if (ui.big ? x < r || x > S - r || y < r || y > S - r : Math.hypot(x - S / 2, y - S / 2) > S / 2 - r) return;
      const color = tracked ? '#e7ccff' : '#ffad59';
      g.beginPath();
      if (tracked) {
        g.moveTo(x, y - r); g.lineTo(x + r, y); g.lineTo(x, y + r); g.lineTo(x - r, y); g.closePath();
      } else {
        g.arc(x, y, r, 0, Math.PI * 2);
      }
      g.fillStyle = '#261a34'; g.fill();
      g.strokeStyle = '#23182c'; g.lineWidth = 9; g.stroke();
      g.strokeStyle = color; g.lineWidth = 4; g.stroke();
      if (tracked && point.color != null) {
        g.fillStyle = typeof point.color === 'number' ? '#' + point.color.toString(16).padStart(6, '0') : point.color;
        g.beginPath(); g.arc(x, y, r * .36, 0, Math.PI * 2); g.fill();
      }
      if (point.label) {
        g.font = `700 ${ui.big ? 18 : 34}px "Microsoft YaHei","Segoe UI",sans-serif`;
        g.textAlign = x < 125 ? 'left' : x > S - 125 ? 'right' : 'center';
        g.strokeStyle = '#23182c'; g.lineWidth = 6;
        const below = y < 75 || (!tracked && y < S - 75);
        const textY = y + (below ? 1 : -1) * (r + (ui.big ? 12 : 23));
        g.strokeText(point.label, x, textY); g.fillStyle = color; g.fillText(point.label, x, textY);
      }
    };
    mark(s.hotspot, false);
    mark(s.trace, true);
    g.save(); g.translate(X(s.z), Yp(s.x)); g.rotate(-s.yaw); g.fillStyle = '#ffb000'; g.strokeStyle = '#111'; g.lineWidth = 2; g.beginPath(); g.moveTo(0, -16); g.lineTo(10, 11); g.lineTo(0, 5); g.lineTo(-10, 11); g.closePath(); g.fill(); g.stroke(); g.restore();
  };
  return ui;
}

const playableStops = new Set(STATIONS.map(({ name }) => name));
const lineXs = FULL_LINE_1.points.map(([x]) => x), lineZs = FULL_LINE_1.points.map(([, z]) => z);
const lineNorth = Math.max(...lineXs), lineEast = Math.max(...lineZs), lineWest = Math.min(...lineZs);
const lineScale = Math.min(676 / (lineEast - lineWest), 288 / (lineNorth - Math.min(...lineXs)));

function drawLineOverview(g) {
  const xMap = (z) => 380 + (z - (lineWest + lineEast) / 2) * lineScale;
  const yMap = (x) => 102 + (lineNorth - x) * lineScale;
  const dot = (x, y, playable) => {
    g.fillStyle = playable ? '#fff3d7' : '#bf9da5';
    g.beginPath(); g.arc(x, y, playable ? 5.5 : 3.2, 0, 2 * Math.PI); g.fill();
  };
  g.fillStyle = '#231923'; g.fillRect(0, 0, 760, 760);
  g.textAlign = 'left'; g.textBaseline = 'middle';
  g.fillStyle = '#fff1f3'; g.font = '700 30px "Microsoft YaHei",sans-serif'; g.fillText('杭州地铁 1 号线', 35, 43);
  g.fillStyle = '#d7bdc5'; g.font = '17px "Microsoft YaHei",sans-serif'; g.fillText('湘湖 → 萧山国际机场', 36, 77);
  g.beginPath();
  FULL_LINE_1.points.forEach(([x, z], i) => (i ? g.lineTo(xMap(z), yMap(x)) : g.moveTo(xMap(z), yMap(x))));
  g.strokeStyle = METRO_COLOR; g.lineWidth = 4; g.lineCap = g.lineJoin = 'round'; g.stroke();
  for (const { name, x, z } of FULL_LINE_1.stops) dot(xMap(z), yMap(x), playableStops.has(name));
  g.fillStyle = '#573d4b'; g.fillRect(35, 400, 690, 1);
  dot(42, 428, true); g.fillStyle = '#fff3d7'; g.font = '600 18px "Microsoft YaHei",sans-serif'; g.fillText('游戏内可搭乘', 58, 428);
  FULL_LINE_1.stops.forEach(({ name }, i) => {
    const playable = playableStops.has(name), x = 42 + Math.floor(i / 11) * 230, y = 466 + (i % 11) * 25;
    dot(x, y, playable);
    g.fillStyle = playable ? '#fff3d7' : '#decbd3';
    g.font = `${playable ? 700 : 400} 18px "Microsoft YaHei",sans-serif`;
    g.fillText(name, x + 15, y);
  });
}
