const problemNum = 10950;
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt").toString().trim().split('\n');
let n = Number(input[0]);
let answer = '';

for(let i = 0; i < n; i++){
    let [a, b] = input[i + 1].split(' ').map(Number);
    answer += (a + b) + '\n';
}
console.log(answer);