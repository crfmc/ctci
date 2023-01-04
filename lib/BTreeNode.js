const Node = require('./Node');

/**
 * A BTreeNode is a node that functions inside of a Binary Tree.
 * It does not have a children field, but rather a field for its
 * left and right child.
 */

class BTreeNode extends Node {
    constructor(val, left=null, right=null) {
        super(val);
        this.left = left;
        this.right= right;
    }
}

module.exports = BTreeNode;