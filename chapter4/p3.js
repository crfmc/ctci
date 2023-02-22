const { BTreeNode, BSTreeNode, LLNode } = require('../lib/lib');

/**
 * Question: Given a binary tree, design an algorithm which creates a 
 * linked list of all the nodes at each depth (e.g., if you have a tree 
 * with depth 0, you'll have 0 linked lists).
 */

/**
 * Notes: This seems relatively staightforward. A binary tree can will
 * always have 2^n nodes at level n, except for the last level, which may
 * have less than that.
 * 
 * Immediately the idea of a Breadth first traversal makes sense. Instead
 * of pushing a nodes neighbors into a stack, we can push them onto a linked
 * list. I might have to do a lot of overhead.
 * 
 * Another option is to traverse it in order, and push the values to a
 * linked list according to what level they should be at.
 * 
 * We can analyze an array of length n, and see that each level begins
 * at index 2^n
 * 0,1,3,7
 * 2k + 1
 * 
 * each new row begins at 2k + 1 where k is the count of the rows.
 */
const Problem3 = (bt) => {
  const iot = [];
  const linkedLists = [];
  bt.traverseInOrder((n) => iot.push(n.val));

  
  // Create new linked list with this value
  const setNewList = (v) => {
    let n = new LLNode(v);
    linkedLists.push(n);
    return n
  }
  
  let currentList;
  let nextFirst = 0; // inital row
  
  for (let i = 0; i < iot.length; i++) {
    if (i === nextFirst) {
      currentList = setNewList(iot[i]);
      nextFirst = i * 2 + 1;
    }
    else {
      currentList.push(iot[i]);
    }
  }
  return linkedLists
}

console.log('Problem 3 tests running... \n');

console.assert(Problem3(BSTreeNode.fromArray([0, 1, 2, 3]))[0].print() === "0 -> null");
console.assert(Problem3(BSTreeNode.fromArray([0, 1, 2, 3]))[1].print() === "1 -> 2 -> null");
console.assert(Problem3(BSTreeNode.fromArray([0, 1, 2, 3]))[2].print() === "3 -> null");
console.assert(Problem3(BSTreeNode.fromArray([0]))[0].print() === "0 -> null");
console.assert(Problem3(BSTreeNode.fromArray([0,2,3]))[1].print() === "2 -> 3 -> null");


module.exports;

/**
 * Notes: This function seems to work well but let's analyze the 
 * runtime and space complexity:
 * O(n) runtime:
 * - The runtime for this function consists of the traverseInOrder()
 * function in the BTree class. This is makes recursive calls to each
 * of its children and executes an O(1) function (push) on them. Then,
 * it simply traverses them in O(n) time.
 * 
 * O(n) space:
 * - The function traverses the binary tree and saves it in an array of
 * size n where n is the number of nodes. Then we create a new array to
 * hold the linked lists, which will need at most n entries (a linked
 * list node for each binary tree node).
 * 
 */
