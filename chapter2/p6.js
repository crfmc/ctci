const { Node, Stack } = require('./lib');

/**
 * Question:
 * 
 */

/**
 * Notes:
 * This first solution is the best I could come up with in half an hour.
 * I looked into other solutions, but they became overly complicated before
 * any real progress was made, nothing really came to mind.
*/
const Problem6 = (n) => {
  if (n === null || n.next === null) {
    return true
  }
  let head = n;
  p1 = head;
  p2 = head.next;

  let len = 2;

  while (p2.next!== null && p2.next.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
    len += 2;
  }
  if (p2.next !== null) {
    len += 1;
    p1 = p1.next.next; // skip the middle node
  }
  else {
    p1= p1.next;
  }
  p2 = head;

  let p2a = [];
  let p1a = [];
  let a_len = Math.floor(len / 2);

  // create two subarrays, of equal length (a_len)
  for (let i = 1; i <= a_len; i++) {
    p2a.push(p2.val);
    p1a.push(p1.val);
    p2 = p2.next;
    p1 = p1.next;
  }

  // compare the two arrays
  for (let j = 0; j < a_len; j++) {
    if (p2a[j] !== p1a[a_len - 1 - j]) {
      return false
    }
  }

  return true
}

  
// Tests for Problem
console.log("Problem 6 Tests running... \n");

console.assert( Problem6(null) === true, "null parameter");
console.assert( Problem6(new Node(0)) === true, "single node linked list");
console.assert( Problem6( Node.fromArray([0,1,2,3,2,1,0])) === true, 
"decently long odd length linked list");
console.assert( Problem6(Node.fromArray([1,2,4,4,2,1])) === true, 
"decently long even length linked list");
console.assert( Problem6(Node.fromArray([0,1,2,3,2,7,0])) === false, 
"long odd length wrong linked list");
console.assert( Problem6(Node.fromArray([1,2,4,4,7,1])) === false, 
"long even length wrong linked list");

/**
 * Notes:
 * This second solution came to mind after reading hint #5 and #13.
 * In truth, it was something I had originally considered but I
 * did not entertain it enough to reach a solution.
 * 
 * Perhaps it was because I didn't have a stack implemented. The 
 * moment I saw the word Stack, I knew exactly what had to be
 * done.
*/
const Problem6_b = (n) => {
  if (n === null || n.next === null) {
    return true
  }
  let head = n;
  p1 = head;
  p2 = head.next;
  let s = new Stack();

  while (p2.next!== null && p2.next.next !== null) {
    p2 = p2.next.next;
    p1 = p1.next;
  }
  if (p2.next !== null) {
    p1 = p1.next.next; // skip the middle node
  }
  else {
    p1= p1.next; // right side of middle
  }
  p2 = head;

  while (p1 !== null) {
    s.push(p1.val);
    p1 = p1.next;
  }

  while (s.size > 0) {
    if (p2.val !== s.pop()) {
      return false
    }
    p2 = p2.next;
  }

  return true
}

  
// Tests for Problem
console.log("Problem6_b Tests running... \n");

console.assert( Problem6_b(null) === true, "null parameter");
console.assert( Problem6_b(new Node(0)) === true, "single node linked list");
console.assert( Problem6_b( Node.fromArray([0,1,2,3,2,1,0])) === true, 
"decently long odd length linked list");
console.assert( Problem6_b(Node.fromArray([1,2,4,4,2,1])) === true, 
"decently long even length linked list");
console.assert( Problem6_b(Node.fromArray([0,1,2,3,2,7,0])) === false, 
"long odd length wrong linked list");
console.assert( Problem6_b(Node.fromArray([1,2,4,4,7,1])) === false, 
"long even length wrong linked list");


/**
 * Notes:
 * Recursive solution for this problem based on a hint given
 * in the book.
 * 
 * Assumes the length of the linked list in known
*/
const Problem6_rec = (n, len) => {
  if (len < 2 || n === null) return true
  // console.log(n.print(), len)
  return n.val === n.nodeAt(len - 1).val && Problem6_rec(n.next, len - 2);
}

  
// Tests for Problem
console.log("Problem6_rec Tests running... \n");

console.assert( Problem6_rec(null, 0) === true, "null parameter");
console.assert( Problem6_rec(new Node(0), 1) === true, "single node linked list");
console.assert( Problem6_rec(Node.fromArray([0,1,2,3,2,1,0]), 7) === true, 
"decently long odd length linked list");
console.assert( Problem6_rec(Node.fromArray([1,2,4,4,2,1]), 6) === true, 
"decently long even length linked list");
console.assert( Problem6_rec(Node.fromArray([0,1,2,3,2,7,0]), 7) === false, 
"long odd length wrong linked list");
console.assert( Problem6_rec(Node.fromArray([1,2,4,4,7,1]), 6) === false, 
"long even length wrong linked list");

module.exports;

/**
 * Notes:
 * 
*/
