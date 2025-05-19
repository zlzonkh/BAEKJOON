const problemNum = 30033;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
let output = 0;
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
A.forEach((e, i) => {
  if (e <= B[i]) output++;
});

console.log(output);
