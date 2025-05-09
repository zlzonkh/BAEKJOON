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
let modes = [];
let modeCount = 0;
let curNum = numbers[0];
let curCount = 0;
numbers.forEach((e, i) => {
  if (e === curNum) curCount++;
  if (e !== curNum || i === N - 1) {
    if (modeCount < curCount) {
      modes = [curNum];
      modeCount = curCount;
    } else if (modeCount === curCount) {
      modes.push(curNum);
    }
    curNum = e;
    curCount = 1;
  }
});
output.push(modes.length === 1 ? modes[0] : modes[1]);

// 범위
output.push(numbers[N - 1] - numbers[0]);

console.log(output.join("\n"));
