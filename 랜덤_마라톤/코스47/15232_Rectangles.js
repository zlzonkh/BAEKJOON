const problemNum = 15232;
const [R, C] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number);
let output = [];

for(let i = 0; i < R; i++){
  output.push('*'.repeat(C));
}

console.log(output.join('\n'));
