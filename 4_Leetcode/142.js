// # 142. Linked List Cycle II

// ## 题目

// Given the head of a linked list, return the node where the cycle begins.
// If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 顺着next指针，可以回到环的起点

// Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed).
// It is -1 if there is no cycle.

// Note that pos is not passed as a parameter.

// Do not modify the linked list.

// ## 解题思路

// 1. 必须知道的知识
//    1. 快慢指针
//    2. Floyd 判圈法
//    3. 链表
//    4. leetcode 对链表数据结构

// ## Floyd 判圈法

// 给定两个指针，分别命名为 slow 和 fast，起始位置在链表的开头。

// 每次 fast 前进两步，slow 前进一步。

// 如果 fast可以走到尽头，那么说明没有环路；
// 如果 fast 可以无限走下去，那么说明一定有环路，且一定存

// 在一个时刻 slow 和 fast 相遇。

// 1. 当 slow 和 fast 第一次相遇时，我们将 fast 重新移动到链表开头，并
// 让 slow 和 fast 每次都前进一步。
// 2. 当 slow 和 fast 第二次相遇时，相遇的节点即为环路的开始点。

// ```c++
// ListNode *detectCycle(ListNode *head) {
// ListNode *slow = head, *fast = head;
// // 判断是否存在环路
// do {
// if (!fast || !fast->next) return nullptr;
// fast = fast->next->next;
// slow = slow->next;
// } while (fast != slow);
// // 如果存在，查找环路节点
// fast = head;
// while (fast != slow){
// slow = slow->next;
// fast = fast->next;
// }
// return fast;
// }
// ```

// ```js
// var detectCycle = function(head){
//     let slow = head;
//     let fast = head;
//     while(fast && fast.next && fast.next.next){
//         slow = slow.next;
//         fast = fast.next.next;
//         if(slow === fast){
//             slow = head;
//             while(slow !== fast){
//                 slow = slow.next;
//                 fast = fast.next;
//             }
//             return slow;
//         }
//     }
//     return null;
// }
// ```

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
