const problemNum = 32314;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const a = Number(input[0]);
const [w, v] = input[1].split(" ").map(Number);

console.log(w / v >= a ? 1 : 0);
