const problemNum = 2739;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim();
let n = Number(input);
const output = [];

for(let i = 1; i < 10; i++){
    output.push(n + ' * ' + i + ' = ' + (n * i));
}

console.log(output.join('\n'));