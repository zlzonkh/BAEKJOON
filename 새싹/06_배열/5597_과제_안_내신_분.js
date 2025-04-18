const problemNum = 5597;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number);
const output = [];

const submitted_students = new Set(input);
for(let i = 1; i <= 30; i++){
    if(!submitted_students.has(i)) output.push(i);
}

console.log(output.join('\n'));