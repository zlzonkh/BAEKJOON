const problemNum = 9461;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const MAX = Math.max(...input);
const dp = [0, 1, 1, 1, 2, 2];
for (let i = 6; i <= MAX; i++) dp.push(dp[i - 1] + dp[i - 5]);

const output = input.map((e) => dp[e]);

console.log(output.join("\n"));
