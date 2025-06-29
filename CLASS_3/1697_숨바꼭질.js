const problemNum = 1697;
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
const MAX = 100000;

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

const graph = Array.from({ length: MAX + 1 }, () => []);
for (let i = 0; i <= MAX; i++) {
  if (i + 1 <= MAX) graph[i].push(i + 1);
  if (i - 1 >= 0) graph[i].push(i - 1);
  if (i * 2 <= MAX) graph[i].push(i * 2);
}

function getDist(start, end) {
  if (start === end) return 0;
  const dist = Array(MAX + 1).fill(Infinity);
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
}
console.log(getDist(N, K));
