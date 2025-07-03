const problemNum = 5525;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

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

  peakRight() {
    if (this.isEmpty()) return undefined;
    return this.items[this.tail - 1];
  }

  reset() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
}

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2].split("");
const queue = new Queue();
let output = 0;

S.forEach((e) => {
  if (e === "I") {
    if (queue.peakRight() === "I") queue.reset();
    else {
      if (queue.size() === 2 * N) {
        output++;
        queue.pop();
        queue.pop();
      }
    }
    queue.push("I");
  } else {
    if (queue.peakRight() === "I") queue.push("O");
    else queue.reset();
  }
});

console.log(output);
