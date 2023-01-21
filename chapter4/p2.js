const { LLNode, Graph, GraphNode, GraphAL } = require('../lib/lib');
const { test_graph_0 } = require('../lib/testing/graphs');

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
const Problem1 = (graph, idx1, idx2) => {
  return graph.DFS(idx1, idx2);
}

console.log('Problem 1 tests running... \n');
console.assert(Problem1(test_graph_0, 0, 0) === true, "search for itself");
console.assert(Problem1(test_graph_0, 0, 1) === true, "search for child");
console.assert(Problem1(test_graph_0, 0, 2) === true, "search for other child");
console.assert(Problem1(test_graph_0, 0, 3) === true, "search for child of child");
console.assert(Problem1(test_graph_0, 0, 4) === true, "search for child of child of child");
console.assert(Problem1(test_graph_0, 0, 5) === false, "search for unreachable node");
console.assert(Problem1(test_graph_0, 1, 2) === false, "search for other child");


module.exports;

/**
 * Notes:
 */
