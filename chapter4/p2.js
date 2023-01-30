const { BSTreeNode } = require('../lib/lib');

/**
 * Question: Given a sorted (increasing order) array with unique integer
 * elements, write an algorithm to create a binary seach tree with 
 * minimal height.
 */

/**
 * Notes: 
 * Here the question is asking me to create a BST from an array.
 */
const Problem2 = (a) => {
  return BSTreeNode.fromArray(a);
}

console.log('Problem 1 tests running... \n');

// console.assert(Problem1(test_graph_0, 0, 0) === true, "search for itself");
// console.assert(Problem1(test_graph_0, 0, 1) === true, "search for child");
// console.assert(Problem1(test_graph_0, 0, 2) === true, "search for other child");
// console.assert(Problem1(test_graph_0, 0, 3) === true, "search for child of child");
// console.assert(Problem1(test_graph_0, 0, 4) === true, "search for child of child of child");
// console.assert(Problem1(test_graph_0, 0, 5) === false, "search for unreachable node");
// console.assert(Problem1(test_graph_0, 1, 2) === false, "search for other child");



let t1 = Problem2([0, 1, 2, 3, 4, 5]);
let inOrderTrav = "012345";
let ans = "";
t1.traversePostOrder(n => ans += n.val);
console.log(ans)
// console.assert(inOrderTrav === BSTreeNode.traverseInOrder(t1, (n => ans += n.val)));

module.exports;

/**
 * Notes:
 */
