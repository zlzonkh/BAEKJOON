const problemNum = 24228;
const [N, R] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

console.log((R * BigInt(2) + N - BigInt(1)).toString());
