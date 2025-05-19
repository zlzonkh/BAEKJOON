const problemNum = 25191;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const [A, B] = input[1].split(" ").map(Number);
let output = 0;

output += Math.floor(A / 2);
output += B;
output = output > N ? N : output;

console.log(output);
