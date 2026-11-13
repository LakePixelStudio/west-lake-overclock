export function toolIconTexture(index, refresh) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const colors = [['#fafbff', '#dbe1fa'], ['#d38c71', '#b86047'], ['#fbfdff', '#d9e6ff'], ['#23d491', '#008a75'], ['#383e49', '#1d2029']];
  const fill = ctx.createLinearGradient(18, 0, 238, 256);
  fill.addColorStop(0, colors[index][0]); fill.addColorStop(1, colors[index][1]);
  ctx.fillStyle = fill;
  ctx.beginPath(); ctx.roundRect(0, 0, 256, 256, 25); ctx.fill();
  ctx.save();
  ctx.translate(0, -13);
  drawMark(ctx, index);
  ctx.restore();
  ctx.font = '700 21px "Segoe UI",sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = index === 0 || index === 2 ? '#172956' : '#fff';
  ctx.fillText(['Codex', 'Claude Code', 'DeepSeek Harness', 'WorkBuddy', 'Cursor'][index], 128, 219);
  const file = [null, null, 'deepseek.svg', 'workbuddy.svg', null][index];
  if (file) {
    const image = new Image();
    image.onload = () => {
      ctx.fillStyle = fill;
      ctx.fillRect(34, 19, 188, 172);
      ctx.drawImage(image, 54, 30, 148, 148);
      refresh();
    };
    image.src = new URL('./wl80-r3-game-tool-icons-' + file, import.meta.url).href;
  }
  return canvas;
}

function drawMark(c, index) {
  const path = (data, color) => { c.fillStyle = color; c.fill(new Path2D(data)); };
  switch (index) {
    case 0: {
      const blue = c.createLinearGradient(55, 55, 201, 180);
      blue.addColorStop(0, '#5564ff'); blue.addColorStop(1, '#9062f6');
      path('M69 163 C40 163 36 128 54 112 C49 92 68 73 89 76 C96 52 133 45 151 68 C175 59 197 78 197 99 C225 106 218 151 196 162 C166 185 92 184 69 163Z', blue);
      c.strokeStyle = '#fff'; c.lineWidth = 9; c.lineJoin = 'round'; c.lineCap = 'round';
      c.beginPath(); c.moveTo(92, 108); c.lineTo(109, 122); c.lineTo(92, 136); c.moveTo(124, 138); c.lineTo(148, 138); c.stroke();
      break;
    }
    case 1:
      path('M69 89H84V73H98V89H158V73H172V89H187V105H201V151H185V166H171V181H153V164H103V181H85V166H71V151H55V105H69Z', '#fff3df');
      c.fillStyle = '#713623'; c.fillRect(96, 117, 14, 18); c.fillRect(146, 117, 14, 18);
      break;
    case 2:
      path('M54 110C69 122 88 121 105 115C122 110 141 115 157 109C170 104 177 90 177 75C188 76 199 83 200 94C207 91 216 94 220 102C213 113 202 121 191 122C185 143 172 163 145 175C113 189 77 177 65 153C58 138 60 123 54 110ZM121 160C136 166 150 157 158 146C141 152 135 154 121 160Z', '#315bff');
      c.fillStyle = '#fff'; c.beginPath(); c.arc(103, 134, 4.5, 0, Math.PI * 2); c.fill();
      break;
    case 3:
      path('M65 105L68 71Q69 60 80 67L105 87Q128 80 151 87L177 67Q188 60 189 71L192 105Q205 122 197 143Q190 171 128 173Q66 171 59 143Q51 122 65 105Z', '#f4fffa');
      c.fillStyle = '#087c68'; c.beginPath(); c.arc(104, 126, 5, 0, Math.PI * 2); c.arc(152, 126, 5, 0, Math.PI * 2); c.fill();
      path('M121 139Q128 135 135 139L128 146Z', '#087c68');
      break;
    case 4:
      path('M128 57L193 95L128 131L63 95Z', '#f3f6fb');
      path('M63 95L128 131V197L63 157Z', '#a3afc2');
      path('M128 131L193 95V157L128 197Z', '#58687f');
      path('M63 95L128 131L128 57Z', '#d3dbe7');
      break;
  }
}
