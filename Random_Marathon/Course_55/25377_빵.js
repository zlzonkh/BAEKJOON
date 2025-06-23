const problemNum = 25377;
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
  .map((e) => e.split(" ").map(Number));
const canBuy = [];
input.forEach((e) => {
  if (e[0] <= e[1]) canBuy.push(e[1]);
});

console.log(canBuy.length === 0 ? -1 : Math.min(...canBuy));
