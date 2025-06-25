require("fs");

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
    this.visited = false;
  }
}

const nodes = [];
const edges = [];

edges.forEach((edge) => {
  nodes[edge[0]].connected.push(edge[1]);
  nodes[edge[1]].connected.push(edge[0]);
});

function BFS(startNode) {
  const queue = new Queue();
  queue.push(startNode);
  nodes[startNode].flag = true;

  while (!queue.isEmpty()) {
    nodes[queue.pop()].connected.forEach((e) => {
      if (!nodes[e].flag) {
        nodes[e].flag = true;
        queue.push(e);
      }
    });
  }
}
