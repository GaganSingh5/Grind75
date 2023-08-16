
// Question: leetcode.com/problems/binary-search/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Time Complexity O(logn)
// Space Complexity O(1)
var search = function (nums, target) {

  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor(left + right / 2);
  while (right >= left) {
    if (target == nums[mid]) return mid;

    if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
};
