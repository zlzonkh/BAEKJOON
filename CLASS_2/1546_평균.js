const problemNum = 1546;
const [N, input] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = [];

let scores = input.split(' ').map(Number);

const M = Math.max(...scores);

let newAvg = scores.reduce((sum, e) => {
  return sum + (e / M) * 100;
}, 0) / Number(N);

console.log(newAvg);