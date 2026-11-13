export function createScope(hud) {
  const layer = document.createElement('div');
  layer.id = 'aim-optic';
  layer.hidden = true;
  layer.setAttribute('aria-hidden', 'true');
  layer.innerHTML = `
    <div class="optic-frame">
      <div class="optic-lens"></div>
    </div>
    <div class="optic-reticle">
      <i class="optic-arm left"></i><i class="optic-arm right"></i>
      <i class="optic-arm top"></i><i class="optic-arm bottom"></i>
      <i class="optic-point"></i>
      <i class="optic-ticks"></i>
    </div>`;
  hud.prepend(layer);

  let lastMode;
  return {
    update({ visible, amount, mode, recoil = 0 }) {
      layer.hidden = !visible || amount < 0.02;
      if (layer.hidden) return;
      if (lastMode !== mode) { layer.dataset.mode = mode; lastMode = mode; }
      layer.style.opacity = Math.min(1, amount);
      layer.style.setProperty('--optic-ring-scale', 1 + (1 - Math.min(1, amount)) * 0.08 + Math.min(0.018, recoil * 0.003));
    },
  };
}
