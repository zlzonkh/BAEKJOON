const problemNum = 2439;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim();
let output = [];

let N = Number(input);
for(let i = 1; i <= N; i++)
    output.push(' '.repeat(N - i) + '*'.repeat(i));

console.log(output.join('\n'));