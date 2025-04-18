const problemNum = 10807;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = 0;

const N = Number(input[0]);
const v = Number(input[2]);
const arr = input[1].split(' ').map(Number);
for(let i = 0; i < N; i++){
    if(arr[i] == v) output += 1;
}
console.log(output);