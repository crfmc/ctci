const Node = require('./Node');

// Class for a node as part of a tree
class TreeNode extends Node {
    constructor(val, children=[]) {
        super(val);
        this.children = children;
    }
}

module.exports = TreeNode;