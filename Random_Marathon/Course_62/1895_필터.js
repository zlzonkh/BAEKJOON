const problemNum = 1895;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const [R, C] = input[0].split(" ").map(Number);
const image = input.slice(1, R + 1).map((line) => line.split(" ").map(Number));
const T = Number(input[R + 1]);
const dx = [0, 0, 0, 1, 1, 1, 2, 2, 2];
const dy = [0, 1, 2, 0, 1, 2, 0, 1, 2];
let output = 0;
for (let i = 0; i < R - 2; i++) {
  for (let j = 0; j < C - 2; j++) {
    // 변수명 수정 필요: filter()함수랑 혼동할 여지가 있음
    const filter = [];
    for (let k = 0; k < dx.length; k++)
      filter.push(image[i + dy[k]][j + dx[k]]);
    if (filter.sort((a, b) => a - b)[4] >= T) output++;
  }
}

console.log(output);
