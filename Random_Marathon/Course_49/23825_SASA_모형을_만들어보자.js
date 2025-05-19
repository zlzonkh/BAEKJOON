const problemNum = 23825;
const [N, M] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const output = Math.min(Math.floor(N / 2), Math.floor(M / 2));

console.log(output);
