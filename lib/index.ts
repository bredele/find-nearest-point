import { getHaversineDistance, Point } from "haversine-matrix";

export default (target: Point, points: Point[]): Point | null => {
  let nearestPoint = points[0];
  let minDistance = getHaversineDistance(target, points[0]);
  for (let i = 1; i < points.length; i++) {
    const distance = getHaversineDistance(target, points[i]);
    if (distance < minDistance) {
      minDistance = distance;
      nearestPoint = points[i];
    }
  }
  return nearestPoint;
};
