const problemNum = 5565;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let remain = input[0];
input.slice(1).forEach((e) => (remain -= e));
console.log(remain);
