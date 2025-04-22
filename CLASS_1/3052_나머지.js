const problemNum = 3052;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number);
const remainder = new Set();

input.forEach(e => remainder.add(e % 42));

console.log(remainder.size);