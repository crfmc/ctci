const BTreeNode = require('./BTreeNode.js');

/**
 * A class for a Binary Search Tree Node, which is a variant of a Node
 */
class BSTreeNode extends BTreeNode {
    constructor(val, left=null, right=null) {
        super(val, left, right);
    }
    // Traverse in-order and use a function f as a "visit"
    traverseInOrder(f = (n => console.log(n.val))) {
        if (this.left !== null) this.left.traverseInOrder(f);
        f(this);
        if (this.right !== null) this.right.traverseInOrder(f);
    }

    // Traverse pre-order
    traversePreOrder(f = (n => console.log(n.val))) {
        f(this);
        if (this.left !== null) this.left.traversePreOrder(f);
        if (this.right !== null) this.right.traversePreOrder(f);
    }

    // Traverse post-order
    traversePostOrder(f = (n => console.log(n.val))) {
        if (this.left !== null) this.left.traversePostOrder(f);
        if (this.right !== null) this.right.traversePostOrder(f);
        f(this);
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