const problemNum = 2475;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split(' ')
    .map(Number);

let sumOfSquare = 0;
input.forEach((e) => sumOfSquare += e * e);

console.log(sumOfSquare % 10);