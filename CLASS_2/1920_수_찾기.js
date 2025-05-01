const problemNum = 1920;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
const targets = input[3].split(" ").map(Number);

arr.sort((a, b) => a - b);
const output = targets.map((target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return 1;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return 0;
});

console.log(output.join("\n"));
