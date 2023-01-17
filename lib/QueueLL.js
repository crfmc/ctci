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
    }
    this.last = this.first;
  }
  add(val) {
    let qn = new QueueNode(val);
    if (this.last !== null) {
      this.last.next = qn;
    }
    this.last = qn;
    if (this.first === null) {
      this.first = this.last;
    }
  }
  remove() {
    if (this.first === null) {
      throw RangeError('This stack does not have any values to pop.');
    }
    let old_first = this.first.data;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
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
  // uses extractor function to print the values
  // extractor function
  print(extractorFn = (n) => n.data) {
    let n = this.first;

    if (this.first === null) {
      return "null";
    }

    if (this.first === this.last) { // only one element
      return extractorFn(this.first) + " -> null"
    }

    let msg = "";
    
    while (n.next !== null) { // add nodes to msg
      msg += extractorFn(n) + " -> ";
      n = n.next;
    }

    return msg + extractorFn(this.last) + " -> null";
  }
}

module.exports = QueueLL;