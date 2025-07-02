const problemNum = 17173;
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
const K = input[1].split(" ").map(Number);
const set = new Set();
K.forEach((e) => {
  let i = 1;
  while (e * i <= N) {
    set.add(e * i++);
  }
});

const output = [...set].reduce((sum, e) => sum + e, 0);

console.log(output);
