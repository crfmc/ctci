const { } = require('../lib/lib');
const { t4 } = require('../lib/testing/binarytrees');

/**
 * Question: Check balanced: Implement a function to check if a binary tree is balanced.
 * For the purposes of this question, a balanced tree is defined to be a tree such that
 * the height of the two subtrees of any node never differ by more than one.
 */

/**
 * Notes: 
 * We will need to have a way of checking the depth of each subtree. We can do a depth
 * first search to get the depth of the left-most node. Then, we can traverse through 
 * the rest of the graph.
 * - 
 * - ex:
 *                      1
 *           2                       3
 *      4       5                          6      
*                                      7
 * 
 * Count the depth as you go along down to 4 (d), then iff balanced, the count should never
 * be less than d + 1, d - 1 when visiting other nodes.
 * 
 * 
 * q: ( 1:1  2:2 4:3 5:3 6:3 7:4 3:2 | [6,3] [3,2] (no breaks)
 * want to visit 4, 2, 5
 * depth: 1
 * 
 * We want to write dfs, but pop the current node after its children are added, and instead
 * we want to check the difference in depth. If the difference is greater than 1, it will
 * not work.
 * 
 * 
 * OPT 2:
 * if (children.length === 1) {
 *  if (children[0].children.length > 0) {
 *   return false;
 *  } 
 * }
 * 
 * 
 * OPT3: traverse tree recursively and check for imbalance. When there is one,
 * if there is one, check if it qualifies and return false if so, otherwise 
 * return true
 */


/**
 * 
 * @param {*} t the tree that should be tested
 * @returns {Boolean} true iff the height of the two subtrees of any
 * node never differ by more than one.
 */
const Problem4 = (t) => {
  if (t === null) return true
  
  // Right side is null
  if (t.left !== null && t.right === null ) {
    // Does it have a child?
    if (t.left.left !== null || t.left.right !== null) {
        return false
    }
  }

  // Left side is null
  if (t.left === null && t.right !== null ) {
    // Does the child have a child?
    if (t.right.left !== null || t.right.right !== null) {
        return false
    }
  }

  return true && Problem4(t.left) && Problem4(t.right);
}

/**
 *      1
 *          2
 *              3
 */



/**
 * 
 */
const Problem4Tester = (t) => {
  return Problem4(t)
}

console.log('Problem 4 tests running... \n');
console.assert(Problem4Tester(t4[0]) === true, "single node binary tree");
console.assert(Problem4Tester(t4[1]) === true, "one side null binary tree");
console.assert(Problem4Tester(t4[2]) === false, "unbalanced on far right");
console.assert(Problem4Tester(t4[3]) === true, "one side null binary tree depth 2");
console.assert(Problem4Tester(t4[4]) === false, "unbalanced on far right by 3");
// console.assert(Problem4Tester() === true, "search for child");
// console.assert(Problem4Tester() === true, "search for other child");
// console.assert(Problem4Tester() === true, "search for child of child");
// console.assert(Problem4Tester() === true, "search for child of child of child");
// console.assert(Problem4Tester() === false, "search for unreachable node");
// console.assert(Problem4Tester() === false, "search for other child");




module.exports;

/**
 * Notes:
 */
