const problemNum = 8370;
const [n1, k1, n2, k2] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split(' ')
    .map(Number);
let output = 0;

output = (n1 * k1) + (n2 * k2);

console.log(output);