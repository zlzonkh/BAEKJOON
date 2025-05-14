const problemNum = 2579;
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

const N = input[0];
const stairs = [0, ...input.slice(1)];
const dp = Array(N + 1).fill(0);

dp[1] = stairs[1];
dp[2] = stairs[1] + stairs[2];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i],
    dp[i - 3] + stairs[i - 1] + stairs[i]
  );
}

console.log(dp[N]);
