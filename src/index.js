class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add new node to end of list
  append(value) {
    const newNode = new node(value);
    let currentNode;

    if (!this.head) {
      this.head = newNode;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.size += 1;
  }

  // Add new node to front of list
  prepend(value) {
    const newNode = new node(value);
    let currentNode;

    if (!this.head) {
      this.head = newNode;
    } else {
      currentNode = this.head;
      this.head = newNode;
      newNode.next = currentNode;
    }

    this.size += 1;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    if (index > this.size || index <= 0) return;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    let currentNode;
    if (!this.head) {
      return;
    } else {
      currentNode = this.head;
      for (let i = 0; i < this.size - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    }
  }

  contains(value) {}

  find(value) {}

  insertAt(value, index) {}

  removeAt(index) {}

  toString() {}
}

class node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

// Test Code
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
