const problemNum = 2839;
const input = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);

let left = input;
let count = 0;
let minCount = Number.MAX_SAFE_INTEGER;
while (left >= 0) {
  if (left % 3 === 0)
    minCount = count + left / 3 < minCount ? count + left / 3 : minCount;
  left -= 5;
  count++;
}

console.log(minCount === Number.MAX_SAFE_INTEGER ? -1 : minCount);
