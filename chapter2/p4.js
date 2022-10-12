const { Node } = require('./lib');
/**
 * Question:
 * Write code to partition a linked list around a value x, such that all 
 * nodes less than x come before all nodes greater than or equal to x. 
 * If x is contained within the list, the values of x only need to be after 
 * the elements less than x (see below).The partition element x can appear 
 * anywhere in the "right partition"; it does not need to appear between 
 * the left and right partitions.
 * 
 */

/**
 * Notes:
 * I've come up with a solution that is somewhat convoluted.
 * The basic premise is using a runner to get a pointer on the
 * first and middle nodes.
 * p2 traverses wo nodes at a time, until either p2.next === null
 * or p2.next.next === null. p1 moves one step at a time:
 * 
 *  both start at the head of the linked list 
 * 
 *  keep track of length jumped by p2
 *  while (p2 cannot jump by two anymore):
 *    move p1 up by 1
 *    move p2 up by 2
 *    increase length by 2
 *  
 *  move p2 to head
 * 
 *  if (head is in wrong place)
 *    move p2 to head.next
 *      
 * 
 *  i = 1
 *  while (i <= length)
 *    if p2.next is where its supposed to be
 *      go to the next  
 *    
 *    if p1 finds value over part
 *  
 */

/**
 * 
 * @param {*} n1 node to be moved after n2
 * @param {*} n2 node to have n1 moved after
 */
const moveInFront = (n1, n2) => {
  n2.next = n1;
  n1.next = n2.next
}

/**
 * Switches the two nodes' next pointers
 * @param {*} n1 earlier node
 * @param {*} n2 later node
 */
 const swapNext = (n1, n2) => {
  if (n1.next === null || n2.next === null) {
    throw new Error("Next element is null for n1 or n2");
  }
  else {
    let aux = n2.next;
    n2.next = n2.next.next;
    aux.next = n1.next;
    n1.next = aux;
  }
  // console.log(n1.print(),'\n', n2.print())
}

const Problem4 = (n, part) => {
  
  let head = n;
  let p1 = new Node(null, head);
  let p2 = head;

  while (p1.next !== null && p1.next.val < part) {
    if (p1.next === null) {
      return head
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  while (p2 !== null && p2.next) {
    if (p2.next.val < part) {
      swapNext(p1, p2);
    }
    else {
      p2 = p2.next;
    }
  }

  
  return p1.val === null ? p1.next : head
}


// Tests for Problem
console.log("Problem 4 Tests running... \n");
console.assert(Problem4(Node.fromArray([0,1]), 0).print() === '0 -> 1 -> null', "length of linked list is 2");
console.assert(Problem4(Node.fromArray([0,1,0,1]), 1).print() === '0 -> 0 -> 1 -> 1 -> null', "length of linked list is 4");
console.assert(Problem4(Node.fromArray([3,5,8,5,10,2]), 5).print() === '3 -> 2 -> 5 -> 8 -> 5 -> 10 -> null', "linked list including part");



/**
  * Below are the solutions proposed in the book:
  * 
*/
const Problem4_b = (n, part) => {
  let beforeStart = null;
  let beforeEnd = null;
  let afterStart = null;
  let afterEnd = null;

  while (n !== null) {
    let next = n.next;
    n = n.next;
  }

  return n
}


// Tests for Problem
console.log("Problem 4_b Tests running... \n");
console.assert(Problem4_b(Node.fromArray([0,1]), 0).print() === '0 -> 1 -> null', "length of linked list is 2");
console.assert(Problem4_b(Node.fromArray([0,1,0,1]), 1).print() === '0 -> 0 -> 1 -> 1 -> null', "length of linked list is 4");
console.assert(Problem4_b(Node.fromArray([3,5,8,5,10,2]), 5).print() === '3 -> 2 -> 5 -> 8 -> 5 -> 10 -> null', "linked list including part");


module.exports;

/**
 * Notes: 
 * This solution took a very long time ~4hrs. I attribute this to there 
 * being so many plausible solutions. In this solution, I was able to 
 * get a runtime of O(n). If I had a way of knowing where the first 
 * element above the partition was, I would still require O(n), since 
 * the ones ahead would still need to be visited. BCR is still linear.
 * 
 * Space-wise I think I did alright. It would've been cool if I could
 * have constant time, although best-case is that the partition is 
 * greater or less than any value, at which point there would be no 
 * need to allocate an auxiliary node object. Worst case, it is in 
 * the middle, which means it is not quite linear, but O(g), where
 * g is the number of nodes which have a value smaller than the
 * partition and appear later in the linked list.
 * 
 * STABILITY
 * The book mentions the notion of stability, which refers to the
 * way in which the linked list is ordered upon return. My algorithm
 * returns the linked list in an order that does not preserve relative
 * positions (i.e. you may find that a 0 that was originally in front
 * of a 1, though in the return it is now behind it).
 * 
 * 
 */
