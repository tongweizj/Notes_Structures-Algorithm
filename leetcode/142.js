/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 我的版本
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  // 起步走
  // 1. 判断链表是否为空、或者只有一个节点
  if (!fast || !fast.next) {
    return null;
  } else {
    // 走一步
    fast = fast.next.next;
    slow = slow.next;
  }

  // 判断是否有环
  while (fast != slow) {
    if (!fast || !fast.next) {
      return null; //走到头，没环的情况
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  // 判断起点
  fast = head;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};

// 更优解
// 数据结构都是一样的，主要是代码做了优化
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  // 判断是否有环
  do {
    // 即判断起步走的情况，也判断每走一步后，是否走到头掉情况
    // 1. 判断链表是否为空、或者只有一个节点
    if (!fast || !fast.next) {
      return null; //走到头，没环的情况
    }
    fast = fast.next.next;
    slow = slow.next;
  } while (fast != slow);

  // 判断起点
  fast = head;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};
