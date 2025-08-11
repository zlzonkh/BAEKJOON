const problemNum = 2851;
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
let score = 0;
for (let i = 0; i < 10; i++) {
  if (Math.abs(100 - score) >= Math.abs(100 - (score + input[i])))
    score += input[i];
  else break;
}

console.log(score);
