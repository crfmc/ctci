const { Node, LLNode, LL } = require('./lib');
/**
 * Question:
 *  - Implement an algorithm to find the kth to last element of a singly linked list.
 */

/**
 * Notes:
 * 
 * Best conceivable runtime, probably O(n)
 * 
 *  
 */
const Problem2 = (n, k) => {
  let map = new Map();
  let i = 0;

  while (n.next !== null) {
    map.set(i, n);
    n = n.next;
    i++;
  }

  map.set(i, n);

  let target = i - (k - 1);
  return map.get(target);
}

// Tests for Problem 2
console.log("Problem2 Tests running... \n");
console.assert(Problem2(new Node(0), 1).print() === "0 -> null", "1st to last of single");
console.assert(Problem2(new Node(0, new Node(0)), 1).print() === "0 -> null", "first to last of length 2 ll");
console.assert((Problem2(Node.fromArray([0,1,2,3,4]), 3)).print() === "2 -> 3 -> 4 -> null", "middle of an odd ll");
console.assert((Problem2(Node.fromArray([0,2,0,2,2]), 1)).print() === "2 -> null", "interspersed values"); 



const Problem2_runner = (n,k) => {
  let p1 = n;
  let p2 = n.next;

  if (n.next === null) {
    return n
  }

  let i = 1;

  while (p2.next !== null && p2.next.next !== null) {
    p2 = p2.next.next;
    i += 2;
  }

  if (p2.next !== null) {
    p2 = p2.next;
    i++;
  }

  let target = i - (k - 1);
  
  if (target === i) return p2
  else {
    let j = 0;
    while (j < target) {
      p1 = p1.next;
      j++;
    }

    return p1
  }

  return n
}

// Tests for Problem 2_runner
console.log("Problem2_runner Tests running... \n");
console.assert(Problem2_runner(new Node(0), 1).print() === "0 -> null", "1st to last of single");
console.assert(Problem2_runner(new Node(0, new Node(0)), 1), "first to last of length 2 ll");
console.assert((Problem2_runner(Node.fromArray([0,1,2,3,4]), 3)).print() === "2 -> 3 -> 4 -> null", "middle of an odd ll");
console.assert((Problem2_runner(Node.fromArray([0,2,0,2,2]), 1)).print() === "2 -> null", "interspersed values"); 



const problem2_aux = (n, k) => {
  if (n === null) return { p: n, i: 0 }
  
  let { p : pr, i : ir } = problem2_aux(n.next, k);

  if (ir === k) {
    return { p: pr, i: ir }
  }
  else {
    return { p: n, i: ir + 1 }
  }
}

const Problem2_rec = (n, k) => {
  return problem2_aux(n, k).p;
}

// Tests for Problem2_rec
console.log("Problem2_rec Tests running... \n");
console.assert(Problem2_rec(new Node(0), 1).print() === "0 -> null", "1st to last of single");
console.assert(Problem2_rec(new Node(0, new Node(0)), 1), "first to last of length 2 ll");
console.assert((Problem2_rec(Node.fromArray([0,1,2,3,4]), 3)).print() === "2 -> 3 -> 4 -> null", "middle of an odd ll");
console.assert((Problem2_rec(Node.fromArray([0,2,0,2,2]), 1)).print() === "2 -> null", "interspersed values");


/**
 * Below is another recursive strategy provided by the book. Here,
 * we didn't even have to try and break the recursion, we just
 * used a global variable to store it once found.
 */
const Problem2_rec_b = (n1, k1) => {
  let ans;
  
  const problem2_aux_b = (n, k) => {
    if (n === null) return 0
    
    let index = problem2_aux_b(n.next, k) + 1;
  
    if (index === k) {
      ans = n;
    }
    
    return index
  }

  problem2_aux_b(n1, k1);
  
  return ans
}

// Tests for Problem2_rec_b
console.log("Problem2_rec_b Tests running... \n");
console.assert(Problem2_rec_b(new Node(0), 1).print() === "0 -> null", "1st to last of single");
console.assert(Problem2_rec_b(new Node(0, new Node(0)), 1), "first to last of length 2 ll");
console.assert((Problem2_rec_b(Node.fromArray([0,1,2,3,4]), 3)).print() === "2 -> 3 -> 4 -> null", "middle of an odd ll");
console.assert((Problem2_rec_b(Node.fromArray([0,2,0,2,2]), 1)).print() === "2 -> null", "interspersed values");

/**
 * Below is yet another recursive strategy provided by the book.
 * 
 */
 const Problem2_rec_c = (n1, k1) => {
  let ans;
  
  const problem2_aux_c = (n, k) => {
    if (n === null) return 0
    
    let index = problem2_aux_c(n.next, k) + 1;
  
    if (index === k) {
      ans = n;
    }
    
    return index
  }

  problem2_aux_c(n1, k1);
  
  return ans
}

// Tests for Problem2_rec_c
console.log("Problem2_rec_c Tests running... \n");
console.assert(Problem2_rec_c(new Node(0), 1).print() === "0 -> null", "1st to last of single");
console.assert(Problem2_rec_c(new Node(0, new Node(0)), 1), "first to last of length 2 ll");
console.assert((Problem2_rec_c(Node.fromArray([0,1,2,3,4]), 3)).print() === "2 -> 3 -> 4 -> null", "middle of an odd ll");
console.assert((Problem2_rec_c(Node.fromArray([0,2,0,2,2]), 1)).print() === "2 -> null", "interspersed values");

module.exports;

/**
 * Notes:
 * 
 * Since permutations are the same string with their characters in 
 * different positions, can we make them the same string?
 * 
 * Clarifying questions to ask:
 *  - Should the permutation comparison be case sensitive?
 *  - Is whitespace included?
 *  - Always ask for the size of the character set
 */


