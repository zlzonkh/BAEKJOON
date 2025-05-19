const problemNum = 4740;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const output = [];

input.forEach((str) => {
  if (str === "***") return;
  output.push(str.split("").reverse().join(""));
});

console.log(output.join("\n"));
