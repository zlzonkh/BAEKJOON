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
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = this.head.prev;
      this.head.prev.next = newNode;
      this.head.prev = newNode;
    }
  }

  pop(node) {
    if (this.head === this.head.next) {
      this.head = null;
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

let curNode = circle.head.prev;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) curNode = curNode.next;
  output.push(circle.pop(curNode));
}

console.log("<" + output.join(", ") + ">");
