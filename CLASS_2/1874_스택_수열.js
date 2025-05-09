const problemNum = 1874;
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
const output = [];
const n = input[0];
const targetSeries = input.slice(1);
const stack = [];
let isPossible = true;
let nextNum = 1;
let i = 0;
while (i < n) {
  if (stack.length === 0 || stack.at(-1) < targetSeries[i]) {
    stack.push(nextNum++);
    output.push("+");
  } else if (stack.at(-1) === targetSeries[i]) {
    stack.pop();
    output.push("-");
    i++;
  } else {
    isPossible = false;
    break;
  }
}
console.log(isPossible ? output.join("\n") : "NO");
