/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let feed = [];
  // every child has one candy
  for (let i = 0; i < ratings.length; i++) {
    feed[i] = 1;
  }
  console.log(feed);

  let j = 1;
  for (let i = 0; i <= ratings.length - 2; i++) {
    if (ratings[j] > ratings[i] && feed[j] <= feed[i]) {
      console.log("if i-j:", i, j);
      feed[j] = feed[i] + 1;
    }
    j++;
  }
  console.log(feed);

  j = ratings.length - 1;
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[j] && feed[i] <= feed[j]) {
      feed[i] = feed[j] + 1;
    }
    j--;
  }
  console.log(feed);
  let sum = 0;
  for (let i = 0; i < feed.length; i++) {
    sum += feed[i];
  }
  return sum;
};

let input = [1, 0, 2];
console.log(candy(input));
