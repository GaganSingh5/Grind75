
// Question: leetcode.com/problems/invert-binary-tree/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 //Space Complexity O(n) recursive stack space
 //Time Complexity O(n)  n = number of nodes.
var invertTree = function (root) {
  if (root === null) return null;

  invertTree(root.left);
  invertTree(root.right);
  let temp = root.left;
  root.left = root.right;
  root.right = temp

  return root;
};