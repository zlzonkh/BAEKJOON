const problemNum = 1271;
const [n, m] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);
const output = [];
output.push(n / m);
output.push(n % m);

console.log(output.join("\n"));
