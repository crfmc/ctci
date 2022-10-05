const { Node } = require('./lib');

/**
 * Notes:
 * This first solution does the job in linear time, it holds a Set object which
 * contains the values seen so far.
 * 
 * The time complexity for this one is O(n)
 */
const Problem1 = (n) => {
    let head = n;
    let prev = null;
    let seen = new Set();

    while (n !== null) {
        if (seen.has(n.val)) { // if already seen, remove it
            if (prev !== null) {
                prev.next = n.next
                prev = prev
            }
        }
        else {
            seen.add(n.val)
            prev = n;
        }
        n = n.next;
    }

    return head
}
console.log('Problem 1 tests running... \n');
console.assert(Problem1(new Node(0)).print() === "0 -> null", "empty single node");
console.assert(Problem1(new Node(0, new Node(0))).print() === "0 -> null", "duplicate nodes");
console.assert((Problem1(Node.fromArray([2,2,2,2,2]))).print() === "2 -> null", "single char duplicates");
console.assert((Problem1(Node.fromArray([0,2,0,2,2]))).print() === "0 -> 2 -> null", "interspersed values"); 


/**
 * Notes:
 * This version of the problem will need to use the runner technique somehow.
 * 
 * The runner technique allows me to use one pointer which searches ahead of
 * the first one. This might be handy if I want to not use the prev variable
 * 
 * This one was given by the book.
 */
 const Problem1_b = (n) => {
    let head = n;
    let p1 = head;
    
    while (p1 !== null) {

        let p2 = p1;
        
        while (p2.next !== null) {
            if (p2.next.val ===  p1.val) {
                p2.next = p2.next.next;
            }
            else {
                p2 = p2.next;
            }
        }
        
        p1 = p1.next;
    }

    return head
}
console.log('Problem 1b tests running... \n');
console.assert(Problem1_b(new Node(0)).print() === "0 -> null", "empty single node");
console.assert(Problem1_b(new Node(0, new Node(0))).print() === "0 -> null", "duplicate nodes");
console.assert((Problem1_b(Node.fromArray([2,2,2,2,2]))).print() === "2 -> null", "single char duplicates");
console.assert((Problem1_b(Node.fromArray([0,2,0,2,2]))).print() === "0 -> 2 -> null", "interspersed values"); 

module.exports;