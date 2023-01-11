const QueueLL = require('./QueueLL');
const GraphNode = require('./GraphNode');

/**
 * In relation to trees, graphs may have cycles and need not be connected.
 */
class Graph {
  constructor() {
    this.nodes = [];
  }
  nodeAt(i) {
    return this.nodes[i];
  }
  addNode(name) {
    this.nodes.push(new GraphNode(name));
  }
  /**
   * Searches the graph starting at the node [n1] until one of two
   * conditions are met: 
   * 1. There are no more univisted nodes
   * 2. The node with value [v2] has been found
   * @param {*} n1 the node to begin at
   * @param {*} v2 the value corresponding to the node to find
   * @returns { Boolean } Whether condition 2 as been met, aka
   * a node with value [v2] has been found.
   */
  BFS(v1, v2) {

    // Create a queue to store an nodes children
    let q = new QueueLL();

  }
}

module.exports = Graph;