const problemNum = 10872;
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt").toString();
let [a] = input.trim().split(' ').map(Number);

let factorial = 1
for(let i = 1; i < a + 1; i++){
    factorial *= i
}
console.log(factorial);