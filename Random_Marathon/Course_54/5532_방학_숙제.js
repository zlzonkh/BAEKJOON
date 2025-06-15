const problemNum = 5532;
const [L, A, B, C, D] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const output = L - Math.ceil(Math.max(A / C, B / D));

console.log(output);
