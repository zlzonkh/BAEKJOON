const problemNum = 11022;
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
  .map((e) => e.split(" ").map(Number));

const output = input.map(
  (testcase, i) =>
    `Case #${i + 1}: ${testcase[0]} + ${testcase[1]} = ${
      testcase[0] + testcase[1]
    }`
);

console.log(output.join("\n"));
