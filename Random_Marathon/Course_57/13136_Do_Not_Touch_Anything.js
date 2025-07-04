const problemNum = 13136;
const [R, C, N] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const output = [];

console.log(Math.ceil(R / N) * Math.ceil(C / N));
