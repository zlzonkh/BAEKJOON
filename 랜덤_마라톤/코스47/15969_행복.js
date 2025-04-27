const problemNum = 15969;
const [_, input] = require("fs")
  .readFileSync(
    process.platform === "linux" ? 0 : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const scoreList = input.split(" ").map(Number);
const max = scoreList.reduce((max, e) => (e >= max ? e : max));
const min = scoreList.reduce((min, e) => (e <= min ? e : min));

console.log(max - min);
