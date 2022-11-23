import { Point, Segment, reverse } from '../../src/introduction-to-oop/constructor.js';

test('Point', () => {
  const point = new Point(4, 5);
  expect(point.getX()).toEqual(4);
  expect(point.getY()).toEqual(5);
});

test('Segment', () => {
  const beginPoint = new Point(4, 1);
  const endPoint = new Point(9, 10);
  const segment = new Segment(beginPoint, endPoint);
  expect(segment.getBeginPoint()).toEqual(beginPoint);
  expect(segment.getEndPoint().getY()).toEqual(endPoint.getY());
});

test('reverse', () => {
  const point1 = new Point(1, 10);
  const point2 = new Point(11, -3);
  const segment = new Segment(point1, point2);
  const reversedSegment = reverse(segment);

  expect(reversedSegment.getBeginPoint().getX()).toEqual(point2.getX());
  expect(reversedSegment.getBeginPoint().getY()).toEqual(point2.getY());

  expect(reversedSegment.getEndPoint().getX()).toEqual(point1.getX());
  expect(reversedSegment.getEndPoint().getY()).toEqual(point1.getY());

  expect(JSON.stringify(reversedSegment.getBeginPoint())).toEqual(JSON.stringify(point2));
  expect(JSON.stringify(reversedSegment.getEndPoint())).toEqual(JSON.stringify(point1));

  expect(reversedSegment.getBeginPoint()).not.toBe(point2);
  expect(reversedSegment.getEndPoint()).not.toBe(point1);

  expect(reversedSegment).toBeInstanceOf(Segment);
  expect(reversedSegment.getEndPoint()).toBeInstanceOf(Point);
  expect(reversedSegment.getBeginPoint()).toBeInstanceOf(Point);
});
