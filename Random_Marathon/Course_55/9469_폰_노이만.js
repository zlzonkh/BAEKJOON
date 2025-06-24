const problemNum = 9469;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map(Number));
const output = input.map((e) => {
  const [N, D, A, B, F] = e;
  return N + " " + (D / (A + B)) * F;
});

console.log(output.join("\n"));
