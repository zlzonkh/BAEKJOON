const problemNum = 1992;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const cell = input.slice(1).map((e) => e.split("").map(Number));
const output = [];

function quadTree(x, y, size) {
  let startColor = cell[y][x];
  if (size === 1) {
    output.push(startColor);
    return;
  }

  let escape = false;
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (cell[i][j] !== startColor) {
        escape = true;
        break;
      }
    }
    if (escape) break;
  }

  if (escape) {
    const dxPos = [0, 1, 0, 1];
    const dyPos = [0, 0, 1, 1];
    output.push("(");
    for (let i = 0; i < 4; i++) {
      quadTree(x + (size / 2) * dxPos[i], y + (size / 2) * dyPos[i], size / 2);
    }
    output.push(")");
  } else {
    output.push(startColor);
    return;
  }
}
quadTree(0, 0, N);
console.log(output.join(""));
