import { groundY } from "./wl80-r3-game-geo.js";

const STEP = 6;
const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

export function createBattleNavigation(blocked) {
  const key = (i, j) => i * 100003 + j;
  function open(i, j, cells) {
    const k = key(i, j);
    if (!cells.has(k)) {
      const x = i * STEP, z = j * STEP;
      cells.set(k, !blocked(x, groundY(x, z), z));
    }
    return cells.get(k);
  }

  function clear(x, z, gx, gz) {
    const steps = Math.ceil(Math.hypot(gx - x, gz - z) / 2);
    for (let i = 1; i <= steps; i++) {
      const px = x + (gx - x) * i / steps, pz = z + (gz - z) * i / steps;
      if (blocked(px, groundY(px, pz), pz)) return false;
    }
    return true;
  }

  function connect(x, z, cells) {
    const i = Math.round(x / STEP), j = Math.round(z / STEP);
    let nearest = null, best = Infinity;
    for (let di = -2; di <= 2; di++) for (let dj = -2; dj <= 2; dj++) {
      const a = i + di, b = j + dj;
      const d = (a * STEP - x) ** 2 + (b * STEP - z) ** 2;
      if (d < best && open(a, b, cells) && clear(x, z, a * STEP, b * STEP)) { nearest = [a, b]; best = d; }
    }
    return nearest;
  }

  return function findPath(x, z, gx, gz) {
    if (Math.hypot(gx - x, gz - z) > 350) return null;
    if (clear(x, z, gx, gz)) return [[gx, gz]];
    const cells = new Map(); // Vehicles can move between searches.
    const start = connect(x, z, cells), goal = connect(gx, gz, cells);
    if (!start || !goal) return null;

    const heuristic = (i, j) => Math.hypot(i - goal[0], j - goal[1]);
    const origin = { i: start[0], j: start[1], cost: 0, score: heuristic(...start), prev: null };
    const queue = [origin], nodes = new Map([[key(...start), origin]]);
    for (let visited = 0; queue.length && visited < 1000; visited++) {
      let best = 0;
      for (let i = 1; i < queue.length; i++) if (queue[i].score < queue[best].score) best = i;
      const [at] = queue.splice(best, 1);
      if (nodes.get(key(at.i, at.j)) !== at) continue;
      if (at.i === goal[0] && at.j === goal[1]) {
        const path = [[gx, gz]];
        for (let p = at; p; p = p.prev) path.push([p.i * STEP, p.j * STEP]);
        return path.reverse();
      }
      for (const [di, dj] of DIRECTIONS) {
        const i = at.i + di, j = at.j + dj, k = key(i, j);
        const cost = at.cost + (di && dj ? Math.SQRT2 : 1);
        if (nodes.get(k)?.cost <= cost || !open(i, j, cells) || !clear(at.i * STEP, at.j * STEP, i * STEP, j * STEP)) continue;
        const next = { i, j, cost, score: cost + heuristic(i, j), prev: at };
        nodes.set(k, next); queue.push(next);
      }
    }
    return null;
  };
}
