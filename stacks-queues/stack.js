/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
      return;
    }
    let oldFirst = this.first;
    oldFirst.next = newNode;
    this.first = newNode;
    this.size += 1;
    return;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error("Stack is empty");
    let oldFirst = this.first;
    if (this.size == 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return oldFirst.val;
    } else {
      let currentNode = this.last;
      let counter = 0;
      while (counter <= this.size) {
        if (currentNode.next == oldFirst) {
          currentNode.next = null;
          this.first = currentNode;
          this.size -= 1;
          return oldFirst.val;
        }
        counter += 1;
        currentNode = currentNode.next;
      }
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) throw new Error("Queue is empty");
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.size == 0);
  }
}

module.exports = Stack;