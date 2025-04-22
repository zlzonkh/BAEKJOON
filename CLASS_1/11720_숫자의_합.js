const problemNum = 11720;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
let output = 0;

input[1].split('').map(e => output += Number(e));

console.log(output);