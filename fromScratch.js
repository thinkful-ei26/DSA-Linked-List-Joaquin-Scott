'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      //!this.head is equivalent to this.head === null
      return null;
    }
    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;
    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currentNode.next;
  }

  insertBefore(item, value) {
    let previous = this.head;
    let current = this.head;

    //this.find(key);
    console.log(this.find(value));


    // if (this.find(key)) {
    //   this.head = new _Node(item, current);
    //   previous = current;
    //   current = current.next;
    //   console.log(current, previous);
    //   //console.log("this.head is ", this.head);
    // }

  }

}
function Main() {
  let SSL = new LinkedList();
  SSL.insertFirst('Apollo');
  SSL.insertFirst('Boomer');
  SSL.insertFirst('Helo');
  SSL.insertFirst('Husker');
  SSL.insertFirst('Staruck');
  //   SSL.insertLast('Tauhida');
  //   SSL.remove('squirrel');
  //   SSL.insertFirst({ name: 'Bob', zip: 88888 });
  //SSL.insertFirst(['red', 'white', 'blue']);
  SSL.insertBefore('Helo', 'Husker');
  //console.log(JSON.stringify(SSL));
  //   console.log(SSL);
}
Main();
