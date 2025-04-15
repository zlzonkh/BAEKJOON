const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/10998.txt").toString();
let [a, b] = input.trim().split(' ').map(Number)

console.log(a * b)