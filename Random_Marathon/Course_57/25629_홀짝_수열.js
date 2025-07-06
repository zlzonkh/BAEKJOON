const problemNum = 25629;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);
let output = 0;
let [odd, even] = [0, 0];

input.forEach((e) => {
  if (e % 2 === 0) even++;
  else odd++;
});

if (odd === even || odd === even + 1) output = 1;
console.log(output);
