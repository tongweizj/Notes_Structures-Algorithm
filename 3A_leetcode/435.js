var eraseOverlapIntervals = function (intervals) {
  // 0.
  if (intervals.length == 0) {
    return 0;
  }
  // 1.sort
  // intervals.sort();
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  console.log(intervals);
  // 2.loop
  let i = 0;
  let j = 1;
  let out = 0;
  while (i < intervals.length - 1 && j < intervals.length) {
    let iL = intervals[i][0];
    let iR = intervals[i][intervals[i].length - 1];
    let jL = intervals[j][0];
    let jR = intervals[j][intervals[i + 1].length - 1];

    if (jL >= iR) {
      i = j;
      j++;
    } else if (jR < iR) {
      console.log("jR < iR:", i, j);
      i = j;
      j++;
      out += 1;
    } else {
      console.log("else:", i, j);
      j++;
      out += 1;
    }
  }
  return out;
};

let input = [
  [-1, 1],
  [10, 11],
  [12, 14],
  [3, 4],
];
console.log(eraseOverlapIntervals(input));
