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

class Node {
  constructor(index) {
    this.connected = [];
    this.index = index;
    this.flag = false;
    this.prev = null;
  }
}

const [N, M] = input[0].split(" ").map(Number);
const edges = input
  .slice(1)
  .map((line) => line.split(" ").map((e) => Number(e) - 1));
const nodes = [];
for (let i = 0; i < N; i++) {
  nodes.push(new Node(i));
}

edges.forEach((edge) => {
  nodes[edge[0]].connected.push(edge[1]);
  nodes[edge[1]].connected.push(edge[0]);
});

function BFS(startNode) {
  const queue = new Queue();
  queue.push(startNode);
  nodes[startNode].flag = true;

  while (!queue.isEmpty()) {
    const curNode = nodes[queue.pop()];
    curNode.connected.forEach((e) => {
      if (!nodes[e].flag) {
        nodes[e].flag = true;
        nodes[e].prev = curNode.index;
        queue.push(e);
      }
    });
  }
}

function getDist(a, b) {
  let curNode = nodes[b];
  let dist = 0;
  while (curNode !== nodes[a]) {
    curNode = nodes[curNode.prev];
    dist++;
  }
  return dist;
}

const baconNums = [];

for (let i = 0; i < N; i++) {
  let baconNum = 0;
  BFS(i);
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    baconNum += getDist(i, j);
  }
  baconNums.push(baconNum);
  nodes.forEach((e) => {
    e.prev = null;
    e.flag = false;
  });
}

const output = baconNums.reduce((minIdx, e, i) => {
  if (baconNums[minIdx] > e) return i;
  else return minIdx;
}, 0);

console.log(output + 1);
