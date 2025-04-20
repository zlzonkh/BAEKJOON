const problemNum = 27866;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = [];

let inputString = input[0];
let target = Number(input[1]) - 1;

console.log(inputString.charAt(target));