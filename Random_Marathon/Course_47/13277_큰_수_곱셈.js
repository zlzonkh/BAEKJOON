const problemNum = 13277;
const [A, B] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split(' ')
    .map(BigInt);

console.log((A * B).toString());