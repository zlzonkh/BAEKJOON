const problemNum = 11047;
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

const [N, K] = input[0].split(" ").map(Number);
const coinlist = input.slice(1).map(Number);

let curMoney = 0;
let count = 0;
let possibleLargestIndex = N - 1;
while (curMoney < K) {
  if (curMoney + coinlist[possibleLargestIndex] > K) possibleLargestIndex--;
  else {
    let possibleCount = Math.floor(
      (K - curMoney) / coinlist[possibleLargestIndex]
    );
    curMoney += possibleCount * coinlist[possibleLargestIndex];
    count += possibleCount;
  }
}
console.log(count);
