var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
  this.front = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // 为了防止，还没有pop过，先来peek，所以做这一步
  if (this.stack1.length == 0) {
    this.front = x;
  }
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 为什么要做判断stack2 是否为空？ 意思就是每次把stack1 转到stack2点元素都pop完了，再转过来。
  // 否则，就会乱序
  if (this.stack2.length == 0) {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack2.length == 0
    ? this.front
    : this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // 为什么两个数组都要为空，就是防止，先push 几个，然后pop 一次，又push了。这样两个数组都有数据
  return this.stack1.length == 0 && this.stack2.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
