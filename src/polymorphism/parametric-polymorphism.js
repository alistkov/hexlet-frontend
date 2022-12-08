class Node {
  constructor(value, node = null) {
    this.next = node;
    this.value = value;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}

const reverse = (node) => {
  let reversedList;
  let current = node;

  while (current) {
    reversedList = new Node(current.getValue(), reversedList);
    current = current.getNext();
  }
  return reversedList;
};

export { Node, reverse };
