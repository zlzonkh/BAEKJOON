const problemNum = 30802;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = [];

let N = Number(input[0]);
let sizeList = input[1].split(' ').map(Number);
let [T, P] = input[2].split(' ').map(Number);

output.push(sizeList.reduce((sum, e) => {
    return sum + Math.ceil(e / T);
}, 0))
output.push(Math.floor(N / P) + ' ' + N % P);

console.log(output.join('\n'));