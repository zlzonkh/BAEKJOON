const problemNum = 1780;
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
const cell = input
  .slice(1)
  .map((line) => line.split(" ").map((e) => Number(e) + 1));
const output = [0, 0, 0];

function cutPaper(x, y, size) {
  let startCell = cell[y][x];
  if (size === 1) {
    output[startCell]++;
    return;
  }

  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (cell[i][j] !== startCell) {
        for (let dyPos = 0; dyPos < 3; dyPos++)
          for (let dxPos = 0; dxPos < 3; dxPos++)
            cutPaper(x + (size / 3) * dxPos, y + (size / 3) * dyPos, size / 3);
        return;
      }
    }
  }
  output[startCell]++;
  return;
}

cutPaper(0, 0, N);

console.log(output.join("\n"));
