const problemNum = 33963;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim();
const N = Number(input);
const length = input.length;
let n = N / 10 ** length;
let output = 0;
while (n < 1) {
  n *= 2;
  output++;
}

console.log(output - 1);
