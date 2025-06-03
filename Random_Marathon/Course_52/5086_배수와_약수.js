const problemNum = 5086;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
input.pop();
const output = [];

input.map((e) => {
  if (e[0] < e[1] && e[1] % e[0] === 0) output.push("factor");
  else if (e[0] > e[1] && e[0] % e[1] === 0) output.push("multiple");
  else output.push("neither");
});

console.log(output.join("\n"));
