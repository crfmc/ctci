const { Node, StackLL } = require('../lib/lib.js');
/**
 * Question:
 * Imagine a (literal) stack of plates. If the stack gets too high, 
 * it might topple. Therefore, in real life, we would likely start a 
 * new stack when the previous stack exceeds some threshold. Implement 
 * a data structure SetOfStacks that mimics this. SetOfStacks should be 
 * composed of several stacks and should create a new stack once the 
 * previous one exceeds capacity. SetOfStacks. push () and 
 * SetOfStacks. pop () should behave identically to a single stack 
 * (that is, pop () should return the same values as it would if 
 * there were just a single stack).
 */


/**
 * Notes: 
 * An O(1) time solution for this one is to use a stack of stacks,
 * which would allow us to pop from the top stack, and push to the
 * top of the stack.
 * push: O(1) time-push to stack at the top of the stack of stacks
 * pop: O(1) time-pop from the top of the stack of stacks
 * 
 */


class p3Stack extends StackLL {
  constructor(val) {
    super(val);
    this.length = val ? 1 : 0;
  }
  push(val) {
    super.push(val);
    this.length++;
  }
  pop() {
    super.pop();
    this.length--;
  }
}

class SetOfStacks {
  constructor(cap) {
    this.capacity = cap;
    this.stacks = new StackLL(new p3Stack);

  }
  // If the length of the stack is equal to capacity, create a new one
  push(val) {
    if (this.stacks.top.data.length >= this.capacity) {
      let newStack = new p3Stack(val);
      this.stacks.push(newStack);
    }
    else this.stacks.top.data.push(val);
  }
  pop() {
    return "unimplemented"
  }
  static fromArray(arr, cap) {
    return new SetOfStacks(cap)
  }
}

// const Problem3 = (n) => {
//   return "uniplemented"
// }

/**
 * 
 * @param {Array} arr an array of value to add
 * @param {Number} cap the maximum number if values each stack should hold
 * @returns whether or not the 
 */
const Problem3_tester = (arr, cap) => {
  
  let stack = SetOfStacks.fromArray(arr, cap);

  // check push
  stack.push("test");

  // check pop
  stack.pop();

  return true
}


// Tests for Problem 3
console.log("Problem 3 Tests running... \n");
console.assert(Problem3_tester([1, 2, 3, 4], 1) === true, 'Deleting second value');
console.assert(Problem3_tester([1, 2, 3, 4], 2) === true, 'Deleting third value');
console.assert(Problem3_tester([1, 2, 3], 1) === true, 'Deleting middle value');




module.exports;

/**
 * Notes:
 */
