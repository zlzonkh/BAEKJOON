const problemNum = 2667;
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
const field = input.slice(1).map((line) => line.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dy = [0, 0, -1, 1];
const dx = [-1, 1, 0, 0];

function BFS(initY, initX) {
  const queue = new Queue();
  let count = 1;
  visited[initY][initX] = true;
  queue.push([initY, initX]);

  while (!queue.isEmpty()) {
    const [y, x] = queue.pop();
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (
        nx < N &&
        nx >= 0 &&
        ny < N &&
        ny >= 0 &&
        !visited[ny][nx] &&
        field[ny][nx] === 1
      ) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
        count++;
      }
    }
  }

  return count;
}

const counts = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && field[i][j] === 1) counts.push(BFS(i, j));
  }
}
counts.sort((a, b) => a - b);
console.log(counts.length + "\n" + counts.join("\n"));
