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
    if (index > this.size - 1 || index < 0) return;
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
      console.log(`Removed node: ${currentNode.value}`);
      currentNode.next = null;
    }
  }

  contains(value) {
    let currentNode;
    if (!this.head) {
      return;
    } else {
      currentNode = this.head;
      for (let i = 0; i < this.size; i++) {
        if (currentNode.value === value) return true;
        currentNode = currentNode.next;
      }
      return false;
    }
  }

  find(value) {
    let currentNode;
    if (!this.head) {
      return;
    } else {
      currentNode = this.head;
      for (let i = 1; i < this.size + 1; i++) {
        if (currentNode.value === value) return i;
        currentNode = currentNode.next;
      }
      return null;
    }
  }

  insertAt(value, index) {
    let currentNode;
    if (index > this.size - 1 || index < 0) return;
    currentNode = this.head;
    for (let i = 1; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    const newNode = new node(value);
    let placeholder;
    placeholder = currentNode.next;
    currentNode.next = newNode;
    newNode.next = placeholder;

    this.size += 1;
  }

  removeAt(index) {
    let currentNode;
    let previousNode;
    if (index > this.size - 1 || index < 0) return;
    currentNode = this.head;
    for (let i = 1; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
  }

  toString() {
    console.log("Converting Linked List to String:");
    let string = "";
    let currentNode;
    if (!this.head) {
      string = null;
      return string;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        string += ` ( ${currentNode.value} ) ->`;
        currentNode = currentNode.next;
      }
      string += ` ( ${currentNode.value} ) -> ${null}`;
      return string;
    }
  }
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
list.prepend("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// console.log(list.head);
// console.log(list.tail());
// console.log(list.size);
// console.log(list.contains("hamster"));
// console.log(list.contains("poggers"));
// console.log(list.find("dog"));
// console.log(list.find("turtle"));
// console.log(list.find("poggers"));

list.insertAt("poggers", 3);
console.log(list.toString());

console.log(list.size);
console.log(list.find("turtle"));
list.removeAt(3);
console.log(list.toString());
