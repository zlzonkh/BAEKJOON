const problemNum = 5430;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.reverced = false;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else if (!this.reverced) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    if (this.head === null) return undefined;
    else {
      const data = this.reverced ? this.tail.data : this.head.data;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (!this.reverced) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return data;
    }
  }

  reverce() {
    this.reverced = this.reverced ? false : true;
  }

  toString() {
    let str = "";
    let i = this.reverced ? this.tail : this.head;
    while (i) {
      str += i.data;
      str += ",";
      i = this.reverced ? i.prev : i.next;
    }
    return str.slice(0, str.length - 1);
  }
}

class Node {
  constructor(N) {
    this.data = N;
    this.next = null;
    this.prev = null;
  }
}

const output = [];

const T = Number(input[0]);
for (let i = 1; i <= 3 * T; i += 3) {
  const cmd = input[i].split("");
  const list = new LinkedList();
  const arr =
    input[i + 1] !== "0"
      ? input[i + 2].replace("[", "").replace("]", "").split(",").map(Number)
      : [];
  arr.forEach((e) => list.push(e));

  let error = false;
  cmd.forEach((e) => {
    if (e === "R") list.reverce();
    else if (e === "D") {
      if (list.pop() === undefined) {
        error = true;
      }
    }
  });

  if (!error) {
    let str = "[";
    str += list.toString();
    str += "]";
    output.push(str);
  } else {
    output.push("error");
  }
}

console.log(output.join("\n"));
