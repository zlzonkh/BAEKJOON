const problemNum = 11399;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const P = input[1].split(" ").map(Number);
const output = P.sort((a, b) => a - b).reduce((acc, e, i) => {
  return acc + e * (N - i);
}, 0);

console.log(output);
