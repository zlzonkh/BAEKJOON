const problemNum = 17626;
const N = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);
const dp = [0, 1];

for (let i = 2; i <= N; i++) {
  let min = 4;
  if (Number.isInteger(Math.sqrt(i))) dp.push(1);
  else {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      min = Math.min(min, dp[j ** 2] + dp[i - j ** 2]);
    }
    dp.push(min);
  }
}

console.log(dp[N]);
