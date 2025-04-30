const problemNum = 11650;
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
    if (x1 === x2) return y1 - y2;
    else return x1 - x2;
  })
  .map((e) => e.join(" "));

console.log(output.join("\n"));
