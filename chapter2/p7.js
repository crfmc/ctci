const { Node } = require('./lib.js');
/**
 * Question:
 * 
 */

/**
 * Notes: This question is sort of confusing in that it does not
 * mention any of the inherent issues in making the test cases happen:
 * - An intersection node has only one "next" field. It cannot have
 * two, and therefor must be at the end of the linked list.
 * - Any two linked lists that share one node must have the same
 * nodes after it.
 */
const Problem7 = (l1, l2) => {
  let intersection;
  let l1h = l1;
  
  while (l1 !== null) {
    l1.visited = true;
    l1 = l1.next;
  }

  while (l2 !== null) {
    if (l2.visited) {
      delete l2.visited;
      intersection = l2;
      break;
    }
    l2 = l2.next;
  }
  
  return intersection
}


/**
 * Reverses a linked list [ll]
 */
// const rev_ll = (ll) => {
//   let head = ll;


// }

/**
 * Notes: 
 * 
 */
const Problem7_b = (l1, l2) => {
  if (l1 === l2) return l1
  let l1h = l1;
  let l1l = 1; // length of l1
  let l2h = l2;
  let l2l = 1; // length of l2

  while (l1h.next !== null && l1h.next.next !== null) {
    l1h = l1h.next.next;
    l1l += 2;
  }
  if (l1h.next !== null) l1l++;

  while (l2h.next !== null && l2h.next.next !== null) {
    l2h = l2h.next.next;
    l2l += 2;
  }
  if (l2h.next !== null) l2l++;

  let diff = l2l - l1l;
  let long, short;
  
  if (diff > 0) {
    long = l2;
    short = l1;
  }
  else {
    long = l1;
    short = l2
  }
  
  diff = Math.abs(diff);

  while (diff !== 0) {
    long = long.next;
    diff--;
  }
  
  while (long !== null) {
    if (long === short) {
      return long
    }
    long = long.next;
    short = short.next;
  }

  return null
}

const Problem7_tester = (l1, l2, int=Node.fromArray(['x','y','z', 1])) => {
  let h1 = l1;
  let h2 = l2;

  while (l1.next !== null) {
    l1 = l1.next;
  }
  while (l2.next !== null) {
    l2 = l2.next;
  }

  
  l1.next = int;
  l2.next = int;
  
  return  Problem7_b(h1, h2) === int;
}

let singleNode = new Node(1);

// Tests for Problem7
console.assert(Problem7(singleNode, singleNode) === singleNode, "first item similar");
console.assert(Problem7_tester(Node.fromArray(['a','b','c','d']), Node.fromArray([1,4])) === true, "different lengths");

module.exports;
