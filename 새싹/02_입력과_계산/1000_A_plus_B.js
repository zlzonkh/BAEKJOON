const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/1000.txt").toString();
let [a, b] = input.trim().split(' ')

console.log(Number(a) + Number(b))