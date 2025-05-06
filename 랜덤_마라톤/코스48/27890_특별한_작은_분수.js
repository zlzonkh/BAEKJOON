const problemNum = 27890;
const [init, N] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let prev = init;
let cur = init;

for (let i = 0; i < N; i++) {
  if (prev % 2 === 0) cur = Math.floor(prev / 2) ^ 6;
  else cur = (prev * 2) ^ 6;
  prev = cur;
}

console.log(cur);
