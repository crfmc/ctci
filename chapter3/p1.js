const { StackLL, QueueLL } = require('../lib');

/**
 * class [TriStackArray] is a representation of 3 stacks using an array.
 * invariants: 
 *  - TriStackArray.arr[ (stackNum - 1) % 3 ] is the length of stack [stackNum].
 *  - TriStackArray.arr[i] is either undefined or a value that corresponds to
 *    stack [stackNum] = i % 3.
 *  - The top value of stack [stackNum] is at index:
 *    (TriStackArray.arr[ (stackNum - 1) % 3 ] * 3 + ((stackNum - 1) % 3).
 */
class TriStackArray {
    constructor() {
        this.arr = [0,0,0];
    }
    add(val, stackNum) {
        this.arr[ this.arr[ (stackNum - 1) % 3 ] * 3 + 3 + ((stackNum - 1) % 3) ] = val;
        this.arr[stackNum - 1]++;
    }
    // remove the top element of the 
    remove(stackNum) {
        if (this.arr[stackNum - 1] < 1) {
            throw RangeError('There are no elements to remove');
        }
        this.arr[stackNum - 1]--;
    }
    peek(stackNum) {
        return this.arr[this.arr[ (stackNum - 1) % 3 ] * 3 + ((stackNum - 1) % 3)];
    }
    isEmpty(stackNum) {
        return this.arr[stackNum - 1] === 0
    }
    printStack(stackNum) {
        let stackLen = this.arr[stackNum - 1];
        let stack = [];
        for (let i=1; i <= stackLen; i++) { // from the firt stack value to the last
            stack.push(this.arr[(stackNum - 1 + i) * 3]);
        }
        return stack;
    }
}
/**
 * Problem: Describe how you could use a single array to implement three stacks.
 */
/**
 * Notes: I am going to use an array to store 3 stacks by leveraging the O(1) lookup time,
 * and inserting at the end of the array instead of the beginning.
 */

/**
 * @returns whether or not Problem 1 returns the correct value
 * Given a list of 3 stacks, this function should be able to store
 * them all correctly in a TriStackArray object.
 */
const Problem1Tester = (s1, s2, s3) => {

    let tsa = new TriStackArray();

    [s1,s2,s3].forEach((stack, i) => {
        let stackId = i;
        stack.forEach((val, i) => {
            tsa.add(val, stackId + 1);
        });
    });

    // Check whether the original stack is the same as
    // the one stored in the TriStackArray
    
    [s1,s2,s3].forEach((stack, i) => {
        let stackId = i;
        let newArr = tsa.printStack(stackId + 1);
        stack.forEach((val, i, arr) => {
            if (arr[i] !== newArr[i]) {
                return false;
            }
        });
    });

    return true
}

console.log('Problem 1 tests running... \n');
console.assert(Problem1Tester([], [], []), "");
console.assert(Problem1Tester([1,2], [3,4], [5,6]), "");


/**
 * Notes:
 * 
 */

module.exports;