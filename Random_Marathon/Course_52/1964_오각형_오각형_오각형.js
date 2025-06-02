const problemNum = 1964;
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
const dots = [0, 5];
for (let i = 2; i <= N; i++) {
  dots.push(dots[i - 1] + 3 * i + 1);
}
console.log(dots[N] % 45678);
