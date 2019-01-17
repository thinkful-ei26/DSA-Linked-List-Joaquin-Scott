

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
    // let previous = this.head;
    let current = this.head;

    if (value === this.head.value){
      this.insertFirst(item);
    }else{
      while(current.next !== null){
        if (current.next.value === value) {
          let previous = new _Node(item, value);
          previous.next = current.next;
          current.next = previous;
          //console.log("current is ", current, "and current.next is ", current.next);
          return;
        }
      }
    }
  }

  insertAfter(item, value) {

    let current = this.head;


    
    while(current.next !== null){
      if (current.next.value === value) {
        let newNode = new _Node(item, value);
        console.log(current.next.value, value);
        console.log("nextNode is ", newNode);
        newNode.next = current.next;
        current.next = newNode;
        console.log("current is ", current, "and current.next is ", current.next);
        return;
      }
    }
  }
  //}

}

function Main() {
  let SSL = new LinkedList();
  SSL.insertFirst('Apollo');
  SSL.insertFirst('Boomer');
  SSL.insertFirst('Helo');
  SSL.insertFirst('Husker');
  SSL.insertFirst('Starbuck');
  //   SSL.insertLast('Tauhida');
  //   SSL.remove('squirrel');
  //   SSL.insertFirst({ name: 'Bob', zip: 88888 });
  //SSL.insertFirst(['red', 'white', 'blue']);
  SSL.insertAfter('bob', 'Husker');
  console.log(JSON.stringify(SSL));
  //   console.log(SSL);
}
Main();
