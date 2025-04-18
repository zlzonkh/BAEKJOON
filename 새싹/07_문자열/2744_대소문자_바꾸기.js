const problemNum = 2744;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('');
const output = []
input.map(e => {
    if(e === e.toUpperCase()) e = e.toLowerCase();
    else e = e.toUpperCase();
    output.push(e);
})

console.log(output.join(''));