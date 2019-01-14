class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  forEach(callback) {
    if (this.head !== null) {
      let current = this.head;
      do {
        callback(current.data);
        current = current.next;
      } while (current !== null);
    }
  }

  reverse() {
    if (this.head !== null) {
      let current = this.head;
      let next = null;
      let prev = null;

      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }

      this.head = prev;
    }
  }

  deleteHead() {
    if (this.head !== null) {
      if (!this.head.next) {
        this.head = null;
        return;
      }

      this.head = this.head.next;
    }
  }

  toArray() {
    const result = [];
    this.forEach(value => result.push(value));
    return result;
  }

  toStrig() {
    return this.toArray().toString();
  }
}
