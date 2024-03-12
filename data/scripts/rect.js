const container = document.getElementById('container');
const selection = document.getElementById('selection');
let isSelecting = false;
let startX, startY;

container.addEventListener('mousedown', (e) => {
  isSelecting = true;
  startX = e.clientX;
  startY = e.clientY;

  selection.style.left = startX + 'px';
  selection.style.top = startY + 'px';
  selection.style.width = '0';
  selection.style.height = '0';
});

container.addEventListener('mousemove', (e) => {
  if (!isSelecting) return;

  const currentX = e.clientX;
  const currentY = e.clientY;

  const width = Math.abs(currentX - startX);
  const height = Math.abs(currentY - startY);
  const left = Math.min(currentX, startX);
  const top = Math.min(currentY, startY);

  selection.style.width = width + 'px';
  selection.style.height = height + 'px';
  selection.style.left = left + 'px';
  selection.style.top = top + 'px';
});

container.addEventListener('mouseup', () => {
  isSelecting = false;
  selection.style.width = '0';
  selection.style.height = '0';
});
