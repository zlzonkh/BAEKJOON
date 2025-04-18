const problemNum = 15552;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = [];

const n = Number(input[0]);
for(let i = 0; i < n; i++){
    let [a, b] = input[i + 1].split(' ').map(Number);
    output.push(a + b);
}

console.log(output.join('\n'));