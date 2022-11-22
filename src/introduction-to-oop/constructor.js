function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

const reverse = (segment) => {
  const beginPointX = segment.getBeginPoint().getX();
  const beginPointY = segment.getBeginPoint().getY();
  const endPointX = segment.getEndPoint().getX();
  const endPointY = segment.getEndPoint().getY();
  return new Segment(new Point(endPointX, endPointY), new Point(beginPointX, beginPointY));
};

export { Point, Segment, reverse };
