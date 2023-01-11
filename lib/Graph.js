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
  // Add a graph node with name [name] to this graph and return it
  addNode(gn) {
    this.nodes.push(gn);
    return gn;
  }
  // Add a graph node with name [name] to this graph and return it
  addNodeWithName(name) {
    const newNode = new GraphNode(name);
    this.nodes.push(newNode);
    return newNode;
  }
  // Add a child node, [child], as a child of parent node, [parent].
  addChildGNode(child, parent) {
    this.addNode(child);
    parent.addChildGN(child);
    return child;
  }
  // Add a child node with name, [childName], as a child of parent node, [parent].
  addChildGNodeVal(childName, parent) {
    const newNode = new GraphNode(childName);
    this.addNode(newNode);
    parent.addChildGN(newNode);
    return newNode;
  }
  getChildrenVals() {
    console.log(this.nodes);
    return this.nodes.map((c) => c.val);
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
  BFS(idx1, idx2) {
    if (idx1 < 0 || idx1 > this.nodes.length - 1) {
      throw new RangeError(`Index ${idx1} does not exist`)
    }
    if (idx2 < 0 || idx2 > this.nodes.length - 1) {
      throw new RangeError(`Index ${idx2} does not exist`)
    }
    if (idx1 === idx2) return true;


    let n1 = this.nodeAt(idx1);
    let n2 = this.nodeAt(idx2);
    // console.log(`${n1.val} is looking for ${n2.val}: \n———————————————————`);

    // Create a queue to store a nodes children
    let q = new QueueLL();
    q.add(n1); // satisfy invariant below by adding n1 to the queue
    // console.log(q.print(v => v.data.val));

    // Create map to store visited nodes
    let visited = new Map();

    /**
     * Loop invariants: 
     * - All nodes in the queue are unvisited
     * - When the queue [q] is empty, all nodes have been visited,
     *   or a node with value [v2] has been found.
     */
    while (!q.isEmpty()) {

      // visit the node at the top of the queue and add to visited
      let currNode = q.peek();

      if (currNode === n2) return true
      
      // Get current node's children and add them to the 
      let currNodeChildren = currNode.getChildren();
      currNodeChildren.forEach((c) => {
        if (!visited.has(c)) {
          q.add(c);
        }
      });
    
      // console.log("Queue for", currNode.val, ":", q.print(v => v.data.val));
      
      
      visited.set(currNode);
      q.remove();
    }
    
    return false;
  }
}

module.exports = Graph;