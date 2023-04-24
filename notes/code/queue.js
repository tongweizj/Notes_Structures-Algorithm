function Queue() {
  // 私有变量 items 用于记录数组，
  let items = [];
  // 入队
  this.enqueue = function (element) {
    items.push(element);
  };
  // 出队
  this.dequeue = function () {
    return items.shift();
  };
  // 查看队列的第一个元素
  this.front = function () {
    return items[0];
  };
  // 查看队列是否为空
  this.isEmpty = function () {
    return items.length == 0;
  };
  // 查看队列的长度
  this.size = function () {
    return items.length;
  };
  // 将数组转为字符串并放回
  this.toString = function () {
    return items.toString();
  };
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("张三");
queue.enqueue("李四");
queue.enqueue("王五");
console.log(queue.front());
console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.toString());
