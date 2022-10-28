const { Node } = require('./lib.js');
/**
 * Question:
 * 
 */

/**
 * Notes:
 */
const Problem7 = (l1, l2) => {
  let intersection;
  
  while (l1 !== null) {
    l1.visited = true;
    l1 = l1.next;
  }

  while (l2 !== null) {
    if (l2.visited) {
      delete l2.visited;
      intersection = l2;
      break;
    }
    l2 = l2.next;
  }
  
  return intersection
}

const Problem7_tester = (l1, idx1, l2, idx2) => {
  let intersect = new Node(99);
  let h1 = l1;
  let h2 = l2;
  let i = 0;

  while (i <= idx1 - 1 || i <= idx2 - 1) {
    console.log(i)
    if (i === idx1) {
      console.log('first index', i)
      let aux = l1.next;
      l1.next = intersect;
      intersect.next1 = aux;
    }
    else if (i === idx2) {
      console.log('second index', i)
      let aux = l1.next;
      l2.next = intersect;
      intersect.next2 = aux;
    }

    l1 = l1.next;
    l2 = l2.next;
    i++;
  }
  console.log(l1.print(), l2.print())
  
  return Problem7(h1, h2);
}
Problem7_tester(Node.fromArray([1,2,3]), 1, Node.fromArray([4,5,6]), 1);

// Tests for Problem7
// console.assert( Problem7(null, 0) === true, "null parameter");
// console.assert( Problem7(new Node(0), 1) === true, "single node linked list");
// console.assert( Problem7(Node.fromArray([0,1,2,3,2,1,0]), 7) === true, 
// "decently long odd length linked list");
// console.assert( Problem7(Node.fromArray([1,2,4,4,2,1]), 6) === true, 
// "decently long even length linked list");
// console.assert( Problem7(Node.fromArray([0,1,2,3,2,7,0]), 7) === false, 
// "long odd length wrong linked list");
// console.assert( Problem7(Node.fromArray([1,2,4,4,7,1]), 6) === false, 
// "long even length wrong linked list");



module.exports;
