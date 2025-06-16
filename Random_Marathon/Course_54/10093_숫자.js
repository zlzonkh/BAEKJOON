const problemNum = 10093;
const [A, B] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);
const output = [];

const smallNum = A < B ? A : B;
const bigNum = A > B ? A : B;
const diff = Math.max(0, Number(bigNum - smallNum) - 1);
output.push(diff);

const nums = [];
for (let i = 0; i < diff; i++) {
  nums.push(smallNum + BigInt(i + 1));
}
output.push(nums.join(" "));

console.log(output.join("\n"));
