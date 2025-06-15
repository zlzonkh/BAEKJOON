const problemNum = 17356;
const [A, B] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const M = (B - A) / 400;
const output = 1 / (1 + 10 ** M);

console.log(output);
