/**
 * Question:
 *  Given an image represented by an NxN matrix, where each pixel in the image 
 * is 4 bytes, write a method to rotate the image by 90 degrees. 
 * (can you do this in place?)
 */

/**
 * Notes:
 */
const Problem7 = (m) => {
  let len = m.length;
  if (len < 2) return m.toString();

  let m0 = Array.from({length:len}, () => {
    return new Array(len).fill(0);
  });

  for (let i = 0; i <= len - 1; i++) {
    for (let j = 0; j <= len - 1; j++) {
      let val = m[i][j];
      m0[j][len - 1 - i] = val;
    }
  }
  return m0.toString()
}


// Tests for Problem
console.log("Problem 7 Tests running... \n");
console.assert(Problem7([[]]) === "", "empty matrix");
console.assert(Problem7([[1]]) === "1", "single value matrix");
console.assert(Problem7([[1,2], [3,4]]) === "3,1,4,2", "small matrix");



module.exports;

/**
 * Notes:
 */
