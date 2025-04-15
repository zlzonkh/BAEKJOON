const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/11382.txt").toString();
let [a, b, c] = input.trim().split(' ').map(Number);

console.log(a + b + c);