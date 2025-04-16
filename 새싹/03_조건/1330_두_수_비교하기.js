const problemNum = 1330
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt").toString();
let [a, b] = input.trim().split(' ').map(Number);

if(a > b) console.log('>');
else if (a < b) console.log('<');
else console.log('==');