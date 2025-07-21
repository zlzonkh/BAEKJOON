const problemNum = 32288;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")[1];
const output = input.replaceAll("l", "L").replaceAll("I", "i");

console.log(output);
