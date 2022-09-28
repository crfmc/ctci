/**
 * Question:
 *  Zero matrix: Write an algorithm such that if an element in an
 *  MxN matrix is 0, its entire row and column are set to 0
 */

/**
 * Notes: My initial thought for this problem was to loop through
 * the matrix and when I saw a 0, cover that entire row. I want to
 * avoid looping over twice, so I will do it in place. The issue 
 * with this plan was that the loop would not be able to modify
 * those 0s which came before the one found, since they will not 
 * be looped over again. This means I had to loop over twice,
 * once to identify the 0s, and another time to actually modify 
 * matrix in place.
 */
const Problem8 = (m) => {
  const rows = m.length;
  const cols = m[0].length;

  if (rows === 0 || cols === 0) {
    return ""
  }

  let zrows = new Set();
  let zcols = new Set();

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (m[row][col] === 0) {
        zrows.add(row);
        zcols.add(col);
      }
    }
  }

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (zrows.has(row) || zcols.has(col)) {
        m[row][col] = 0;
      }
    }
  }

  return m.toString()
}

// Tests for Problem 8
console.log("Problem 8 Tests running... \n");
console.assert(Problem8([[]]) === "", "0x0 matrix");
console.assert(Problem8([[1], [0]]) === "0,0", "2x1 matrix");
console.assert(Problem8([[1, 1], [0, 1], [1, 1]]) === "0,1,0,0,0,1", "2x3 matrix");

module.exports;

/**
 * Notes: Using a Set saved me some time: it allowed me to remove duplicates
 * as I added new elements as well as check whether it had a number
 * in constant time (at least I assume). It could also be done with a Map,
 * so it must be at least O(1) look up time.
 */
