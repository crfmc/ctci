console.log("Problem 1 Tests running... \n");



// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures ?

/**
 * Redo of p1.
 * Throw everything in a map and if you encounter a char that already
 * exists return true.
 */
const Problem1_r0 = (s) => {
  const chars = new Map();
  
  for (let c of s) {
    // If character already exists in map, it is a duplicate
    if (chars.has(c)) return false
    chars.set(c, 1);
  }

  return true
}

/**
 * Redo of p1b, with no additional data structures.
 * If we cannot use a map, we cannot store information
 * about the values we have seen so far. Therefore,
 * we will need to loop through the string and search
 * for duplicates.
 * 
 * 
 * I can't imagine a better runtime. I must check each
 * letter because the duplicates could be the last two 
 * characters.
 * 
 * Two check to be made:
 * - If the length of the string is less than 2 it cannot
 * have duplicates by definition of duplicate.
 * - If the character space is only ASCII characters,
 * then it is not possible to have a string longer 
 * than 128 characters without repeating any.
 */

const Problem1b_r0 = (s) => {
  if (s.length < 2) return true
  if (s.length > 128) return false // Assumes ASCII character space

  for (let c0 in s) {
    for (let c1 in s) {
      if (c0 !== c1) { // different index
        if (s[c0] === s[c1]) return false
      }
    }
  }
  
  return true
}
















/**
 * Notes:
 * - Burte force method is to check each character in the string and compare
 *   it to the others until i find a repeat, this is O(n^2) because I would
 *   have to traverse the entire array for each one.
 *    - I could use binary search to lower this to O(n log n)
 *    - I could throw everything in a hashmap and look for each one, O(n)
 * - I think the BCR is O(n), since I would have to at least check each
 *   of the value in s.
 * 
 * - Returns true iff there are no similar characters in the string,
 *   otherwise false
 */
const Problem1 = (s) => {
  const map = new Map();

  // add all the elements into the hashmap
  for (let x of s) {
    if (map.has(x)) return false
    else {
      map.set(x, s)
    }
  }

  
  return true
}


console.assert(Problem1_r0('') === true, "empty string");
console.assert(Problem1_r0('hi') === true, "string `hi`");
console.assert(Problem1_r0('h') === true, "string `h`");

console.assert(Problem1_r0('  ') === false, "two spaces");
console.assert(Problem1_r0('abcc') === false, "string `abcc`");
console.assert(Problem1_r0('hello') === false, "string `hello`");

// Same as above, but without additional data structures
// worst case O(n^2), best case O(n)
const Problem1b = (s) => {
  for (let i = 0; i <= s.length - 1; i++) {
    let cur = s[i];

    for (let j = 0; j <= s.length - 1; j++) {
      if (j !== i) {
        if (s[j] === cur) {
          return false
        }
      }
    }
  }
  
  return true
}


console.log('Problem 1b tests running... \n');

console.assert(Problem1b_r0('') === true, "empty string");
console.assert(Problem1b_r0('hi') === true, "string `hi`");
console.assert(Problem1b_r0('h') === true, "string `h`");

console.assert(Problem1b_r0('  ') === false, "two spaces");
console.assert(Problem1b_r0('abcc') === false, "string `abcc`");
console.assert(Problem1b_r0('hello') === false, "string `hello`");


module.exports;

/**
 * Notes:
 *  - You should make sure to ask the interviewer if the string is ASCII
 *    or unicode.
 *  - You can return false if the size of the string exceed the number
 *    of characters in the alphabet
 */

const isUniqueChars = (s) => {
  if (s.length > 128) return false // Assuming this is not extended ASCII

  char_set = [];
  for (let i = 0; i <= s.length - 1; i++) {
    let val = s[i];
    if (char_set[val]) return false
    char_set[val] = true;
  }

  return true
}