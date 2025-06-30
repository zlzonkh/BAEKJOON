const problemNum = 2178;
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

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((line) => line.split("").map(Number));
const dist = Array.from({ length: N }, () => Array(M).fill(-1));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const queue = new Queue();
dist[0][0] = 1;
queue.push([0, 0]);

while (!queue.isEmpty()) {
  const [cy, cx] = queue.pop();
  for (let d = 0; d < 4; d++) {
    const nx = cx + dx[d];
    const ny = cy + dy[d];
    if (
      nx >= 0 &&
      nx < M &&
      ny >= 0 &&
      ny < N &&
      maze[ny][nx] === 1 &&
      dist[ny][nx] === -1
    ) {
      dist[ny][nx] = dist[cy][cx] + 1;
      queue.push([ny, nx]);
    }
  }
}

console.log(dist[N - 1][M - 1]);
