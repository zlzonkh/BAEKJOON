const problemNum = 2869;
const [A, B, V] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log(Math.ceil((V - A) / (A - B) + 1));
