const problemNum = 2775;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const output = [];
const apt = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];

for (let i = 1; i < 15; i++) {
  const floor = [0];
  for (let j = 1; j < 15; j++) {
    floor.push(j === 1 ? 1 : apt[i - 1][j] + floor[j - 1]);
  }
  apt.push(floor);
}

for (let i = 1; i < input.length; i += 2) {
  const k = input[i];
  const n = input[i + 1];
  output.push(apt[k][n]);
}

console.log(output.join("\n"));
