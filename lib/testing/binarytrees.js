const BTreeNode = require('../BTreeNode');
const BDTreeNode = require('../BDTreeNode');

// Tests for t4
const t4 = [
    new BTreeNode(1),
    new BTreeNode(1, new BTreeNode(2)),
    new BTreeNode(1, new BTreeNode(2, new BTreeNode(3))),
    new BTreeNode(1, new BTreeNode(2, null, new BTreeNode(4)), new BTreeNode(3)),
    new BTreeNode(1, new BTreeNode(2, null, new BTreeNode(3, null, new BTreeNode(4)))),
];

const t4_b = [
    new BDTreeNode(1),
    new BDTreeNode(1, new BDTreeNode(2)),
    new BDTreeNode(1, new BDTreeNode(2, new BDTreeNode(3))),
    new BDTreeNode(1, new BDTreeNode(2, null, new BDTreeNode(4)), new BDTreeNode(3)),
    new BDTreeNode(1, new BDTreeNode(2, null, new BDTreeNode(3, null, new BDTreeNode(4)))),
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
    t4, t4_b,
    t1,
    t2
}