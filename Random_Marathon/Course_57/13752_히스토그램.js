const problemNum = 13752;
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
const output = input.map((e) => "=".repeat(e));

console.log(output.join("\n"));
