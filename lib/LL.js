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


module.exports = LL;