const problemNum = 2741;
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt").toString();
let [a] = input.trim().split(' ').map(Number);

let output = '';
for(let i = 0; i < a; i++) output += ((i + 1) + '\n');
console.log(output);