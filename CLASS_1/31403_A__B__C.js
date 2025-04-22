const problemNum = 31403;
const [A, B, C] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = [];

output.push(Number(A) + Number(B) - Number(C));
output.push(Number(A + B) - Number(C));

console.log(output.join('\n'));