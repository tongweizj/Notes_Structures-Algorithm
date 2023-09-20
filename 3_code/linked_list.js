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

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.head.next.data); //returns 5

console.log(list.size());

console.log("遍历");
list.traverseList();

console.log("append");
let node3 = new ListNode(50);
list.append(node3);
list.traverseList();

console.log("remove At index");
list.removeAt(1);
list.traverseList();

console.log("add At index");
let node4 = new ListNode(3);
list.insertAt(1, node4);
list.traverseList();

// In JavaScript, a linked list looks like this:
// const list = {
//   head: {
//     value: 6,
//     next: {
//       value: 10,
//       next: {
//         value: 12,
//         next: {
//           value: 3,
//           next: null
//         }
//       }
//     }
//   }
// }
// };
