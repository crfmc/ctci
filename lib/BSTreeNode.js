const BTreeNode = require('./BTreeNode.js');

/**
 * A class for a Binary Search Tree Node, which is a variant of a Node
 */
class BSTreeNode extends BTreeNode {
    constructor(val, left=null, right=null) {
        super(val, left, right);
    }

    // Convert sorted array into a BSTree
    static fromArray(a) {
        if (a.length === 0) return null;
        if (a.length === 1) return new BSTreeNode(a[0]);
        const split = Math.floor(a.length / 2);
        return new BSTreeNode(
            a[split],
            this.fromArray(a.slice(0, split)),
            this.fromArray(a.slice(split + 1)));
    }
}


module.exports = BSTreeNode;