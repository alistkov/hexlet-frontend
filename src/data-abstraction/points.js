const calculateDistance = (point1, point2) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
  return distance;
};

export default calculateDistance;
