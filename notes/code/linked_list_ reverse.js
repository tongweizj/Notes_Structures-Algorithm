class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  // 1. 遍历链表
  traverseList() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
  // 2. 新增节点
  append(item) {
    let tail = this.head;
    // if first node
    if (!tail) {
      tail = item;
    } else {
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = item;
    }
  }

  // 3. remove node
  removeAt(index) {
    // check if index is qualified
    if (index < 0 || index > this.length) return null;
    let current = this.head,
      prev = null,
      idx = 0;
    // if first node
    if (index === 0) {
      // point the head to next node
      this.head = current.next;
    } else {
      // else find the index
      while (idx++ < index) {
        prev = current; // set prev node as current
        current = current.next; // and move current to the next node
      }
      // index finded, link prev.next & current.next
      prev.next = current.next;
    }
  }
  // 3. 在指定位置增加 node
  insertAt(index, node) {
    // check if index is qualified
    if (index < 0 || index > this.length) return null;
    let current = this.head,
      prev = null,
      idx = 0;
    // if first node
    if (index === 0) {
      this.head = node;
      node.next = current;
    } else {
      while (idx++ < index) {
        prev = current;
        current = current.next;
      }
      prev.next = node;
      node.next = current;
    }
  }

  // 该方法返回链表中存在的节点数：
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  // 该方法清空链表
  clear() {
    this.head = null;
  }
  // 该方法返回链表的最后一个节点
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  // 该方法返回链表第一个节点：
  getFirst() {
    return this.head;
  }
}

// 反转
function reverse(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let last = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}
let node1 = new ListNode(1);
let list = new LinkedList(node1);
for (let i = 2; i < 10; i++) {
  let node = new ListNode(i);
  list.append(node);
}
list.traverseList();
let last = reverse(list);
last.traverseList();
