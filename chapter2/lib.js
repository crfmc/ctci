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

    // console.log("second loop");
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

module.exports = {
  Node,
  LLNode,
  LL
}