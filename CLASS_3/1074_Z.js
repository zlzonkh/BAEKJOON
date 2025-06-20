const problemNum = 1074;
const [N, r, c] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let min = 0;
let max = 2 ** (N * 2) - 1;
let size = N;

function find(min, max, size, minX, minY) {
  if (size === 0) return min;

  let isRight = minX + 2 ** size / 2 < c + 1;
  let isDown = minY + 2 ** size / 2 < r + 1;
  let quarterSize = 2 ** (2 * size - 2);

  if (!isRight && !isDown) {
    return find(min, min + quarterSize - 1, size - 1, minX, minY);
  } else if (isRight && !isDown) {
    return find(
      min + quarterSize,
      min + 2 * quarterSize - 1,
      size - 1,
      minX + 2 ** size / 2,
      minY
    );
  } else if (!isRight && isDown) {
    return find(
      min + 2 * quarterSize,
      min + 3 * quarterSize - 1,
      size - 1,
      minX,
      minY + 2 ** size / 2
    );
  } else {
    return find(
      min + 3 * quarterSize,
      max,
      size - 1,
      minX + 2 ** size / 2,
      minY + 2 ** size / 2
    );
  }
}
console.log(find(min, max, size, 0, 0));
