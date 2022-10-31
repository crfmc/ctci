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
 * Notes: This soluton attempts to reach a O(A+B) runtime and
 * O(1) space complexity. In order to do this it requires an
 * O(A+B) reversal of both lists.
 */
const Problem7_b = (l1, l2) => {
  console.log(l1.print());
  console.log(l2.print());
  let l1_rev = l1.reverse();
  let l2_rev = l2.reverse();
  
  console.log('--------')
  console.log('l1: ',l1_rev.print(), '\n', 'l2: ',l2_rev.print());
  
  
  return l1
}

const Problem7_tester = (l1, l2, int=Node.fromArray([10,11,12])) => {
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


// Tests for Problem7
console.assert(Problem7_tester(Node.fromArray([0,1,2]),Node.fromArray([9,8])) === true, "single item array");
// console.assert( Problem7(new Node(0), 1) === true, "single node linked list");
// console.assert( Problem7(Node.fromArray([0,1,2,3,2,1,0]), 7) === true, 
// "decently long odd length linked list");
// console.assert( Problem7(Node.fromArray([1,2,4,4,2,1]), 6) === true, 
// "decently long even length linked list");
// console.assert( Problem7(Node.fromArray([0,1,2,3,2,7,0]), 7) === false, 
// "long odd length wrong linked list");
// console.assert( Problem7(Node.fromArray([1,2,4,4,7,1]), 6) === false, 
// "long even length wrong linked list");


module.exports;
