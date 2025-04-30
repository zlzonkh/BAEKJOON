const problemNum = 10814;
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
  .map((e) => e.split(" "));
const output = input
  .sort((a, b) => Number(a[0]) - Number(b[0]))
  .map((e) => e.join(" "));

console.log(output.join("\n"));
