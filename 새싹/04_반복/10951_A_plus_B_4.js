const problemNum = 10951;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = [];

input.forEach(e => {
    let [a, b] = e.split(' ').map(Number);
    output.push(a + b);
});

console.log(output.join('\n'));