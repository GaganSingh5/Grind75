
// Question: leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) { 
  let mp = {}
  //Space Complexity O(n)
  //Time Complexity O(n) + O(1) + O(1) + O(1) = O(n)
  for (let i = 0; i < nums.length; i++) { //Time Complexity O(n)
    let diff = target - nums[i]; //Time Complexity O(1)
    if (diff in mp) return [mp[diff], i] //Time Complexity O(1)
    mp[nums[i]] = i //Time Complexity O(1)
  }
  return [-1, -1]
};