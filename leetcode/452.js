// There are some spherical balloons taped onto a flat wall that represents the XY-plane.
// The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend.
// You do not know the exact y-coordinates of the balloons.

// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis.
// A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend.

// There is no limit to the number of arrows that can be shot.
// A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

// Ex 1
// [[10,16],[2,8],[1,6],[7,12]]

var findMinArrowShots = function (points) {
  // 1. sort
  points.sort((a, b) => a[0] - b[0]);
  console.log(points);
  // 2. shot
  let shotPoint = 0;
  let shotTimes = 0;

  for (let i = 0; i < points.length; i++) {
    if (shotPoint == 0 && i == points.length - 1) {
      shotTimes++;
    }

    if (shotPoint == 0) {
      shotPoint = points[i][1];
    } else if (points[i][0] > shotPoint) {
      if (i == points.length - 1) {
        shotTimes += 2;
        continue;
      } else {
        shotTimes++;
      }
    }
  }
  return shotTimes;
};

let points = [
  [3, 9],
  [7, 12],
  [3, 8],
  [6, 8],
  [9, 10],
  [2, 9],
  [0, 9],
  [3, 9],
  [0, 6],
  [2, 8],
];
console.log(findMinArrowShots(points));
