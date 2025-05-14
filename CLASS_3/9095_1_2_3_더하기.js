const problemNum = 9095;
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
const T = input[0];
const cases = input.slice(1);
const MAX = Math.max(...cases);
const dp = Array(MAX + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let i = 4; i <= MAX; i++) dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];

const output = cases.map((e) => dp[e]);

console.log(output.join("\n"));
