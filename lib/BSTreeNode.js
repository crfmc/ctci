const BTreeNode = require('./BTreeNode.js');

/**
 * A class for a Binary Search Tree Node, which is a variant of a Node
 */
class BSTreeNode extends BTreeNode {
    constructor(val, left, right) {
        super(val, left, right);
    }
    // [visit] applies a function to a node, or returns null
    // Ex: f = (n) => console.log(n.val) prints the value of the node, n.
    static visit(f, n) {
        return this === null ? "null" : f(n)
    }

    // Traverse in-order
    static traverseInOrder(n) {
        if (n !== null) {
            BSTreeNode.traverseInOrder(n.left);
            BSTreeNode.visit((n) => console.log(n.val), n);
            BSTreeNode.traverseInOrder(n.right);
        }
    }
    // Traverse pre-order
    static traversePreOrder(n) {
        if (n !== null) {
            BSTreeNode.visit((n) => console.log(n.val), n);
            BSTreeNode.traversePreOrder(n.left);
            BSTreeNode.traversePreOrder(n.right);
        }
    }
     // Traverse post-order
     static traversePostOrder(n) {
        if (n !== null) {
            BSTreeNode.traversePostOrder(n.left);
            BSTreeNode.traversePostOrder(n.right);
            BSTreeNode.visit((n) => console.log(n.val), n);
        }
    }
}


module.exports = BSTreeNode;