const problemNum = 18110;
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

const n = input[0];
const trim = Math.round(n * 0.15);
const difficulty = input.slice(1);

difficulty.sort((a, b) => a - b);

let result = Math.round(
  difficulty.slice(trim, n - trim).reduce((sum, e) => {
    return sum + e;
  }, 0) /
    (n - trim * 2)
);

console.log(n === 0 ? 0 : result);
