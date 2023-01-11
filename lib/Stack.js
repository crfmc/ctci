/**
 * It seems helpful to have a class for a Stack, I want this
 * object to have the ability to:
 * remove the top element in O(1) time,
 * add elements in O(1) time,
 * carry the length.
 */

class Stack {
  constructor(arr = []) {
    this.items = arr;
    this.size = this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  push(val) {
    this.items.push(val);
    this.size++;
  }
  peek() {
    if (this.size < 1) {
      throw RangeError('This stack does not have any values to peek.');
    }
    return this.items[this.size - 1];
  }
  pop() {
    if (this.size < 1) {
      throw RangeError('This stack does not have any values to pop.');
    }
    this.size--;
    return this.items.pop();
  }
  clear() {
    this.items.splice(0, this.size);
    this.size = 0;
  }
  static fromArray(a) {
    return new Stack(a);
  }
}

module.exports = Stack;