const problemNum = 2448;
const h = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);
const w = 2 * h - 1;
const field = Array.from({ length: h }, () => Array(w).fill(" "));

function f(x, y, size) {
  if (size === 3) {
    field[y][x] = "*";
    field[y + 1][x - 1] = "*";
    field[y + 1][x + 1] = "*";
    for (let i = 0; i < 5; i++) {
      field[y + 2][x - 2 + i] = "*";
    }
  } else {
    const half = size / 2;
    f(x, y, half);
    f(x - half, y + half, half);
    f(x + half, y + half, half);
  }
}

f((w + 1) / 2 - 1, 0, h);

console.log(field.map((e) => e.join("")).join("\n"));
