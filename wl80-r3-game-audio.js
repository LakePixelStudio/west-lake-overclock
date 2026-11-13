// All sound is synthesized with WebAudio: no audio files.
let ac, master, verb, noiseBuf, humOsc, humGain;
export function initAudio() {
  if (ac) { ac.resume().catch(() => {}); return; }
  const Audio = globalThis.AudioContext || globalThis.webkitAudioContext;
  if (!Audio) return;
  ac = new Audio();
  const comp = ac.createDynamicsCompressor(); comp.connect(ac.destination);
  master = ac.createGain(); master.gain.value = 0.55; master.connect(comp);
  verb = ac.createConvolver(); const len = ac.sampleRate * 1.6, ir = ac.createBuffer(2, len, ac.sampleRate);
  for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 5); }
  verb.buffer = ir; const vg = ac.createGain(); vg.gain.value = 0.18; verb.connect(vg); vg.connect(comp);
  noiseBuf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const amb = ac.createBufferSource(); amb.buffer = noiseBuf; amb.loop = true; const lf = ac.createBiquadFilter(); lf.type = 'lowpass'; lf.frequency.value = 500;
  const ag = ac.createGain(); ag.gain.value = 0.05; amb.connect(lf); lf.connect(ag); ag.connect(master); amb.start();                 // wind over water
  humOsc = ac.createOscillator(); humOsc.type = 'sawtooth'; const ff = ac.createBiquadFilter(); ff.type = 'bandpass'; ff.frequency.value = 900; ff.Q.value = 2;
  humGain = ac.createGain(); humGain.gain.value = 0; humOsc.connect(ff); ff.connect(humGain); humGain.connect(master); humOsc.start();    // GPU fan / motor whine
}
function envl(node, gain, dur) { const g = ac.createGain(), t = ac.currentTime; g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur); node.connect(g); g.connect(master); g.connect(verb); }
function noise(dur, freq, gain, type = 'lowpass') { if (!ac || !noiseBuf) return; const s = ac.createBufferSource(); s.buffer = noiseBuf; s.loop = true; const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; s.connect(f); envl(f, gain, dur); s.start(0, Math.random()); s.stop(ac.currentTime + dur); }
function tone(f0, f1, dur, gain, type = 'sine') { if (!ac || !master || !verb) return; const o = ac.createOscillator(), t = ac.currentTime; o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur); envl(o, gain, dur); o.start(); o.stop(t + dur); }
export const hum = (gain, freq) => { if (humGain) { humGain.gain.value = gain; humOsc.frequency.value = freq; } };
export const sfx = {
  shot: [() => { noise(0.1, 3000, 0.6); tone(520, 120, 0.09, 0.7, 'square'); }, () => { noise(0.07, 4200, 0.45); tone(900, 260, 0.06, 0.5, 'sawtooth'); tone(140, 60, 0.08, 0.5); },
    () => { tone(2400, 90, 0.5, 0.8, 'sawtooth'); noise(0.7, 900, 0.9); tone(70, 30, 0.6, 1.0); }],
  hit() { tone(2100, 1100, 0.05, 0.2, 'square'); }, impact() { noise(0.05, 2500, 0.12, 'bandpass'); }, splash() { noise(0.25, 1400, 0.18, 'bandpass'); },
  droneShot() { tone(1000, 200, 0.2, 0.12, 'sawtooth'); }, boom() { noise(1.0, 500, 0.9); tone(95, 30, 0.5, 0.8); },
  hurt() { tone(220, 70, 0.22, 0.4, 'sawtooth'); noise(0.1, 900, 0.4); }, click() { noise(0.03, 4500, 0.25, 'highpass'); }, step() { noise(0.06, 320, 0.1); },
  pickup() { tone(660, 660, 0.08, 0.3, 'triangle'); setTimeout(() => tone(990, 990, 0.14, 0.3, 'triangle'), 80); }, throttle() { tone(300, 80, 0.5, 0.5, 'square'); },
  botShot() { noise(0.06, 2600, 0.16); tone(420, 150, 0.05, 0.14, 'square'); },
  skid() { noise(0.12, 2600, 0.07, 'bandpass'); }, chime() { tone(880, 880, 0.25, 0.25, 'triangle'); setTimeout(() => tone(660, 660, 0.4, 0.25, 'triangle'), 260); },
};
