const problemNum = 1931;
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
  .map((line) => line.split(" ").map(Number))
  .sort((a, b) => {
    return a[1] === b[1] ? a[0] - b[1] : a[1] - b[1];
  });
let output = 0;
let lasteat = 0;
input.forEach((e) => {
  if (e[0] >= lasteat) {
    lasteat = e[1];
    output++;
  }
});

console.log(output);
