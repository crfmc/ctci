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
  addChildren(valArray) {
    valArray.forEach((v) => {
      this.children.push(new GraphNode(v));
    });
  }
  getChildren() {
    return this.children
  }
}



module.exports = GraphNode;