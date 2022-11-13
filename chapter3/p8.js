const { Node } = require('../lib.js');
/**
 * Question:
 * 
 */

/**
 * Notes: The first hint was already considered. I need todo two 
 * things. Find out if there's a loop and then find the beginning.
 * The first part was relatively straightforward.
 * 
 * 
 * I did not get this question at all, had to look at the solution.
 * Even the hints were difficult to decipher.
 * 
 */
const Problem8_sol = (n) => {
  let head = n;
  let p1 = n;
  let p2 = n;

  let start = null;

  while (p2.next !== null && p2.next.next !== null) {
    if (p1 === p2) break;
    p1 = p1.next;
    p2 = p2.next;
  }

  while (p1 !== null) {
    if (p1 === head) {
      start = head;
      break;
    }
    p1 = p1.next;
    head = head.next;
  }

  return start
}

/**
 * Notes: 
 * 
 */

// Some linked lists for testing
/**
 * 
 * @param {Node} n First node in a list
 * @param {Number} i The 0-based index of the node to begin the loop
 */
const createLoop = (n, i) => {
  let head = n;
  let loopBeginning = null;
  let j = 0;

  // Record the beginning node when it is traversed to
  while (n.next !== null) {
    if (j === i) {
      loopBeginning = n; // get the beginning of loop
      break;
    }
    n = n.next;
    j++;
  }

  
  if (j < i) { // Counter did not reach i by the end
    throw RangeError(`index ${i} is too large, try a number under ${j + 2}`)
  }
  if (j === i) { // Last node is chosen
    loopBeginning = n;
  }

  n.next = loopBeginning;

  return head;
}

// Tests for Problem8_sol
console.assert(Problem8_sol(createLoop(Node.fromArray(['a','b','c','d','e']), 0)), "loop of entire linked list");
console.assert(Problem8_sol(createLoop(Node.fromArray(['a','b','c','d','e']), 1)), "loop of length - 1 linked list");
console.assert(Problem8_sol(createLoop(Node.fromArray(['a','b','c','d','e']), 2)), "loop of length - 2 linked list");
console.assert(Problem8_sol(createLoop(Node.fromArray(['a','b','c','d','e']), 3)), "loop of length - 3 linked list");
console.assert(Problem8_sol(createLoop(Node.fromArray(['a','b','c','d','e']), 4)), "loop of length linked list");


module.exports;
