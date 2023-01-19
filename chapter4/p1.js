const { LLNode, Graph, GraphNode, GraphAL } = require('../lib/lib');
const { test_graph_0 } = require('../lib/testing/graphs');

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
  return graph.DFS(idx1, idx2);
}



/**
 * —————UNIFINISHED—————
 * @param { Graph } graph The graph to test
 * @returns { Boolean } Wether or not the given graph is capable of
 * returning the correct value for each of its nodes being able to
 * reach the other reachable nodes.  
 */
const P1Tester = (graph) => {
  let len = graph.nodes.length;

  for (let n1 = 0; n1 < len; n1++) {
    for (let n2 = 0; n2 < len; n2++) {
      if (n1 !== n2) {
        // console.assert(Problem1(graph, n1, n2) === true, `Testing Nodes: ${graph.nodeAt(n1).val},  ${graph.nodeAt(n2).val}`);
      }
    }
  }
  return "unimplemented"
}
P1Tester(test_graph_0);

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
 * As part of this question, I implemented both Depth-First 
 * Search and Breadth-First Search. The next natural step is 
 * to figure out which one is the correct one to use. I will
 * discuss this decision below:
 * 
 * I understand that depth first search will avoid a neighbor
 * of the start node to reach the last descendant of its first
 * neighbor. This means that DFS is not best for graphs whose
 * start node has many neighbors, and it is likely to have the
 * target node as a neighbor.
 * 
 * As such, we could modify this algorithm to consider the case
 * when idx1 and idx2 are close to eachother, with respect to the
 * length of the nodes, and then use BFS, since it may be that
 * they are neighbors of each other. Otherwise, if they have
 * very different indexes, then it might be better to look deeper
 * into the graph.
 */
