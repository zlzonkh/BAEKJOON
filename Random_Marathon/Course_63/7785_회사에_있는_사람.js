const problemNum = 7785;
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
  .map((line) => line.split(" "));

const company = new Set();
input.forEach((e) => {
  if (e[1] === "enter") company.add(e[0]);
  else company.delete(e[0]);
});
const output = [...company].sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  if (a === b) return 0;
});

console.log(output.join("\n"));
