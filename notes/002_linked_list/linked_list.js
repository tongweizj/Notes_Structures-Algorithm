// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
class Node {
  // constructor
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}
// linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds an item at the end
  // of list
  add(item) {
    // creates a new node
    let node = new Node(item);

    // to store current node
    let current;

    // if list is Empty add the
    // item and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  // insert item at the position index
  // of the list
  insertAt(item, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      // creates a new node
      let node = new Node(item);
      let curr, prev;

      curr = this.head;

      // add the item to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an item
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  // removes an item from the
  // specified location
  removeFrom(index) {
    if (index < 0 || index >= this.size)
      return console.log("Please Enter a valid index");
    else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first item
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an item
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the item
        prev.next = curr.next;
      }
      this.size--;

      // return the remove item
      return curr.item;
    }
  }

  // removes a given item from the
  // list
  removeitem(item) {
    let current = this.head;
    let prev = null;

    // iterate over the list
    while (current != null) {
      // comparing item with current
      // item if found then remove the
      // and return true
      if (current.item === item) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.item;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // finds the index of item
  indexOf(item) {
    let count = 0;
    let current = this.head;

    // iterate over the list
    while (current != null) {
      // compare each item of the list
      // with given item
      if (current.item === item) return count;
      count++;
      current = current.next;
    }

    // not found
    return -1;
  }

  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }

  // gives the size of the list
  size_of_list() {
    console.log(this.size);
  }

  // prints the list items
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.item + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

// creating an object for the
// Linkedlist class
let ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding item to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more items to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is item removed ?" + ll.removeitem(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd item from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();
