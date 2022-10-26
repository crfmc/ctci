const { Node } = require('./lib');

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



module.exports;

/**
 * Notes:
 * 
*/
