const problemNum = 20499;
const [K, D, A] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("/")
  .map(Number);
const output = D === 0 || K + A < D ? "hasu" : "gosu";

console.log(output);
