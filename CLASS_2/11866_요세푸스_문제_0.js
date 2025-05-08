const problemNum = 11866;
const [N, K] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const output = [];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Circle {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.head.prev = newNode;
      this.tail = newNode;
    }
  }

  pop(node) {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    return node.value;
  }
}

const circle = new Circle();

for (let i = 1; i <= N; i++) {
  circle.push(i);
}

let curNode = circle.tail;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) curNode = curNode.next;
  output.push(circle.pop(curNode));
}

console.log("<" + output.join(", ") + ">");
