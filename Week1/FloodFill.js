//Question: leetcode.com/problems/flood-fill/description/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// Time Complexity: O(m*n) worst case process all cells
// Space Complexity: O(m*n)
var floodFill = function (image, sr, sc, color) {
  let val = image[sr][sc];

  recursiveFloodFill(image, sr, sc, color, val)

  return image;
};

function recursiveFloodFill(image, sr, sc, color, val) {
  if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1 || image[sr][sc] === color || image[sr][sc] !== val) {
    return image;
  }

  image[sr][sc] = color;
  recursiveFloodFill(image, sr - 1, sc, color, val);
  recursiveFloodFill(image, sr + 1, sc, color, val);
  recursiveFloodFill(image, sr, sc + 1, color, val);
  recursiveFloodFill(image, sr, sc - 1, color, val);

  return image;
}