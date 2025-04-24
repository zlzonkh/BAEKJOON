const problemNum = 25372;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .slice(1);
const output = [];

input.forEach(e => {
    if(e.length >= 6 && e.length <= 9) output.push('yes');
    else output.push('no');
})

console.log(output.join('\n'));