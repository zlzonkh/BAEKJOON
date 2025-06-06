const problemNum = 5522;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(
  input.reduce((sum, e) => {
    return sum + e;
  })
);
