// 채스판을 부분영역으로 분리하지 않고, 각 칸이 규칙에 맞는 지 계산하는 식으로 시간과 공간을 절약할 수 있음.

const problemNum = 1018;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const fullBoard = input.slice(1);
const subBoards = [];

// 전체 영역을 8*8 크기의 부분영역으로 분리
// B는 -1, W는 1로 변환
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let subBoard = [];
    for (let k = 0; k < 8; k++) {
      subBoard.push(
        fullBoard[i + k]
          .slice(j, j + 8)
          .split("")
          .map((e) => (e === "B" ? -1 : 1))
      );
    }
    subBoards.push(subBoard);
  }
}

const result = subBoards.reduce((min, board) => {
  // 첫 번째 칸이 검정색, 흰색인 경우를 한번씩 확인
  let minCount = Number.MAX_SAFE_INTEGER;
  [-1, 1].forEach((firstCell) => {
    let curBoard = board.map((row) => [...row]);
    let count = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        // 현재 체스판 상태 확인용 시각화 코드
        // console.log(
        //   curBoard
        //     .map((e) => e.map((e) => (e === -1 ? "□" : "■")).join(" "))
        //     .join("\n") + "\n-----------------------------------------------"
        // );
        if (j === 0) {
          // 8*8 영역의 첫 번째 칸 확인
          if (i === 0) {
            if (curBoard[0][0] !== firstCell) {
              count++;
              curBoard[0][0] *= -1;
            }
          }
          // 각 행의 첫 번째 칸 확인: 위쪽 칸과 비교
          else {
            if (curBoard[i][j] === curBoard[i - 1][j]) {
              count++;
              curBoard[i][j] *= -1;
            }
          }
        }
        // 나머지 칸 확인: 왼쪽 칸과 비교
        else {
          if (curBoard[i][j] === curBoard[i][j - 1]) {
            count++;
            curBoard[i][j] *= -1;
          }
        }
      }
    }
    minCount = count < minCount ? count : minCount;
  });

  return minCount < min ? minCount : min;
}, Number.MAX_SAFE_INTEGER);

console.log(result);
