const BTreeNode = require('../BTreeNode');

const t4 = [
    new BTreeNode(1),
    new BTreeNode(1, new BTreeNode(2)),
    new BTreeNode(1, new BTreeNode(2, new BTreeNode(3))),
    new BTreeNode(1, new BTreeNode(2, null, new BTreeNode(4)), new BTreeNode(3)),
    new BTreeNode(1, new BTreeNode(2, null, new BTreeNode(3, null, new BTreeNode(4)))),
];


const t1 = new BTreeNode(
    1,
    new BTreeNode(2,
        new BTreeNode(4,
        ),
        new BTreeNode(5,
        )
    ), 
    new BTreeNode(3,
        new BTreeNode(6,
        ),
        new BTreeNode(7,
        )
    ),
);

// Unbalanced tree
const t2 = new BTreeNode(
    1,
    new BTreeNode(2,
        new BTreeNode(4,
            new BTreeNode(5,
            )
        ),
    ), 
    new BTreeNode(3,
        new BTreeNode(6,
        ),
        new BTreeNode(7,
        )
    ),
);

module.exports = {
    t4,
    t1,
    t2
}