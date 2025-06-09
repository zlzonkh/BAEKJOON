const problemNum = 15667;
const input = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);
let output = 0;

for (let i = 1; i <= 100; i++) {
  if (1 + i + i ** 2 === input) {
    output = i;
    break;
  }
}

console.log(output);
