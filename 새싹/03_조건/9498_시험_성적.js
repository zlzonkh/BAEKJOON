const problemNum = 9498
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt").toString();
let [a] = input.trim().split(' ').map(Number);

if(a >= 90) console.log('A');
else if(a >= 80) console.log('B');
else if(a >= 70) console.log('C');
else if(a >= 60) console.log('D');
else console.log('F');