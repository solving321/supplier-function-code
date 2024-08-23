// Create blue point at x, y point of any element which is returned by getBoundingClientRect();

function createBluePoint(x, y) {
  const point = document.createElement('div');
  point.style.position = 'fixed'; // Use fixed positioning to ensure it stays in the viewport
  point.style.width = '5px';
  point.style.height = '5px';
  point.style.backgroundColor = 'blue';
  point.style.left = `${x}px`;
  point.style.top = `${y}px`;
  point.style.zIndex = '2147483647'; // Ensure the point is above other elements
  document.body.appendChild(point);
}
