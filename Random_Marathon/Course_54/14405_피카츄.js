const problemNum = 14405;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("");
let output = "";
const possibleSound = ["pi", "ka", "chu"];

console.log(output);
