/**
 * Question:
 *  Palindrome Permutation: Given a string, write a function to check if 
 *  it is a permutation of a palindrome. A palindrome is a word or phrase 
 *  that is the same forwards and backwards. A permutation is a rearrangement 
 *  of letters. The palindrome does not need to be limited to just dictionary 
 *  words.
 */

/**
 * Notes:
 *  This function must return whether a permutation of [s] is a palindrome.
 *  Finding all permutations and checking them would take minimum O(2^n n!), since
 *  I must check all possible combinations of 
 * 
 *  
 * - Check the length of a 
 * 
 */
const Problem4 = (string) => {
  let s = string.toLowerCase();
  if (s.length === 0) return true;
  if (s.length === 1) return true;
  
  let counts = {}
  for (let c of s) {
    if (c !== " ") {
      if (counts[c] > 0) {
        counts[c] = counts[c] + 1;
      }
      else {
        counts[c] = 1;
      }
    }
  }

  let odds = 0;
  for (let c in counts) {
    if ((counts[c] % 2) === 1) {
      odds++;
    }
  }
  
  return (odds < 2)
}


// Tests for Problem
console.log("Problem 4 Tests running... \n");

console.assert(Problem4("")===true, "empty string");
console.assert(Problem4("s")===true, "single character");
console.assert(Problem4("Tact coa")===true, "ctci example");


/** Keeps a counter of odd numbered character counts */
const Problem4_1 = (string) => {
  let s = string.replaceAll(" ", "").toLowerCase();
  let len = s.length;

  if (len === 0) return true;
  if (len === 1) return true;
  
  let counts = {}
  let odds = 0;
  for (let c of s) {
    if (odds >= Math.floor(len / 2) + 1) return false // Can't balance out
    if (counts[c] > 0) {
      counts[c] = counts[c] + 1;
      if (counts[c] % 2 === 1) {
        odds++;
      }
      else {
        odds--;
      }
    }
    else {
      counts[c] = 1;
      odds++;
    }
  }
  
  return (odds < 2)
}


// Tests for Problem
console.log("Problem 4 Tests running... \n");

// console.assert(Problem4_1("")===true, "empty string");
// console.assert(Problem4_1("s")===true, "single character");
// console.assert(Problem4_1("Tact coa")===true, "ctci example");
console.assert(Problem4_1("Tik c oalr")===false, "can't balance");

module.exports;

/**
 * Notes:
 * I must improve on filtering the input string to something I can
 * work with. In this question, I should've filtered the string for spaces.
 * My code will not work if it is counting the spaces, so I should not regard
 * them.
 * 
 * Complexity:
 * This algorithms runs through each letter of the string, S, then runs 
 * through the list of counts. In the worst case, this list of counts is
 * the length of S (in the case where each letter appears once), therefore,
 * the time is 2S, so O(S), linear time.
 * 
 * 
 * Improvements:
 * In order to improve the time complexity, one would need to avoid
 * traversing through the string. This is only possible by ending the
 * algorithm after half if there are too many odd character counts to
 * be fixed by the end of the string. For example: If the string is
 * "vehicular", we can check the character counts after "vehicu", since
 * we know that in the next 3 characters, there can't be a substring that
 * would result in at most 1 odd character count.
 * 
 * Note: Further improvements shown in CTCI include bitwise arithmetic, 
 * which I am not going to go into now.
 * 
 */
