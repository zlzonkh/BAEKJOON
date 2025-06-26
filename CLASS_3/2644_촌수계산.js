const problemNum = 2644;
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

  toString() {
    let str = "";
    for (let i = this.head; i < this.tail; i++) {
      str += this.items[i];
      str += ", ";
    }
    return str;
  }
}

const n = Number(input[0]);
const [a, b] = input[1].split(" ").map(Number);
const m = Number(input[2]);

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 3; i < m + 3; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function getDist(start, end) {
  const dist = Array(n + 1).fill(Infinity);
  const queue = new Queue();
  dist[start] = 0;
  queue.push(start);

  while (!queue.isEmpty()) {
    const cur = queue.pop();
    for (const next of graph[cur]) {
      if (dist[next] === Infinity) {
        dist[next] = dist[cur] + 1;
        if (next === end) return dist[next];
        queue.push(next);
      }
    }
  }
  return -1;
}

console.log(getDist(a, b));
