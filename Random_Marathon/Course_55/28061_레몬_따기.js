const problemNum = 28061;
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
const lemonsToGet = input[1].split(" ").map((e, i) => Number(e) - (N - i));
const output = Math.max(...lemonsToGet);

console.log(output);
