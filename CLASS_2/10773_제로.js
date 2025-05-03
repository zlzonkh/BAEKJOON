const problemNum = 10773;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);
const stack = [];

input.forEach((e) => {
  if (e === 0) stack.pop();
  else stack.push(e);
});

const output =
  stack.length > 0
    ? stack.reduce((sum, e) => {
        return sum + e;
      })
    : 0;

console.log(output);
