const problemNum = 2753
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt").toString();
let [a] = input.trim().split(' ').map(Number);

if((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) console.log(1);
else console.log(0);