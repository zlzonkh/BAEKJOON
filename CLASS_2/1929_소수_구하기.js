const problemNum = 1929;
const [M, N] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i ** 2 <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const array = Array.from({ length: N - M + 1 }, (_, i) => M + i);
const output = array.filter((e) => isPrime(e));

console.log(output.join("\n"));
