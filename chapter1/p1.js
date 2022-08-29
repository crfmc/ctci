console.log("Problem 1 Tests running... \n");



// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures ?

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


console.assert(Problem1('') === true, "empty string");
console.assert(Problem1('hi') === true, "string `hi`");
console.assert(Problem1('h') === true, "string `h`");

console.assert(Problem1('  ') === false, "two spaces");
console.assert(Problem1('abcc') === false, "string `abcc`");
console.assert(Problem1('hello') === false, "string `hello`");

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

console.assert(Problem1b('') === true, "empty string");
console.assert(Problem1b('hi') === true, "string `hi`");
console.assert(Problem1b('h') === true, "string `h`");

console.assert(Problem1b('  ') === false, "two spaces");
console.assert(Problem1b('abcc') === false, "string `abcc`");
console.assert(Problem1b('hello') === false, "string `hello`");


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