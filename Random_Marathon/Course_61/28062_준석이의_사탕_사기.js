const problemNum = 28062;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);
const leastOdd = input.reduce(
  (least, e) => (e % 2 === 1 && least > e ? e : least),
  Infinity
);
const sum = input.reduce((sum, e) => sum + e, 0);
const output = sum % 2 === 1 ? sum - leastOdd : sum;

console.log(output);
