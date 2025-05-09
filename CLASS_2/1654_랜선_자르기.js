const problemNum = 1654;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const [_, N] = input[0].split(" ").map(Number);
const lanLine = input.slice(1).map(Number);
const maxLength = lanLine.reduce((max, e) => (e > max ? e : max));

function getLineCount(lines, cutLength) {
  let count = 0;
  lines.forEach((e) => (count += Math.floor(e / cutLength)));
  return count;
}

let cutLengthMax = maxLength;
let cutLengthMin = 0;
let cutLength;
while (cutLengthMin <= cutLengthMax) {
  cutLength = Math.floor((cutLengthMin + cutLengthMax) / 2);
  let lineCount = getLineCount(lanLine, cutLength);
  if (lineCount < N) cutLengthMax = cutLength - 1;
  else if (getLineCount(lanLine, cutLength + 1) >= N)
    cutLengthMin = cutLength + 1;
  else break;
}

console.log(cutLength);
