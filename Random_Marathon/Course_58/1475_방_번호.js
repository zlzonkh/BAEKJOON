const problemNum = 1475;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .replaceAll("9", "6")
  .split("")
  .map(Number);

const counts = Array(9).fill(0);
input.forEach((e) => {
  counts[e]++;
});
counts[6] = Math.ceil(counts[6] / 2);

console.log(Math.max(...counts));
