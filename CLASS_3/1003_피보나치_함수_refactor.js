// 정확성 개선

const problemNum = 1003;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const cases = input.slice(1).map(Number);
const MAX = Math.max(...cases);

const fibCount = [
  [1, 0],
  [0, 1],
];
for (let i = 2; i <= MAX; i++) {
  const [a0, a1] = fibCount[i - 1];
  const [b0, b1] = fibCount[i - 2];
  fibCount[i] = [a0 + b0, a1 + b1];
}

const output = cases.map((n) => fibCount[n].join(" "));

console.log(output.join("\n"));
