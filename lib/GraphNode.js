const TreeNode = require('./TreeNode');

/**
 * Here we extend the TreeNode class, but need not hold it to the same
 * conditions listed above.
 * 
 * We must use a parent Graph class because it is not necessarily possible
 * to get from any one GraphNode to the other. 
 */
class GraphNode extends TreeNode {
  constructor(name) {
    super(name, []);
  }
  childAt(i) {
    return this.children[i];
  }
  // Add a child graph node with the given val, [val]
  addChildVal(val) {
    let newGraphNode = new GraphNode(val);
    this.children.push(newGraphNode);
    return newGraphNode
  }
  addChildGN(graphNode) {
    this.children.push(graphNode);
    return graphNode
  }
  addChildrenWithNames(nameArray) {
    const newGraphNodeArray = nameArray.map(name => new GraphNode(name));
    this.children.push(...newGraphNodeArray);
  }
  getChildren() {
    return this.children
  }
  getChildrenVals() {
    return this.children.map((c) => c.val);
  }
}

// Problem:
/**
 * I have a class GraphNode and a class Graph
 * I want to have a function addChild in GraphNode
 * and a function AddNode in GraphNode
 */


module.exports = GraphNode;