/**
 * Question:
 *  Write a method to replace all spaces in a string with '%20': 
 *  You may assume that the string has sufficient space at the end 
 *  to hold the additional characters, and that you are given the "true" 
 *  length of the string.
 */

/**
 * I'm given s and the length of the string. can trim the
 * beginning and end of the string.
 * 
 * Also useful to use String.split() here
 */
const Problem3_r0 = (s, len) => {
  if (len < 1) return ""
  if (s[0] === ' ' && len < 2) return "%20" 

  return s.trim().replaceAll(" ", "%20");
}




/**
 * Notes:
 *  I can split the string and join them
 * 
 * Clarifying questions:
 *  - can I assume there are no trailing spaces? AKA f(' ') => '%20'?
 *  - can I assume there are no leading spaces?
 */
const Problem3 = (s, len) => {
  s = s.substring(0, len);
  return s.split(' ').join('%20')
}


// Tests for Problem 3
console.log("Problem 3 Tests running... \n");

console.assert(Problem3_r0('', 0) === '', 'empty string');
console.assert(Problem3_r0('hello world', 11) === 'hello%20world', 'same word');
console.assert(Problem3_r0(' ', 1) === '%20', 'single space');
console.assert(Problem3_r0('  ', 1) === '%20', 'multiple space');
console.assert(Problem3_r0('Mr John Smith   ', 13) === 'Mr%20John%20Smith', 'ctci');




module.exports;

/**
 * Notes:
 */
