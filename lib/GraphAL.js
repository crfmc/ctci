const LLNode = require('./LLNode');

/**
 * Creates an adjacency list for adding nodes to graphs.
 * 
 * This implementation uses linked lists, but it could just as
 * easily have been arrays or maps storing the neighbors;
 */
class GraphAL {
  constructor() {
    this.graph = [];
  }
  /**
   * 
   * @param {*} v1 source node
   * @param {*} v2 optional sink node
   * This creates a linkedlist node and adds it to the graph.
   * If a sink node name [v2] in provided, then it is placed as a
   * child of n1 by adding it as its "next" parameter
   */
  addNode(v1, v2 = null) {
    // Check if there already exists a value with v1
    if (this.graph.includes(v1)) {
      throw new Error(`The value ${v1} already exists in the array`);
    }
    let n2 = null;
    if (v2 !== null) {
      n2 = new LLNode(v2);
    }
    this.graph.push(new LLNode(v1, n2));
  }
  /**
   * 
   * @param {*} v1 source node
   * @param {*} v2 sink node
   */
  addEdge(v1, v2) {
    let n1idx = this.graph.findIndex(n => n.val === v1);
    this.graph[n1idx].push(v2);
  }
  // Prints the adjacency list
  print() {
    console.log('[');
    this.graph.forEach((n) => {
      console.log(' ', n.print());
    });
    console.log(']');
  }
}

module.exports = GraphAL;