const problemNum = 2751;
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
const output = input.sort((a, b) => a - b);

console.log(output.join("\n"));
