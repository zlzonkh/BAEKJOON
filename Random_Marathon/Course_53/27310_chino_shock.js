const problemNum = 27310;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("");
let output = input.length;
input.forEach((e) => {
  if (e === ":") output += 1;
  if (e === "_") output += 5;
});

console.log(output);
