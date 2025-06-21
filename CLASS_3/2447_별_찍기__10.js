const problemNum = 2447;
const N = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);
const field = Array.from({ length: N }, () => Array(N).fill(" "));

function f(x, y, size) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue;
      if (size <= 3) {
        field[y + (size / 3) * j][x + (size / 3) * i] = "*";
      } else {
        f(x + (size / 3) * i, y + (size / 3) * j, size / 3);
      }
    }
  }
}

f(0, 0, N);

console.log(field.map((e) => e.join("")).join("\n"));
