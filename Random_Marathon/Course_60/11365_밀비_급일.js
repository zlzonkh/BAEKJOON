const problemNum = 11365;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const output = input.map((line) => line.split("").reverse().join(""));
output.pop();

console.log(output.join("\n"));
