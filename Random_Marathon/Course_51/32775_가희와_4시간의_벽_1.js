const problemNum = 32775;
const [S, F] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

S > F ? console.log("flight") : console.log("high speed rail");
