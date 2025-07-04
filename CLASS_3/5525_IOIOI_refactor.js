const problemNum = 5525;
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
const M = Number(input[1]);
const S = input[2];

let count = 0;
let result = 0;
let i = 0;

while (i < M - 2) {
  if (S[i] === "I" && S[i + 1] === "O" && S[i + 2] === "I") {
    count++;
    i += 2;
    if (count === N) {
      result++;
      count--;
    }
  } else {
    count = 0;
    i++;
  }
}

console.log(result);
