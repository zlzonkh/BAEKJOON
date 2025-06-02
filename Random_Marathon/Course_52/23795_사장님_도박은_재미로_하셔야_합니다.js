const problemNum = 23795;
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
let output = 0;

output = input.reduce((sum, e) => {
  if (e === -1) return sum;
  else return sum + e;
});

console.log(output);
