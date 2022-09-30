/**
 * Question:
 *  Write a method to replace all spaces in a string with '%20': 
 *  You may assume that the string has sufficient space at the end 
 *  to hold the additional characters, and that you are given the "true" 
 *  length of the string.
 */

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

console.assert(Problem3('', 0) === '', 'empty string');
console.assert(Problem3('hello world', 11) === 'hello%20world', 'same word');
console.assert(Problem3(' ', 1) === '%20', 'single space');
console.assert(Problem3('  ', 1) === '%20', 'multiple space');
console.assert(Problem3('Mr John Smith   ', 13) === 'Mr%20John%20Smith', 'ctci');




module.exports;

/**
 * Notes:
 */
