const problemNum = 25494;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1);
const output = input.map((e) => Math.min(...e.split(" ").map(Number)));

console.log(output.join("\n"));
