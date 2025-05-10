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
const MAX = cases.reduce((max, e) => (max > e ? max : e));
const fib = [];
for (let i = 0; i < MAX; i++) {
  if (i === 0 || i === 1) fib.push(1);
  else fib.push(fib[i - 1] + fib[i - 2]);
}

const output = cases.map((e) => {
  if (e === 0) return "1 0";
  if (e === 1) return "0 1";
  return fib[e - 2] + " " + fib[e - 1];
});

console.log(output.join("\n"));
