const problemNum = 18868;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const [M, N] = input[0].split(" ").map(Number);
const spaces = input.slice(1).map((line) => line.split(" ").map(Number));
let output = 0;

function compare(A, B) {
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      if (
        !(
          (A[i] > A[j] && B[i] > B[j]) ||
          (A[i] === A[j] && B[i] === B[j]) ||
          (A[i] < A[j] && B[i] < B[j])
        )
      ) {
        break;
      }
    }
  }
}

console.log(output);
