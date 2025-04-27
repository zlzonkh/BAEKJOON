const problemNum = 16204;
const [N, M, K] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(M > K ? N - M + K : N - K + M);
