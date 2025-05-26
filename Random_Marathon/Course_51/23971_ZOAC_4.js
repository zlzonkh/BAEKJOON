const problemNum = 23971;
const [H, W, N, M] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.ceil(H / (N + 1)) * Math.ceil(W / (M + 1)));
