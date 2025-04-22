const problemNum = 1152;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split(' ');

if(input[0] === '') console.log(0);
else console.log(input.length);