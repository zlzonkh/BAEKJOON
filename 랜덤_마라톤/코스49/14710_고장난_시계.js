const problemNum = 14710;
const [H, M] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let output = "X";

if ((H % 30) * 12 === M) output = "O";

console.log(output);
