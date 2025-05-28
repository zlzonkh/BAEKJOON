// Computer 클래스 대신 배열 + 방문 배열로 단순화 가능

const problemNum = 2606;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const edges = input.slice(2).map((e) => e.split(" ").map((f) => Number(f) - 1));

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

class Computer {
  constructor() {
    this.connected = [];
    this.isVisited = false;
  }
}

const computers = [];
for (let i = 0; i < N; i++) {
  computers.push(new Computer());
}

edges.forEach((e) => {
  computers[e[0]].connected.push(computers[e[1]]);
  computers[e[1]].connected.push(computers[e[0]]);
});

const queue = new Queue();
queue.push(computers[0]);
computers[0].isVisited = true;

while (!queue.isEmpty()) {
  queue.pop().connected.forEach((e) => {
    if (e.isVisited === false) {
      e.isVisited = true;
      queue.push(e);
    }
  });
}

console.log(
  computers.reduce((acc, e) => {
    if (e.isVisited) return acc + 1;
    else return acc;
  }, 0) - 1
);
