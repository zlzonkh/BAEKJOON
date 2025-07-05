const problemNum = 32710;
const input = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
    .split("\n")
);
let output = 0;

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if (input === i * j) output = 1;
  }
}

console.log(output);
