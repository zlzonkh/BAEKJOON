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

  toString() {
    let str = "";
    for (let i = this.head; i < this.tail; i++) {
      str += this.items[i];
      str += ", ";
    }
    return str;
  }
}

const [N, M] = [0, 0]; // input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []); // 입력 형태에 따라 변형 예) 입력이 자연수인 경우 N + 1
for (let i = 1; i <= M; i++) {
  const [a, b] = [0, 0]; // input[i].split(" ").map((x) => Number(x) - 1);
  graph[a].push(b);
  graph[b].push(a);
}

function BFS(start) {
  const visited = Array(N).fill(false); // 입력 형태에 따라 변형 예) 입력이 자연수인 경우 N + 1
  const queue = new Queue();
  visited[start] = true;
  queue.push(start);

  while (!queue.isEmpty()) {
    const cur = queue.pop();
    for (const next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}
