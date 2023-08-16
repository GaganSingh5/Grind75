
// Question: leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


//Space Complexity O(n)
//Time Complexity O(n)
var isAnagram = function (s, t) {

  if (s.length !== t.length) return false;

  let map = {};
  let size = s.length;
  for (let i = 0; i < size; i++) {
    if (map[s[i]]) {
      map[s[i]] = map[s[i]] + 1;
    } else {
      map[s[i]] = 1
    }
  }

  for (let i = 0; i < size; i++) {
    if (map[t[i]] && map[t[i]] > 0) {
      map[t[i]] = map[t[i]] - 1;
    } else {
      return false;
    }
  }

  return true;

};