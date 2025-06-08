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

class Cabbage {
  constructor() {
    this.connected = [];
    this.isVisited = false;
  }
}

const T = Number(input[0]);
let cursor = 1;
for (let i = 0; i < T; i++) {
  const [M, N, K] = input[cursor++].split(" ").map(Number);
  const field = Array.from(Array(N), () => Array(M).fill(null));
  const cabbages = [];
  let wormCount = 0;
  for (let j = 0; j < K; j++) {
    const newCabbage = new Cabbage();
    const [X, Y] = input[cursor++].split(" ").map(Number);
    field[Y][X] = newCabbage;
    if (Y > 0 && field[Y - 1][X]) {
      newCabbage.connected.push(field[Y - 1][X]);
      field[Y - 1][X].connected.push(newCabbage);
    }
    if (X > 0 && field[Y][X - 1]) {
      newCabbage.connected.push(field[Y][X - 1]);
      field[Y][X - 1].connected.push(newCabbage);
    }
    if (Y < N - 1 && field[Y + 1][X]) {
      newCabbage.connected.push(field[Y + 1][X]);
      field[Y + 1][X].connected.push(newCabbage);
    }
    if (X < M - 1 && field[Y][X + 1]) {
      newCabbage.connected.push(field[Y][X + 1]);
      field[Y][X + 1].connected.push(newCabbage);
    }
    cabbages.push(newCabbage);
  }

  cabbages.forEach((cabbage) => {
    if (!cabbage.isVisited) {
      const queue = new Queue();
      cabbage.isVisited = true;
      queue.push(cabbage);
      wormCount++;

      while (!queue.isEmpty()) {
        queue.pop().connected.forEach((e) => {
          if (e.isVisited === false) {
            e.isVisited = true;
            queue.push(e);
          }
        });
      }
    }
  });

  output.push(wormCount);
}

console.log(output.join("\n"));
