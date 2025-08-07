const problemNum = 32979;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const T = Number(input[1]);
const a = input[2].split(" ").map(Number);
const b = input[3].split(" ").map(Number);

let curPos = 0;
const output = [];
for (let e of b) {
  curPos = (curPos + e - 1) % (N * 2);
  output.push(a[curPos]);
}

console.log(output.join(" "));
