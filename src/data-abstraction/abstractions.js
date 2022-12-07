const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;

const getY = (point) => point.y;

const makeSegment = (point1, point2) => ({ beginPoint: point1, endPoint: point2 });

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);
  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(beginPoint) + getY(endPoint)) / 2;
  return makeDecartPoint(x, y);
};

export {
  makeDecartPoint, makeSegment, getMidpointOfSegment, getBeginPoint, getEndPoint,
};
