const problemNum = 13118;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const people = input[0].split(" ").map(Number);
const apple = input[1].split(" ").map(Number);
let output = people.indexOf(apple[0]);
output = output === -1 ? 0 : output + 1;

console.log(output);
