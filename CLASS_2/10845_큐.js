const problemNum = 10845;
const inputs = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1);
const output = [];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.head === null) {
      return -1;
    } else if (this.head === this.tail) {
      const popValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return popValue;
    } else {
      const popValue = this.head.value;
      this.head = this.head.next;
      this.size--;
      return popValue;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.head === null;
  }

  front() {
    return this.isEmpty() ? -1 : this.head.value;
  }

  back() {
    return this.isEmpty() ? -1 : this.tail.value;
  }
}

const queue = new Queue();

inputs.forEach((e) => {
  const input = e.split(" ");
  switch (input[0]) {
    case "push":
      queue.push(Number(input[1]));
      break;
    case "pop":
      output.push(queue.pop());
      break;
    case "size":
      output.push(queue.getSize());
      break;
    case "empty":
      output.push(queue.isEmpty() ? 1 : 0);
      break;
    case "front":
      output.push(queue.front());
      break;
    case "back":
      output.push(queue.back());
  }
});

console.log(output.join("\n"));
