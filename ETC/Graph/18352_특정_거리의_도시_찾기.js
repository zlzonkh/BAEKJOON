const problemNum = 18352;
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

const [N, M, K, X] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

const output = [];

function BFS(start) {
  const dist = Array(N + 1).fill(Infinity);
  const queue = new Queue();
  dist[start] = 0;
  queue.push(start);

  while (!queue.isEmpty()) {
    const cur = queue.pop();
    for (const next of graph[cur]) {
      if (dist[next] === Infinity) {
        dist[next] = dist[cur] + 1;
        if (dist[next] === K) output.push(next);
        queue.push(next);
      }
    }
  }
}

BFS(X);
output.sort((a, b) => a - b);

console.log(output.length === 0 ? -1 : output.join("\n"));
