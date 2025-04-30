const problemNum = 11651;
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
const output = input
  .sort(([x1, y1], [x2, y2]) => {
    if (y1 === y2) return x1 - x2;
    else return y1 - y2;
  })
  .map((e) => e.join(" "));

console.log(output.join("\n"));
