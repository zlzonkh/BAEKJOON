const problemNum = 26082;
const [A, B, C] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const COST_PERFORMANCE_RATE = 3;

console.log((COST_PERFORMANCE_RATE * B * C) / A);
