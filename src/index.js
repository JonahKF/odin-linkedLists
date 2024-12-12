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
      while (currentNode.next) {}
    }
  }

  // Add new node to front of list
  prepend(value) {
    const n = new node(value);
  }

  size() {}

  head() {}

  tail() {}

  at(index) {}

  pop() {}

  contains() {}
}

class node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
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
