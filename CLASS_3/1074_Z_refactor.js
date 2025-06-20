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

function z(size, r, c) {
  if (size === 0) return 0;

  const half = 2 ** (size - 1);
  const quadrantSize = half * half;

  if (r < half && c < half) return z(size - 1, r, c);
  else if (r < half && c >= half)
    return quadrantSize + z(size - 1, r, c - half);
  else if (r >= half && c < half)
    return 2 * quadrantSize + z(size - 1, r - half, c);
  else return 3 * quadrantSize + z(size - 1, r - half, c - half);
}

console.log(z(N, r, c));
