const problemNum = 31962;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const buses = input.slice(1).map((line) => line.split(" ").map(Number));

let output = -1;
buses.forEach((e) => {
  if (e[0] + e[1] <= X) output = Math.max(output, e[0]);
});

console.log(output);
