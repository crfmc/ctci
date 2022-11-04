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
 */
const Problem8 = (n) => {
  let p1 = n;
  let p2 = n.next;

  while (p1 !== p2) {
    if (p2.next.next === null) return null // no loop since there's an end
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1
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

// Tests for Problem8
console.assert(Problem8(Node.fromArray(['a','b','c','d', 'e'])) === null, "");
console.assert(Problem8(Node.fromArray(['a','b','c','d'])) === null, "");

module.exports;
