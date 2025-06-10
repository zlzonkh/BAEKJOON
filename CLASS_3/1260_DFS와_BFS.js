const problemNum = 1260;
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

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.items[this.tail++] = item;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.head];
    delete this.items[this.head++];
    return item;
  }

  isEmpty() {
    return this.tail === this.head;
  }

  size() {
    return this.tail - this.head;
  }
}

const [N, M, V] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((e) => {
  e.split(" ").map(Number);
});

const dfsFlag = new Array(N).fill(0);
const bfsFlag = new Array(N).fill(0);

console.log(output.join("\n"));
