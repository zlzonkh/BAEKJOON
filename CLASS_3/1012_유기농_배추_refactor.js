const problemNum = 1012;
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
const T = Number(input[0]);
let cursor = 1;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

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

function bfs(x, y, field, visited, M, N) {
  const queue = new Queue();
  visited[y][x] = true;
  queue.push([x, y]);

  while (!queue.isEmpty()) {
    const [cx, cy] = queue.pop();
    for (let d = 0; d < 4; d++) {
      const nx = cx + dx[d];
      const ny = cy + dy[d];
      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        field[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[cursor++].split(" ").map(Number);
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let k = 0; k < K; k++) {
    const [x, y] = input[cursor++].split(" ").map(Number);
    field[y][x] = 1;
  }

  let wormCount = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1 && !visited[y][x]) {
        bfs(x, y, field, visited, M, N);
        wormCount++;
      }
    }
  }

  output.push(wormCount);
}

console.log(output.join("\n"));
