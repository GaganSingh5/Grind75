/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Question: leetcode.com/problems/merge-two-sorted-lists/description/

var mergeTwoLists = function (list1, list2) {
  let finalList = new ListNode();
  let ans = finalList;
  //Space Complexity O(1) as we just created only one node above, rest is just changing the pointers 
  //Time Complexity O(m+n) list1 length = m, list2 length = n
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      finalList.next = list1
      list1 = list1.next
    } else {
      finalList.next = list2
      list2 = list2.next
    }
    finalList = finalList.next
  }
  finalList.next = list1 || list2

  return ans.next;
};

// Recursion
// var mergeTwoLists = function (l1, l2) {
//     if (!l1) return l2;
//     else if (!l2) return l1;
//     else if (l1.val <= l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2
//     }
// };