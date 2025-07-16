const problemNum = 15720;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const output = [];
let originalPrice = 0;
let discountPrice = 0;

const counts = input[0].split(" ").map(Number);
const prices = input.slice(1).map((line) =>
  line
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
);

originalPrice = prices.reduce(
  (sum, line) => sum + line.reduce((sum, e) => sum + e),
  0
);

for (let i = 0; i < Math.min(...counts); i++) {
  let setPrice = 0;
  for (let i = 0; i < prices.length; i++) setPrice += prices[i].pop();
  discountPrice += setPrice * 0.9;
}

discountPrice += prices.reduce(
  (sum, line) => sum + line.reduce((sum, e) => sum + e, 0),
  0
);

output.push(originalPrice);
output.push(discountPrice);
console.log(output.join("\n"));
