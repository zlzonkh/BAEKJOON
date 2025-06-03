const problemNum = 10768;
const [M, D] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let output = "";

if (M === 2) {
  if (D > 18) output = "After";
  else if (D < 18) output = "Before";
  else output = "Special";
} else {
  output = M > 2 ? "After" : "Before";
}

console.log(output);
