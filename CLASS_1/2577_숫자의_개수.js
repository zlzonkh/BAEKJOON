const problemNum = 2577;
const [A, B, C] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number);
    
const numOfTimes = Array(10).fill(0);
const mul = A * B * C;
mul.toString().split('').map(Number).forEach(e => numOfTimes[e] += 1);

console.log(numOfTimes.join('\n'));