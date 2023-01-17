const deps = {
  Node: "./Node",
  TreeNode: './TreeNode',
  TreeNode: './TreeNode',
  LLNode: './LLNode',
  LL: './LL',
  QueueLL: './QueueLL',
  Stack: './Stack',
  StackLL: './StackLL',
  BTreeNode: './BTreeNode',
  BSTreeNode: './BSTreeNode',
  Tree: './Tree',
  MinHeap: './MinHeap',
  MaxHeap: './MaxHeap',
  GraphNode: './GraphNode',
  Graph: './Graph',
  GraphAL: './GraphAL'
}

for (let dep in deps) {
  module.exports[dep] = require(deps[dep]);
}