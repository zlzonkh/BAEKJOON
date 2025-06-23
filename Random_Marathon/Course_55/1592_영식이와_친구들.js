const problemNum = 1592;
const [N, M, L] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const receiveCount = Array(N).fill(0);
let totalCount = 0;
let receive = 0;
while (true) {
  receiveCount[receive]++;
  if (receiveCount[receive] === M) break;
  totalCount++;

  if (receiveCount[receive] % 2) {
    receive = (receive + L) % N;
  } else {
    receive = receive - L < 0 ? N + (receive - L) : receive - L;
  }
}

console.log(totalCount);
