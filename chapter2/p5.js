const { Node } = require('./lib');
/**
 * Question:
 * 
 */


/**
 * Notes: 
 * Assumes both linked lists are not null, AND that they are
 * of the same length
 * 
 */

const getNum = (n) => {
  let s = "";
  while ( n !== null ) {
    s = n.val + s;
    n = n.next;
  }
  return parseInt(s);
}
const Problem5 = (n1, n2) => {

  let sum = getNum(n1) + getNum(n2);
  let sumString = "" + sum;
  let len = sumString.length;

  let first = new Node(sumString[len - 1]);
  let i = len - 2;
  let prev = first;

  while ( i >= 0 ) {
    let char = sumString[i];
    let curr = new Node(parseInt(char));
    prev.next = curr;
    prev = curr;
    i--;
  }

  return first
}

console.log(parseInt("") )

// Tests for Problem 3
console.log("Problem 5 Tests running... \n");
console.assert(Problem5(Node.fromArray([0]), Node.fromArray([1])).print() === '1 -> null', 'single value arrays');
console.assert(Problem5(Node.fromArray([0,0,0]), Node.fromArray([1,1,1])).print() === '1 -> 1 -> 1 -> null', 'multiple values');
console.assert(Problem5(Node.fromArray([7,1,6]), Node.fromArray([5,9,2])).print() === '2 -> 1 -> 9 -> null', 'book provided test');
// console.assert(Problem5_tester([1, 2, 3, 4], 2) === '1 -> 2 -> 4 -> null', 'Deleting third value');
// console.assert(Problem5_tester([1, 2, 3], 1) === '1 ->   3 -> null', 'Deleting middle value');




module.exports;

/**
 * Notes:
 */
