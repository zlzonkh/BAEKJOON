const problemNum = 2675;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .slice(1);
let output = [];

input.forEach(e => {
    let [R, S] = e.split(' ');
    let result = '';
    S.split('').forEach(e => result += e.repeat(Number(R)));
    output.push(result);
})

console.log(output.join('\n'));