/**
 * Question:
 *  - Given two strings, write a method to decide if one is a permutation 
 * of the other.
 *  - Must use the same letters the same number of times
 *  
 */

/**
 * Must have the same length. If they are the same length, then their
 * char counts must be the same.
 * 
 * I can use a map to store the counts of each char in s1, then,
 * I can subtract the counts from s2, and it should equal 0.
 */


const Problem2_r0 = (s1, s2) => {
  if (s1.length !== s2.length) return false
  if (s1.length < 1) return true

  const counts = new Map();
  
  // add s1 chars to a map
  for (let char of s1) {
    if (counts.has(char)) {
      counts.set(char, counts.get(char) + 1);
    }
    else {
      counts.set(char, 1);
    }
  }

  // subtract those found in s2
  for (let char of s2) {
    if (counts.has(char)) {
      counts.set(char, counts.get(char) - 1);
    }
    // If the char is not in the map, it is unique to s2
    else {
      return false
    }
  }
  
  // Return wether all counts have been matched to 0
  return Array.from(counts).every((v) => { return v[1] === 0 });
}

/**
 * To optimize this problem, we would have to avoid using O(n)
 * space, and using O(n) time.
 * The only way to do this is sorting the two strings.
 * To improve space complexity we can sort the strings
 * 
 */
const Problem2b_r0 = (s1, s2) => {
  if (s1.length !== s2.length) return false

  const a1 = Array.from(s1).sort();
  const a2 = Array.from(s2).sort();

  return a1.every((c, i) => { return c === a2[i] });
}



/**
 * discounts:
 *  - strings must be the same length
 *  - Must have the same characters
 * 
 * BCR:
 *  - Adding everything into a hashmap could help to check is
 *    each value in s2 is in s1
 * 
 *  
 */
const Problem2 = (s1, s2) => {
  if (s1.length !== s2.length) return false

  // Throw it in a hashmap
  const map = new Map();

  for (let x of s1) {
    if (map.has(x)) {
      let count = map.get(x);
      map.set(x, count + 1)
    }
    else {
      map.set(x, 1)
    }
  }

  // s2 must satisfy two things
  for (let y of s2) {
    if (!map.has(y)) { // all the letters are present
      return false
    }

    let rx = new RegExp(y, 'g');
    let counts = (s2.match(rx) || []).length;

    if (map.get(y) !== counts) {
      return false
    }
  }

  return true
}

// Tests for Problem 2
console.log("Problem 2 Tests running... \n");

console.assert(Problem2_r0('', '') === true, 'empty string');
console.assert(Problem2_r0('aa', 'aa') === true, 'contains same 1 letter');
console.assert(Problem2_r0('abc', 'acb') === true, 'contains same three letters');

console.assert(Problem2_r0('abc', 'ac') === false, 'different lengths');
console.assert(Problem2_r0('abcc', 'abbc') === false, 'different counts');



const Problem2b = (s1, s2) => {
  if (s1.length !== s2.length) return false

  // sort the two strings
  let s1_srtd = s1.split('').sort();
  let s2_srtd = s2.split('').sort();

  return s1_srtd.every((v, i) => v === s2_srtd[i])
}

// Tests for Problem 2b
console.log("Problem 2b Tests running... \n");

console.assert(Problem2b_r0('', '') === true, 'empty string');
console.assert(Problem2b_r0('aa', 'aa') === true, 'contains same 1 letter');
console.assert(Problem2b_r0('abc', 'acb') === true, 'contains same three letters');

console.assert(Problem2b_r0('abc', 'ac') === false, 'different lengths');
console.assert(Problem2b_r0('abcc', 'abbc') === false, 'different counts');


module.exports;

/**
 * Notes:
 * 
 * Since permutations are the same string with their characters in 
 * different positions, can we make them the same string?
 * 
 * Clarifying questions to ask:
 *  - Should the permutation comparison be case sensitive?
 *  - Is whitespace included?
 *  - Always ask for the size of the character set
 */
