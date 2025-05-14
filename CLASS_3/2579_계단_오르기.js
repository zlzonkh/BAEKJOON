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
const stairs = input.slice(1);
stairs.unshift(0);

const dp = [0, stairs[1], stairs[1] + stairs[2]];
const canStapNext = [true, true, false];

for (let i = 3; i <= N; i++) {
  const candidate = [];
  if (i >= 4) candidate.push(dp[i - 4] + stairs[i - 2]);
  if (canStapNext[i - 3]) candidate.push(dp[i - 3] + stairs[i - 2]);
  else if (i >= 5) candidate.push(dp[i - 5] + stairs[i - 3] + stairs[i - 2]);

  if (
    candidate.length >= 1 &&
    Math.max(...candidate) >= dp[i - 3] + stairs[i - 1]
  ) {
    dp.push(Math.max(...candidate) + stairs[i]);
    canStapNext.push(true);
  } else {
    dp.push(dp[i - 3] + stairs[i - 1] + stairs[i]);
    canStapNext.push(false);
  }
}
console.log(dp[N]);
