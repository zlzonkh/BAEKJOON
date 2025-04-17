const problemNum = 2438;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim();
let n = Number(input);
const output = [];

for(let i = 1; i <= n; i++){
    let line = '';
    for(let j = 0; j < i; j++){
        line += '*';
    }
    output.push(line);
}

console.log(output.join('\n'));