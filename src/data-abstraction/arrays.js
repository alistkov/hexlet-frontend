const getMidpoint = (point1, point2) => {
  const { x: x1, y: y1 } = point1;
  const { x: x2, y: y2 } = point2;
  const x = (x1 + x2) / 2;
  const y = (y1 + y2) / 2;
  return { x, y };
};

export default getMidpoint;
