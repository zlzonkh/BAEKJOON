const problemNum = 11726;
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

const dp = [1, 1];

for (let i = 2; i <= N; i++) {
  dp.push((dp[i - 1] + dp[i - 2]) % 10007);
}

console.log(dp[N]);
