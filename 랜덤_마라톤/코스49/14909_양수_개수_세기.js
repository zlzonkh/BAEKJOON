const problemNum = 14909;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let output = 0;
input.forEach((e) => {
  if (e > 0) output += 1;
});

console.log(output);
