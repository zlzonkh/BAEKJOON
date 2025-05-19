const problemNum = 15726;
const [A, B, C] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (B < C) console.log(Math.floor((A / B) * C));
else console.log(Math.floor((A * B) / C));
