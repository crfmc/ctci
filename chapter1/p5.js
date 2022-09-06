/**
 * Question:
 * Implement a method to perform basic string compression using the counts of 
 * repeated characters. For example, the string aabcccccaaa would become 
 * a2b1c5a3. If the "compressed" string would not become smaller than the 
 * original string, your method should return the original string. You can 
 * assume the string has only uppercase and lowercase letters (a - z).
 */

/**
 * Notes:
*/
const Problem5 = (s) => {
  let char = 0;
  let counts = new Map();

  for (let i = 0; i <= s.length - 1; i++) {
    if (counts.has(char) && s[char] === s[i]) {
      counts.set(char, counts.get(char) + 1);
    }
    else {
      char = i;
      counts.set(char, 1);
    }
  }

  let cs = "";
  counts.forEach((value, key) => {
    cs = cs + s[key] + value;
  });

  if (cs.length >= s.length) {
    return s;
  }
  else {
    return cs;
  }
}

  
// Tests for Problem
console.log("Problem 5 Tests running... \n");

console.assert( Problem5("aabcccccaaa") === "a2b1c5a3", "ex1");
// console.assert( Problem5("abcd") === "abcd", "compressed is longer");
// console.assert( Problem5("") === "", "empty string");
// console.assert( Problem5("a") === "a", "single letter, compress longer");


module.exports;

/**
 * Notes:
 *  VERY IMPORTANT NOTE ABOUT MAPS IN JS:
 * The Map.protorype.forEach() function calls the callback fn(value, key, map).
 * This means that the value is the first parameter returned, where one
 * might expect it to be key, then value, as it would be in an object.
*/
