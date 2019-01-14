import LinkedList from './LinkedList';

export default class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.deleteHead();
  }

  peek() {
    return this.list.head ? this.list.head.data : null;
  }

  toArray() {
    return this.list.toArray();
  }
}
