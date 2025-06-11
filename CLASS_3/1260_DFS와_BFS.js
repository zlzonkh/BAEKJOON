const problemNum = 1260;
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

class Node {
  constructor() {
    this.connected = [];
    this.dfsFlag = 0;
    this.bfsFlag = 0;
  }
}

const [N, M, V] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));

const nodes = [new Node()];
for (let i = 0; i < N; i++) {
  nodes.push(new Node());
}

edges.forEach((edge) => {
  nodes[edge[0]].connected.push(edge[1]);
  nodes[edge[1]].connected.push(edge[0]);
});

nodes.forEach((e) => e.connected.sort((a, b) => b - a));

// DFS
const dfsOrder = [];
const stack = [];
stack.push(V);
nodes[V].dfsFlag = 1;

while (stack.length) {
  let curIdx = stack.pop();
  if (nodes[curIdx].dfsFlag === 2) continue;
  nodes[curIdx].dfsFlag = 2;
  dfsOrder.push(curIdx);
  nodes[curIdx].connected.forEach((e) => {
    if (nodes[e].dfsFlag !== 2) {
      stack.push(e);
      nodes[e].dfsFlag = 1;
    }
  });
}

// BFS
nodes.forEach((e) => e.connected.reverse());
const bfsOrder = [];
const queue = new Queue();
bfsOrder.push(V);
queue.push(V);
nodes[V].bfsFlag = 1;

while (!queue.isEmpty()) {
  nodes[queue.pop()].connected.forEach((e) => {
    if (nodes[e].bfsFlag === 0) {
      nodes[e].bfsFlag = 1;
      bfsOrder.push(e);
      queue.push(e);
    }
  });
}

output.push(dfsOrder.join(" "));
output.push(bfsOrder.join(" "));

console.log(output.join("\n"));
