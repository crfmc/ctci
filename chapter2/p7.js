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
console.assert(Problem7([[1, 2], [3, 4]]) === "3,1,4,2", "small matrix");
console.assert(Problem7([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) === "7,4,1,8,5,2,9,6,3",
  "larger matrix");



module.exports;

/**
 * Notes: 
 * Let's study this line:
 * 
 * let m0 = Array.from({length:len}, () => {
 *  return new Array(len).fill(0);
 * });
 * 
 * One important thing to note about using Array.prototyope.fill(), 
 * is that with numbers and strings it works fine. But note, that 
 * with objects, such as when creating two-dimensional arrays,
 * it will assign the same object to all positions in the array.
 * (See CAVEAT 1 below). In order to avoid this issue, we choose
 * to use a lambda function (anonymous). Here, we used an object 
 * to ACT as an array, by giving it a property of length, which we 
 * set to the variable len. By doing this, we are givent a new array
 * for each value in a "fake" array of length len.
 */

// CAVEAT 1
// let a = new Array(2).fill(new Array(2).fill(0));
// console.log(a[0] === a[1]);
// let b = new Array(2).fill({1: "hi"});
// console.log(b[0] === b[1]);