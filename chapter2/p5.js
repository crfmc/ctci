const { Node } = require('./lib');
/**
 * Question:
 * 
 */


/**
 * Notes: 
 * 
 */
const Problem5 = (n) => {
  return n
}

const Problem5_tester = (a, idx) => {
  let ll = Node.fromArray(a);
  Problem5(ll.nodeAt(idx));
  return ll.print();
}


// Tests for Problem 3
console.log("Problem 5 Tests running... \n");
console.assert(Problem5_tester([1, 2, 3, 4], 1) === '1 -> 3 -> 4 -> null', 'Deleting second value');
console.assert(Problem5_tester([1, 2, 3, 4], 2) === '1 -> 2 -> 4 -> null', 'Deleting third value');
console.assert(Problem5_tester([1, 2, 3], 1) === '1 ->   3 -> null', 'Deleting middle value');




module.exports;

/**
 * Notes:
 */
