/**
 * Question:
 *  
 */

/**
 * Notes:
 */

// Given: is s2 a substring of s1
const isSubstring = (s1, s2) => {
  return s2.includes(s1)
}
const Problem9 = (s1, s2) => {
  if (s1.length === s2.length) {
    if ( s1.length < 2) return true
    
    return isSubstring(s1, s2 + s2);
  }
  return false
}


// Tests for Problem
console.log("Problem 9 Tests running... \n");
console.assert(Problem9("", "") === true, "empty string");
console.assert(Problem9("a", "a") === true, "single character string");
console.assert(Problem9("", "sdfs") === false, "different lengths");
console.assert(Problem9("waterbottle", "erbottlewat") === true, "ex1");

module.exports;

/**
 * Notes: Really hard question to think of, very clever. I did not imagine
 * concatenating the rotated string to itself in order to find the original
 * word inside of it.
 */
