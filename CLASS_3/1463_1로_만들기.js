const problemNum = 1463;
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

const minOperList = [0, 0];

for (let i = 2; i <= N; i++) {
  const candidate = [];
  if (i % 3 === 0) candidate.push(minOperList[i / 3]);
  if (i % 2 === 0) candidate.push(minOperList[i / 2]);
  candidate.push(minOperList[i - 1]);
  minOperList.push(Math.min(...candidate) + 1);
}

console.log(minOperList[N]);
