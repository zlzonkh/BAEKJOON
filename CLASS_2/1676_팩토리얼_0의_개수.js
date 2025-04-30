const problemNum = 1676;
const N = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);
let output = 0;

for (let i = 1; i <= N; i++) {
  if (i % 5 ** 3 === 0) output += 3;
  else if (i % 5 ** 2 === 0) output += 2;
  else if (i % 5 === 0) output += 1;
}

console.log(output);
