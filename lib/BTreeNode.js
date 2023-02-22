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

    // Traverse in-order and use a function f as a "visit"
    /**
     * 
     * @param {*} f a function to execute with "this" as a parameter
     * 
     * Note: 
     * Complexity:
     * O(n) runtime:
     * - This function should perform in O(n) time, since it
     * is processing a single frame on the call stack for each
     * node and is not revisiting any others.
     * 
     * O(n) space:
     * - This takes up O(n) space because before the function [f] is
     * performed, a recursive call is made on the "left" property,
     * and this continues until it is null. At this point, the amount
     * of frames on the call stack is the same as the depth. [f] is
     * finally called, and then a call to the "right" property is
     * made. This adds a frame, but upon completion removes one, as it
     * is the last call made in that frame.
     */
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
    // Create Binary Tree from an inOrder traversal array representation
    // static fromArray(a) {
    //     for (let i = 0; i < a.length; i++) {

    //     }
    //     if (a.length === 0) return null;
    //     if (a.length === 1) return new BTreeNode(a[0]);
    //     return new BTreeNode(
    //         this.fromArray(a.slice(0, split)),
    //         a[split],
    //         this.fromArray(a.slice(split + 1)));
    // }
}


/**
 * [0,1,2,3,4,5,6,7]
 * 
 * 
 *          0 
 *      1       2
 *    3   4   5   6
 * 
 * We know that the children of the value at i are:
 * 2k + 1, 2k + 2
 * 0 => 1,2
 * 2 => 5,6
 * 
 * parents of i are k = (i - 1) / 2
 * 5 => 2
 * 1 => 0
 * 
 * we know where childen and parents are, start from the root
 * and traverse through both branches.
 * 
 * We can do this recursively by calling the same function on 
 * the children nodes.
 * fromArray(a[2k + 1], a.slice[2k + 1]);
 * fromArray(a[2k + 1], a.slice[2k + 1]);
 * This should return the left and right side of the arrays
 * using the children as roots.
 * 
 * [1,2,3]
 * return new BT(
 *  a[1], // left value is set as this
 *  this.fromArray(a.slice(2k + 1), // traverse the left
 *  this.fromArray(a.slice(2k + 2)) // traverse the right
 * ));
 * 
 * 
 * 
 */

module.exports = BTreeNode;