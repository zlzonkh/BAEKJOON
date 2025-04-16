const problemNum = 2420;
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt").toString();
let [a, b] = input.trim().split(' ').map(Number);

console.log(Math.abs(a - b));