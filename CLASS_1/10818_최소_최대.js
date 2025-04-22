const problemNum = 10818;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');

const arr = input[1].split(' ').map(Number);
let [max, min] = [-1000001, 1000001];
arr.map(e => {
    if(e > max) max = e;
    if(e < min) min = e;
})

console.log(min + ' ' + max);