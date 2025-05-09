// 우선순위 큐를 사용하거나, 우선도를 저장해 둔 배열을 따로 저장해 우선순위가 가장 높은 값을 찾는 시간 절약 가능

const problemNum = 1966;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const output = [];

class Node {
  constructor(index, priority) {
    this.index = index;
    this.priority = priority;
    this.next = null;
    this.prev = null;
  }
}

class Circle {
  constructor() {
    this.head = null;
  }

  push(index, priority) {
    const newNode = new Node(index, priority);
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
    if (node === this.head) {
      if (this.head.next === this.head) this.head = null;
      else this.head = this.head.next;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    return node.index;
  }

  print() {
    let iterator = this.head.next;
    let maxPriortyNode = this.head;
    while (iterator !== this.head) {
      if (iterator.priority > maxPriortyNode.priority)
        maxPriortyNode = iterator;
      iterator = iterator.next;
    }
    this.head = maxPriortyNode.next;
    return this.pop(maxPriortyNode);
  }
}

for (let i = 1; i < input.length; i += 2) {
  const [N, M] = input[i].split(" ").map(Number);
  const printQueue = input[i + 1].split(" ").map(Number);
  const circle = new Circle();

  for (let j = 0; j < N; j++) circle.push(j, printQueue[j]);
  for (let j = 1; j <= N; j++) {
    if (M === circle.print()) output.push(j);
  }
}

console.log(output.join("\n"));
