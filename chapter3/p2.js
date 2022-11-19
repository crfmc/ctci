const { Node, LLNode, LL } = require('../lib');
/**
 * Question:
 *  How would you design a stack which, in addition
 *  to push and pop, has a function min which returns 
 *  the minimum element? Push, pop and min should all 
 *  operate in 0(1) time.
 */

/**
 * Notes:
 * Initially I thought about reserving some spot on the
 * list to holding the minimum value, but the issue here 
 * was that this would need to be updted constantly and
 * in O(n) when the minimum is popped.
 * 
 * I needed to keep the minimum value close to the
 * second to minimum value, and it occured to me to
 * dedicate a field to it in each node.
 * 
 * Below is an O(1) additional space solution:
 *  
 */

/**
 * Class for a node within a linked list abstraction
 * of a Stack.
 * 
 */
class MinStackNode {
  constructor(data, next=null, min=this) {
    this.data = data;
    this.next = next;
    this.min = min;
  }
}


class MinStackLL {
  constructor(val) {
    if (typeof (val) === "undefined") {
      this.top = null;
    }
    else {
      this.top = new MinStackNode(val);
    }
  }
  push(val) {
    let update_min = val < this.top.min.data;
    let new_top = new MinStackNode(val, this.top, this.top.min);
    if (update_min) {
      new_top.min = new_top;
    }
    this.top = new_top;
  }
  pop() {
    if (this.top === null) {
      throw RangeError('There are no elements to remove');
    }
    else {
      this.top = this.top.next;
    }
  }
  min() {
    if (this.top === null) {
      throw RangeError('There are no elements to remove');
    }
    else {
      return this.top.min;
    }
  }
}

let s = new MinStackLL(2);
s.push(0);
s.push(1);
s.push(3);
s.push(-1);
s.push(-2);
s.pop();
s.pop();
console.log(s.top.min.data);

const Problem2 = () => {
  return "unimplemented"
}

// Tests for Problem 2
console.log("Problem2 Tests running... \n");



module.exports;

/**
 * Notes: The solution for this problem is similar to the one
 * provided. Instead of creating a field for each node,
 * they have a new stack which only holds the new mins.
 * This way, you don't add space each time a node is visited,
 * which is especially useful in the case when the minimum is
 * the first node and you do not need to use any more space
 * to keep that information.
 * 
 */


