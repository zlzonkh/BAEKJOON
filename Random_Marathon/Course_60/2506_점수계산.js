const problemNum = 2506;
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
  .map((e) => (e === "1" ? true : false));
let output = 0;
let len = 0;
input.forEach((e) => {
  if (e) output += ++len;
  else len = 0;
});

console.log(output);
