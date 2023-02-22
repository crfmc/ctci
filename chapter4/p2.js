const { BSTreeNode } = require('../lib/lib');

/**
 * Question: Given a sorted (increasing order) array with unique integer
 * elements, write an algorithm to create a binary seach tree with 
 * minimal height.
 */

/**
 * Notes: 
 * Here the question is asking me to create a BST from an array. I will
 * add the method to the BST class and use it here.
 */
const Problem2 = (a) => {
  return BSTreeNode.fromArray(a);
}

console.log('Problem 2 tests running... \n');

// console.assert(Problem1(test_graph_0, 0, 0) === true, "search for itself");
// console.assert(Problem1(test_graph_0, 0, 1) === true, "search for child");
// console.assert(Problem1(test_graph_0, 0, 2) === true, "search for other child");
// console.assert(Problem1(test_graph_0, 0, 3) === true, "search for child of child");
// console.assert(Problem1(test_graph_0, 0, 4) === true, "search for child of child of child");
// console.assert(Problem1(test_graph_0, 0, 5) === false, "search for unreachable node");
// console.assert(Problem1(test_graph_0, 1, 2) === false, "search for other child");


module.exports;

/**
 * Notes: This problem helped me think about how binary search trees are
 * created. It begins by taking a middle (average value) element, and
 * making it the root. We can ensure that the binary search tree has
 * the minimum depth because we know there are more or the same number
 * of values going on the left side of the tree as the right.
 */
