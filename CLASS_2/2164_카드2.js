const problemNum = 2164;
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
const output = (N - 2 ** Math.floor(Math.log2(N))) * 2;

console.log(output === 0 ? N : output);
