const problemNum = 2630;
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
const cell = input.slice(1).map((e) => e.split(" ").map(Number));
const output = [0, 0];

function cutPaper(x, y, size) {
  let startColor = cell[y][x];
  if (size === 1) {
    output[startColor]++;
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
    const dxPos = [0, 0, 1, 1];
    const dyPos = [0, 1, 0, 1];
    for (let i = 0; i < 4; i++) {
      cutPaper(x + (size / 2) * dxPos[i], y + (size / 2) * dyPos[i], size / 2);
    }
  } else {
    // console.log("[", x, y, "]");
    // console.log(
    //   cell
    //     .slice(y, y + size)
    //     .map((e) => e.slice(x, x + size).join(" "))
    //     .join("\n")
    // );
    output[startColor]++;
    return;
  }
}

cutPaper(0, 0, N);
console.log(output.join("\n"));
