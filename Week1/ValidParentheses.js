
// Question: leetcode.com/problems/valid-parentheses/description/

var isValid = function (s) {
  let chComplement = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  let stack = [];
  let stringLength = s.length;

  //Space Complexity O(n)
  //Time Complexity O(n) + O(1) + O(1) = O(n)
  for (let i = 0; i < stringLength; i++) { //Time Complexity O(n)
    if (s[i] in chComplement) {
      stack.push(s[i]) //Time Complexity O(1)
    } else {
      if (chComplement[stack.pop()] != s[i]) { //Time Complexity O(1)
        return false;
      }
    }
  }
  return !stack.length;
};