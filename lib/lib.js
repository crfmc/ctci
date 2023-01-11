const Tree = require('./Tree');
const TreeNode = require('./TreeNode');
const Node = require('./Node');
const LLNode = require('./LLNode');
const BSTreeNode = require('./BSTreeNode');
const BTreeNode = require('./BTreeNode');
const MinHeap = require('./MinHeap');
const MaxHeap = require('./MaxHeap');
const Graph = require('./Graph');
const GraphAL = require('./GraphAL');

/**
 * Chapter two is devoted to Linked Lists, so I am adding some
 * classes that will make them easier to work with.
 */


// A class representing a linkedlist data structure
class LL {
  constructor(n = null) {
    if (n !== null) this.size = 1;
    this.head = n;
    this.tail = n;
  }
  insert(val) {
    const newNode = new LLNode(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size = this.size + 1;
  }
  print() {
    let s = "" + this.head.val;
    let n = this.head.next;
    while (n !== null) {
      s += " -> " + n.val;
      n = n.next
    }
    return s + " -> null"
  }
}

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

/**
 * An implementation of a queue
 */
 class QueueNode {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}
class QueueLL {
  constructor(val) {
    if (typeof(val) === 'undefined') {
      this.first = null;
    }
    else {
      this.first = new QueueNode(val);
      this.last = this.first;
    }
  }
  add(val) {
    let qn = new QueueNode(val);
    if (this.last !== null) {
      this.last.next = qn;
    }
    this.last = qn;
    if (this.first === null) {
      first = last;
    }
  }
  remove() {
    if (this.first === null) {
      throw RangeError('This stack does not have any values to pop.');
    }
    let old_first = this.first.data;
    this.first = this.first.next;
    if (this.first === null) {
      this.last === null;
    }
    return old_first
  }
  peek() {
    if (this.first === null) {
      throw RangeError('This stack does not have any values to peek.');
    }
    return this.first.data
  }
  isEmpty() {
    return this.first === null
  }
}

module.exports = {
  BTreeNode,
  BSTreeNode,
  MinHeap,
  MaxHeap,
  Tree,
  TreeNode,
  Node,
  LLNode,
  LL,
  Stack,
  StackLL,
  QueueLL,
  Graph,
  GraphAL
}