const problemNum = 30454;
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

const [N, L] = input[0].split(" ").map(Number);
let maxLine = -1;
let maxLineCount = 0;

input.slice(1).forEach((line) => {
  const body = line.split("").map(Number);
  let lineCount = 0;
  for (let i = 0; i < L; i++)
    if (body[i] === 1 && (i === 0 || body[i - 1] === 0)) lineCount++;

  if (lineCount > maxLine) {
    maxLineCount = 0;
    maxLine = lineCount;
  }
  if (lineCount === maxLine) maxLineCount++;
});

console.log(maxLine, maxLineCount);
