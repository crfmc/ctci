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


// Tests for Problem 3
console.log("Problem 5 Tests running... \n");
console.assert(Problem5(Node.fromArray([0]), Node.fromArray([1])).print() === '1 -> null', 'single value arrays');
console.assert(Problem5(Node.fromArray([0,0,0]), Node.fromArray([1,1,1])).print() === '1 -> 1 -> 1 -> null', 'multiple values');
console.assert(Problem5(Node.fromArray([7,1,6]), Node.fromArray([5,9,2])).print() === '2 -> 1 -> 9 -> null', 'book provided test');
// console.assert(Problem5_tester([1, 2, 3, 4], 2) === '1 -> 2 -> 4 -> null', 'Deleting third value');
// console.assert(Problem5_tester([1, 2, 3], 1) === '1 ->   3 -> null', 'Deleting middle value');

const Problem5_b = (n1, n2) => {

  let carry_over = 0;
  let prev = null;
  let head;

  while (n1 !== null && n2 !== null) {
    let sum = n1.val + n2.val;

    if (prev === null) {
      head = new Node((sum % 10) + carry_over);
      prev = head;
    }
    else {
      prev.next = new Node(sum % 10 + carry_over);
      prev = prev.next;
    }
    
    if (sum > 9) {
      carry_over = Math.floor(sum / 10);
    }
    else {
      carry_over = 0;
    }

    n1 = n1.next;
    n2 = n2.next;
  }
  

  return head
}


// Tests for Problem 3
console.log("Problem 5_b Tests running... \n");
console.assert(Problem5_b(Node.fromArray([0]), Node.fromArray([1])).print() === '1 -> null', 'single value arrays');
console.assert(Problem5_b(Node.fromArray([0,0,0]), Node.fromArray([1,1,1])).print() === '1 -> 1 -> 1 -> null', 'multiple values');
console.assert(Problem5_b(Node.fromArray([7,1,6]), Node.fromArray([5,9,2])).print() === '2 -> 1 -> 9 -> null', 'book provided test');


const Problem5_rec = (n1, n2) => {
  if (n1 === null ) {}
  let head = new Node ();
  return ""
}


// Tests for Problem 3
console.log("Problem 5_rec Tests running... \n");
console.assert(Problem5_rec(Node.fromArray([0]), Node.fromArray([1])).print() === '1 -> null', 'single value arrays');
console.assert(Problem5_rec(Node.fromArray([0,0,0]), Node.fromArray([1,1,1])).print() === '1 -> 1 -> 1 -> null', 'multiple values');
console.assert(Problem5_rec(Node.fromArray([7,1,6]), Node.fromArray([5,9,2])).print() === '2 -> 1 -> 9 -> null', 'book provided test');

module.exports;

/**
 * Notes:
 * I made this work for sums that are greater than 18, for the reason that I
 * forgot that they correspond to only one digit numbers... I guess a good
 * exercise emerged in the end, just shows that I need to focus on the
 * problem. I will try to read carefully and everytime I attempt the
 * problem.
 */
