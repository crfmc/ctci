const BTreeNode = require('./BTreeNode');

/**
 * A BDTreeNode is a BTreeNode that is allowed to contain information 
 * about the height of its subtree.
 */

class BDTreeNode extends BTreeNode {
    constructor(val, left=null, right=null) {
        super(val);
        this.left = left === null ? null : this.addLeft(left);
        this.right = right === null ? null : this.addRight(right);
        this.height = 0;
    }
    // Explicitly add children
    addLeft(left) {
        if (left !== null) {
            this.left = left;
            this.height++;
        }
    }
    addRight(right) {
        if (right !== null) {
            this.right = right;
            this.height++;
        }
    }
}

module.exports = BDTreeNode;