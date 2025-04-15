const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/10869.txt").toString();
let [a, b] = input.trim().split(' ').map(Number);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);