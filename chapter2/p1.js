const { Node, LLNode, LL } = require('./lib');

/**
 * Notes:
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
            // console.log("added")
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
// console.assert();
// console.assert();


module.exports;