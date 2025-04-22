const problemNum = 8958;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .slice(1);
let output = [];

input.forEach((line) => {
    let score = 0;
    let row = 1;
    line.split('').forEach(e => {
        if(e === 'O') score += row++;
        else row = 1;
    });
    output.push(score);
})

console.log(output.join('\n'));
