// 시간초과나서 python으로 풀음

const problemNum = 27434;
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
let result = 1;
for (let i = 1; i <= N; i++) {
  result *= i;
}

console.log(result.toString());
