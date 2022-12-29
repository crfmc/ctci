const TreeNode = require('./TreeNode');


class Tree {
    constructor(val) {
        this.root = new TreeNode(val);
    }
}


module.exports = Tree;