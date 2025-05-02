const problemNum = 2338;
const [A, B] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);
const output = [];
output.push(A + B);
output.push(A - B);
output.push(A * B);

console.log(output.join("\n"));
