const problemNum = 27959;
const [N, M] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(N * 100 >= M ? "Yes" : "No");
