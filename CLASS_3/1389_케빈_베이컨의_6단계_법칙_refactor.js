const problemNum = 1389;
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

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map((x) => Number(x) - 1);
  graph[a].push(b);
  graph[b].push(a);
}

function getBaconNumber(start) {
  const dist = Array(N).fill(Infinity);
  const queue = new Queue();
  dist[start] = 0;
  queue.push(start);

  while (!queue.isEmpty()) {
    const cur = queue.pop();
    for (const next of graph[cur]) {
      if (dist[next] === Infinity) {
        dist[next] = dist[cur] + 1;
        queue.push(next);
      }
    }
  }

  return dist.reduce((sum, d) => sum + d, 0);
}

let answer = -1;
let minSum = Infinity;

for (let i = 0; i < N; i++) {
  const total = getBaconNumber(i);
  if (total < minSum) {
    minSum = total;
    answer = i;
  }
}

console.log(answer + 1);
