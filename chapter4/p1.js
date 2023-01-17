const { LLNode, Graph, GraphNode, GraphAL } = require('../lib/lib');

/**
 * Question: Route Between Nodes: Given a directed graph, design 
 * an algorithm to find out whether there is a route between two nodes.
 */

/**
 * Notes: I will use a simple breadth first search (BFS) to find the node
 * that corresponds to such a value.
 * Assumptions: 
 * - There are no duplicate values in the graph.
 * - Each graph representation has a method, [getChildren(n)],
 *   which would allow me to get the children of a node [n].
 * 
 * Note: The speed of [getChildren()] will determine the overall
 * runtime and space complexity of this method.
 */
const Problem1 = (graph, idx1, idx2) => {
  return graph.BFS(idx1, idx2);
}


/**
 * Here I create a graph for Testing
*/
// ["A","B","C","D","E","Z"]
let test_graph_0 = new Graph();
let A = test_graph_0.addNodeWithName("A");
let B = test_graph_0.addChildGNodeVal("B", A);
let C = test_graph_0.addChildGNodeVal("C", A);

let D = test_graph_0.addChildGNodeVal("D", C);
let E = test_graph_0.addChildGNodeVal("E", D);
E.addChildGN(C);

let Z = test_graph_0.addNodeWithName("Z");

console.log('Problem 1 tests running... \n');
console.assert(Problem1(test_graph_0, 0, 0) === true, "search for itself");
console.assert(Problem1(test_graph_0, 0, 1) === true, "search for child");
console.assert(Problem1(test_graph_0, 0, 2) === true, "search for other child");
console.assert(Problem1(test_graph_0, 0, 3) === true, "search for child of child");
console.assert(Problem1(test_graph_0, 0, 4) === true, "search for child of child of child");
console.assert(Problem1(test_graph_0, 0, 5) === false, "search for unreachable node");
console.assert(Problem1(test_graph_0, 1, 2) === false, "search for other child");



const mh = new MinHeap();

for (i = 10; i <= 150; i = i + 10) {
  mh.add(i);
}

mh.add(5, true);

console.log(mh.heap)

module.exports;

/**
 * Notes:
 */
