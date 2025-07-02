const problemNum = 2805;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

function cutTree(h) {
  return trees.reduce((sum, e) => (e > h ? sum + e - h : sum), 0);
}

let min = 0;
let max = Math.max(...trees);
let output = 0;
while (min <= max) {
  const ch = Math.floor((min + max) / 2);
  const gotTree = cutTree(ch);
  if (gotTree < M) max = ch - 1;
  else if (gotTree >= M) {
    output = ch;
    min = ch + 1;
  }
}

console.log(output);
