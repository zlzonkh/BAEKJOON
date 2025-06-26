const problemNum = 11725;
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
}

const N = Number(input[0]);
const graph = Array.from({ length: N + 1 }, () => []);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));
edges.forEach((e) => {
  graph[e[0]].push(e[1]);
  graph[e[1]].push(e[0]);
});

const prev = Array(N + 1).fill(null);

const queue = new Queue();
prev[1] = -1;
queue.push(1);

while (!queue.isEmpty()) {
  const cur = queue.pop();
  for (const next of graph[cur]) {
    if (!prev[next]) {
      prev[next] = cur;
      queue.push(next);
    }
  }
}

console.log(prev.slice(2).join("\n"));
