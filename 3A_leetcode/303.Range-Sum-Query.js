/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.perSum = new Array(nums.length).fill(0); // 因为在两个function中调用，所以，用this.
  this.perSum[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    this.perSum[i + 1] = this.perSum[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.perSum[right + 1] - this.perSum[left]; //用这个思路，是非常巧妙的
};

// 题目是要求算left 和 right 之间的sum
// 编程了right - left 了
// 这里非常巧妙
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
