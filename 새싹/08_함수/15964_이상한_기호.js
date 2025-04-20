const problemNum = 15964;
const [a, b] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split(' ')
    .map(Number);

console.log((a + b) * (a - b));