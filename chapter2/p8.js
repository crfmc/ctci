const { Node } = require('./lib.js');
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
  while (n !== null) {
    console.log(n.print())
    if (j === i) {
      loopBeginning = n; // get the beginning of loop
    }
    n = n.next;
    j++;
  }

  if (loopBeginning === null) throw RangeError('index not in range');
  else {
    n.next = loopBeginning;
  }

  return head;
}

console.log(createLoop(Node.fromArray(['a','b','c','d','e']), 2).print());

// Tests for Problem8_sol
console.assert(Problem8_sol(Node.fromArray(['a','b','c','d', 'e'])) === null, "");
console.assert(Problem8_sol(Node.fromArray(['a','b','c','d'])) === null, "");

module.exports;
