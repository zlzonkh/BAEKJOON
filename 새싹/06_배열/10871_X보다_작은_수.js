const problemNum = 10871;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = [];

const [N, X] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
for(let i = 0; i < N; i++){
    if(arr[i] < X) output.push(arr[i]);
}
console.log(output.join(' '));