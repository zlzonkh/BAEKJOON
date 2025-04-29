const problemNum = 11050;
const [N, K] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = 1;

for (let i = N; i > N - K; i--) result *= i;
for (let i = K; i > 1; i--) result /= i;

console.log(result);
