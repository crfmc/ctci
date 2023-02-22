const Node = require('./Node');

// The Node representing a Node reresented linked list
class LLNode extends Node {
    constructor(val, next=null) {
      super(val);
      this.next = next;
    }
    push(val) {
      let n = this;
      while (n.next !== null) {
        n = n.next;
      }
      n.next = new LLNode(val);
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
    print() {
      let s = "" + this.val;
      let n = this.next;
      while (n !== null) {
        s += " -> " + n.val;
        n = n.next
      }
      return s + " -> null"
    }
    // [fromArray] returns a linked list given an array of values recursively
    static fromArray(a) {
      if (a.length === 0) return null
      return new LLNode(a[0], LLNode.fromArray(a.slice(1)))
    }
}

module.exports = LLNode;