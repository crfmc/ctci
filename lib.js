/**
 * Chapter two is devoted to Linked Lists, so I am adding some
 * classes that will make them easier to work with.
 */

// The Node representing a Node reresented linked list
class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
  nodeAt(i) {

    let j = 1;
    let n = this;

    while (j <= i) {
      try {
        n = n.next;
      }
      catch (e) {
        throw RangeError("Index provided not in range of Linked List");
      }
      j++;
    }

    return n
  }
  print() {
    let s = "" + this.val;
    let n = this.next;
    while (n !== null) {
      s += " -> " + n.val;
      n = n.next
    }
    return s + " -> null"
  }
  isCircular() {
    let p1 = this;
    if (p1.next === null) return false
    let p2 = p1.next;

    while (p2.next !== null && p2.next.next !== null) {
      if (p1 === p2) {
        return true
      }
      p2 = p2.next.next;
      p1 = p1.next;
    }
    
    return false
  }
  // Uses the runner technique to intercalate values
  // Note: assumes even number of nodes
  weave() {
    let head = this;
    let p1 = this.next; // fast pointer
    let p2 = head; // slow pointer

    while (p1.next !== null) {
      p1 = p1.next.next;
      p2 = p2.next;
    }

    p1 = head;
    p2 = p2.next;

    while (p2.next !== null) {
      let aux = p2;
      p2 = p2.next;
      aux.next = p1.next;
      p1.next = aux;
      p1 = p1.next.next;
    }

    p1.next = p2;
  }
  reverse() {
    let n = this;
    let tail = n;
    let head = n;
    
    let aux;
    while (tail.next !== null) {
      aux = tail.next;
      tail.next = tail.next.next;
      aux.next = head;
      head = aux;
    }
    return head
  }


  // [fromArray] returns a linked list given an array of values recursively
  static fromArray(a) {
    if (a.length === 0) return null
    return new Node(a[0], Node.fromArray(a.slice(1)))
  }
}

// A node representing a node in a linked list object
class LLNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

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
 * This implementation of a stack is the same, jsut uses a linked 
 * list
 */
 class StackNode {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}
class StackLL {
  constructor(val) {
    if (typeof(val) === 'undefined') {
      this.top = null;
    }
    else {
      this.top = new StackNode(val);
    }
  }
  isEmpty() {
    return this.top === null
  }
  push(val) {
    let old_top = this.top;
    let new_top = new StackNode(val, old_top);
    this.top = new_top;
  }
  peek() {
    if (this.top === null) {
      throw RangeError('This stack does not have any values to pop.');
    }
    return this.top.data
  }
  pop() {
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
      throw RangeError('This stack does not have any values to pop.');
    }
    return this.first.data
  }
  isEmpty() {
    return this.first === null
  }
}

module.exports = {
  Node,
  LLNode,
  LL,
  Stack,
  StackLL,
  QueueLL
}