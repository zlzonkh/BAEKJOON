const problemNum = 10816;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const cards = input[1].split(" ").map(Number);
const target = input[3].split(" ").map(Number);
const cardCounts = {};

cards.forEach((e) => {
  if (cardCounts[e] !== undefined) cardCounts[e] += 1;
  else cardCounts[e] = 1;
});

const output = target.map((e) => {
  if (cardCounts[e] !== undefined) return cardCounts[e];
  else return 0;
});

console.log(output.join(" "));
