const problemNum = 23972;
const [K, N] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split(' ')
    .map(Number);
let output = 0;

if(N === 1) console.log(-1);
else {
  output = Math.ceil((K * N) / (N - 1));
  if((output - K) * N < output) output += 1;
  console.log(output);
};