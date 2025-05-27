const problemNum = 22341;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, C] = input[0].split(" ").map(Number);
const dots = input.slice(1).map((e) => e.split(" ").map(Number));

const paper = [N, N];
dots.forEach((e) => {
  if (e[0] < paper[0] && e[1] < paper[1]) {
    // 세로로 자른 경우 <= 가로로 자른 경우 ? 가로로 자르기 : 세로로 자르기
    paper[0] * e[1] <= paper[1] * e[0] ? (paper[0] = e[0]) : (paper[1] = e[1]);
  }
});

console.log(paper[0] * paper[1]);
