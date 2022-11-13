const { Node } = require('../lib');
/**
 * Question:
 * Delete Middle Node: Implement an algorithm to delete a node in the middle 
 * (i.e., any node but the first and last node, not necessarily the exact middle)
 * of a singly linked list, given only access to that node.
 */


/**
 * Notes: this one came pretty naturally, that's kinda good. Sort of a simple one.
 * 
 */
const Problem3 = (n) => {
  if (n.next === null) {
    throw new Error('this node is the last in the list, there is not middle node.')
  }
  n.val = n.next.val;
  n.next = n.next.next;
  return
}

const Problem3_tester = (a, idx) => {
  let ll = Node.fromArray(a);
  Problem3(ll.nodeAt(idx));
  return ll.print();
}


// Tests for Problem 3
console.log("Problem 3 Tests running... \n");
console.assert(Problem3_tester([1, 2, 3, 4], 1) === '1 -> 3 -> 4 -> null', 'Deleting second value');
console.assert(Problem3_tester([1, 2, 3, 4], 2) === '1 -> 2 -> 4 -> null', 'Deleting third value');
console.assert(Problem3_tester([1, 2, 3], 1) === '1 -> 3 -> null', 'Deleting middle value');




module.exports;

/**
 * Notes:
 */
