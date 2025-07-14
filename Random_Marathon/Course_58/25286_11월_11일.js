const problemNum = 25286;
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
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const output = input.map((e) => {
  if (e[1] === 1) return [e[0] - 1, 12, month[11]].join(" ");
  if (e[1] === 3)
    return [
      e[0],
      2,
      (e[0] % 4 === 0 && e[0] % 100 !== 0) || e[0] % 400 === 0 ? 29 : 28,
    ].join(" ");
  else return [e[0], e[1] - 1, month[e[1] - 2]].join(" ");
});

console.log(output.join("\n"));
