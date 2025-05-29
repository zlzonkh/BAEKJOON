const problemNum = 11659;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
const sections = input
  .slice(2)
  .map((line) => line.split(" ").map((e) => Number(e) - 1));

const arrSums = [];
arr.forEach((e, i) => {
  arrSums.push(i === 0 ? e : arrSums[i - 1] + e);
});

const output = sections.map((e) => {
  if (e[0] === 0) return arrSums[e[1]];
  else return arrSums[e[1]] - arrSums[e[0] - 1];
});
console.log(output.join("\n"));
