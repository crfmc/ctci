import { TreeNode } from './TreeNode';


/**
 * Here we extend the TreeNode class, but need not hold it to the same
 * conditions listed above.
 * 
 * We must use a parent Graph class because it is not necessarily possible
 * to get from any one GraphNode to the other. 
 */
class GraphNode extends TreeNode {
  constructor(name) {
    super(name);
  }
}



/**
 * In relation to trees, graphs may have cycles and need not be connected.
 */
export class Graph {
  constructor() {
    this.nodes = [];
  }
}

