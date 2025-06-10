const problemNum = 23802;
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
const output = [];

for (let i = 0; i < N; i++) {
  output.push("@".repeat(N * 5));
}
for (let i = 0; i < N * 4; i++) {
  output.push("@".repeat(N));
}

console.log(output.join("\n"));
