const problemNum = 1764;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const output = [];
const [N, M] = input[0].split(" ").map(Number);
const dutdo = new Set(input.slice(1, N + 1));
const bodo = new Set(input.slice(N + 1, N + M + 1));

const dutbojab = [];
dutdo.forEach((e) => {
  if (bodo.has(e)) dutbojab.push(e);
});
output.push(dutbojab.length);
output.push(dutbojab.sort().join("\n"));

console.log(output.join("\n"));
