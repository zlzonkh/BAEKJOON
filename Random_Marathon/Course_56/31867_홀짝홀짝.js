const problemNum = 31867;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")[1]
  .split("")
  .map(Number);
let odd = 0;
let even = 0;
let output = -1;
input.forEach((e) => {
  if (e % 2) odd++;
  else even++;
});
if (even > odd) output = 0;
else if (even < odd) output = 1;
console.log(output);
