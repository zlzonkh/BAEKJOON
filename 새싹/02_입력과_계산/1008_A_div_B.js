const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/1008.txt").toString();
let [a, b] = input.trim().split(' ').map(Number);

console.log(a / b);