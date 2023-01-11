/**
 * This implementation of a stack is the same, just uses a linked 
 * list
 */
 class StackNode {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}
class StackLL { // O(1) time
  constructor(val) {
    if (typeof(val) === 'undefined') {
      this.top = null;
    }
    else {
      this.top = new StackNode(val);
    }
  }
  isEmpty() { // O(1) time
    return this.top === null
  }
  push(val) { // O(1) time
    let old_top = this.top;
    let new_top = new StackNode(val, old_top);
    this.top = new_top;
  }
  peek() { // O(1) time
    if (this.top === null) {
      throw RangeError('This stack does not have any values to peek.');
    }
    return this.top.data
  }
  pop() { // O(1) time
    if (this.top === null) {
      throw RangeError('This stack does not have any values to pop.');
    }
    let old_top = this.top.data;
    this.top = this.top.next;
    return old_top
  }
}

module.exports = StackLL;