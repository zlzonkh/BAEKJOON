const problemNum = 2947;
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
const output = [];
let sorted = false;

while (!sorted) {
  for (let i = 0; i < 4; i++) {
    if (input[i] > input[i + 1]) {
      [input[i], input[i + 1]] = [input[i + 1], input[i]];
      output.push(input.join(" "));
    }
  }

  sorted = true;
  for (let i = 0; i < 5; i++) {
    if (input[i] != i + 1) sorted = false;
  }
}

console.log(output.join("\n"));
