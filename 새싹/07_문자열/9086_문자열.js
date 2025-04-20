const problemNum = 9086;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = [];

let N = Number(input[0]);
for(let i = 0; i < N; i++){
    output.push(input[i + 1][0] + input[i + 1][input[i + 1].length - 1]);
}

console.log(output.join('\n'));