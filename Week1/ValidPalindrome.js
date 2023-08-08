/**
 * @param {string} s
 * @return {boolean}
 */

// Ouestion: leetcode.com/problems/valid-palindrome/description/

var isPalindrome = function (s) {
  let pointer1 = 0;
  let pointer2 = s.length - 1;
//Space Complexity O(1) 
//Time Complexity O(n) length of s
  while (pointer1 <= pointer2) {
    if (!isAlphaNumaric(s[pointer1])) {
      pointer1++;
    } else if (!isAlphaNumaric(s[pointer2])) {
      pointer2--;
    } else {
      if (s[pointer1].toLowerCase() !== s[pointer2].toLowerCase()) {
        return false;
      }
      pointer1++;
      pointer2--;
    }

  }

  return true;
};

const isAlphaNumaric = (c) => {
  let regex = /[a-z0-9]/g;

  let value = c.toLowerCase().match(regex)
  return value && value.length > 0 ? true : false
}

//Better Solution
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   let cleanS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   let reverseS = cleanS.split('').reverse().join('');
//   return cleanS == reverseS;
// };