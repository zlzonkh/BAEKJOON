const problemNum = 2108;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = input[0];
const numbers = input.slice(1).sort((a, b) => a - b);
const output = [];

// 산술 평균
output.push(Math.round(numbers.reduce((sum, e) => sum + e, 0) / N));

// 중앙값
output.push(numbers[Math.floor(N / 2)]);

// 최빈값
const freq = new Map();
let maxCount = 0;

numbers.forEach((num) => {
  const count = (freq.get(num) || 0) + 1;
  freq.set(num, count);
  if (count > maxCount) maxCount = count;
});

const modes = [...freq.entries()]
  .filter(([_, count]) => count === maxCount)
  .map(([num]) => num)
  .sort((a, b) => a - b);

output.push(modes.length === 1 ? modes[0] : modes[1]);

// 범위
output.push(numbers[N - 1] - numbers[0]);

console.log(output.join("\n"));
