const QueueLL = require('./QueueLL');
const GraphNode = require('./GraphNode');
const StackLL = require('./StackLL');
const GraphAL = require('./GraphAL');

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
  toAL() {
    let AL = new GraphAL();
  }
  /**
   * Searches the graph starting at the node [n1] until one of two
   * conditions are met: 
   * 1. There are no more univisted nodes
   * 2. The node with value [v2] has been found
   * @param { Number } idx1 the index of the node to begin searching at
   * @param { Number } idx2 the index of the node to find
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

    // Create map to store visited nodes
    let visited = new Map();

    /**
     * Loop invariants: 
     * - All nodes in the queue are unvisited
     * - When the queue [q] is empty, all nodes have been visited,
     *   or a node with value [v2] has been found.
     */
    while (!q.isEmpty()) {

      // remove the top element in the queue
      let currNode = q.remove();
      if (!visited.has(currNode)) {

        // visit current Node
        visited.set(currNode);
        if (currNode === n2) return true
        
        // add current node's children to the queue
        let currNodeChildren = currNode.getChildren();
        currNodeChildren.forEach((c) => {
          q.add(c);
        });
      }
    }
    
    return false;
  }
  /**
   * Searches the graph starting at the node [n1] until one of two
   * conditions are met: 
   * 1. There are no more univisted nodes reachable
   * 2. The node with value [v2] has been found
   * @param { Number } idx1 the index of the node to begin searching at
   * @param { Number } idx2 the index of the node to find
   * @returns { Boolean } Whether condition 2 as been met, aka
   * a node with value [v2] has been found.
   */
  DFS(idx1, idx2) {
    if (idx1 < 0 || idx1 > this.nodes.length - 1) {
      throw new RangeError(`Index ${idx1} does not exist`);
    }
    if (idx2 < 0 || idx2 > this.nodes.length - 1) {
      throw new RangeError(`Index ${idx2} does not exist`);
    }
    if (idx1 === idx2) return true;

    let n1 = this.nodeAt(idx1);
    let n2 = this.nodeAt(idx2);


    const s = new StackLL();
    const visited = new Map();

    // Satisfy the loop invariant by adding the first node
    s.push(n1);
    let currNode;

    // Run the loop while the stack has elements
    while (!s.isEmpty()) {
      currNode = s.pop();
      if (!visited.has(currNode)) {
        // Not visited, check for equality, or add its children to stack
        if (currNode === n2) {
          return true
        }
        else {
          // visit it, then add unvisited children
          visited.set(currNode);
          let currNodeChildren = currNode.getChildren();
          currNodeChildren.forEach((c) => {
            if (!visited.has(c)) {
              s.push(c);
            }
          })
        }
      }
    }


    return false
  }
}

module.exports = Graph;