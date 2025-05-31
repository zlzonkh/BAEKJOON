const problemNum = 10039;
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
let result = 0;

input.forEach((e) => {
  if (e < 40) result += 40;
  else result += e;
});

console.log(result / 5);
