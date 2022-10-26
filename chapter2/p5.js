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


// Tests for Problem 5
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


// Tests for Problem 5_b
console.log("Problem 5_b Tests running... \n");
console.assert(Problem5_b(Node.fromArray([0]), Node.fromArray([1])).print() === '1 -> null', 'single value arrays');
console.assert(Problem5_b(Node.fromArray([0,0,0]), Node.fromArray([1,1,1])).print() === '1 -> 1 -> 1 -> null', 'multiple values');
console.assert(Problem5_b(Node.fromArray([7,1,6]), Node.fromArray([5,9,2])).print() === '2 -> 1 -> 9 -> null', 'book provided test');


const Problem5_rec = (n1, n2) => {
  if (n1 === null && n2 === null) return null
  
  const n1_val = n1 === null ? 0 : n1.val;
  const n1_next = n1 === null ? null : n1.next;
  const n2_val = n2 === null ? 0 : n2.val;
  const n2_next = n2 === null ? null : n2.next;

  if (n1_val + n2_val > 9) {
    if (n1_next === null && n2_next === null) {
      return new Node((n1_val + n2_val) % 10, new Node(1)); 
    }
    if (n1_next === null) {
      n1_next = new Node(1);
    }
    else {
      n1.next.val = n1.next.val + 1;
    }
  }

  return new Node((n1_val+ n2_val) % 10, Problem5_rec(n1_next, n2_next))
}

// Tests for Problem 5_recs
console.log("Problem 5_rec Tests running... \n");
console.assert(Problem5_rec(Node.fromArray([0]), Node.fromArray([1])).print() === '1 -> null', 'single value arrays');
console.assert(Problem5_rec(Node.fromArray([0,0,0]), Node.fromArray([1,1,1])).print() === '1 -> 1 -> 1 -> null', 'multiple values');
console.assert(Problem5_rec(Node.fromArray([7,1,6]), Node.fromArray([5,9,2])).print() === '2 -> 1 -> 9 -> null', 'book provided test');
console.assert(Problem5_rec(Node.fromArray([5,1,2]), Node.fromArray([5])).print() === '0 -> 2 -> 2 -> null', 'book provided test 2');


/** Same problem, solution with the return linked list in the normal order */
const Problem5_rec_rev = (n1, n2) => {
  return "unimplemented"
}

// Tests for Problem 5_rec_rev
// console.log("Problem 5_rec_rev Tests running... \n");
// console.assert(Problem5_rec_rev(Node.fromArray([0]), Node.fromArray([1])).print() === '1 -> null', 'single value arrays');
// console.assert(Problem5_rec_rev(Node.fromArray([0,0,0]), Node.fromArray([1,1,1])).print() === '1 -> 1 -> 1 -> null', 'multiple values');
// console.assert(Problem5_rec_rev(Node.fromArray([7,1,6]), Node.fromArray([5,9,2])).print() === '2 -> 1 -> 9 -> null', 'book provided test');
// console.assert(Problem5_rec_rev(Node.fromArray([5, 1, 2]), Node.fromArray([5])).print() === '0 -> 2 -> 2 -> null', 'book provided test 2');


module.exports;

/**
 * Notes:
 * I made this work for sums that are greater than 18, for the reason that I
 * forgot that they correspond to only one digit numbers... I guess a good
 * exercise emerged in the end, just shows that I need to focus on the
 * problem. I will try to read carefully and everytime I attempt the
 * problem.
 */
