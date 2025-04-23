const problemNum = 4153;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .slice(0, -1);
let output = [];

input.forEach(e => {
    let [A, B, C] = e.split(' ').map(e => Number(e) ** 2);
    if(A + B === C || A + C === B || B + C === A) output.push('right');
    else output.push('wrong');
})

console.log(output.join('\n'));
