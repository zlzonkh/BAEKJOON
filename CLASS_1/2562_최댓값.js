const problemNum = 2562;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let max = 0;
let maxIndex = 0;
input.map((e, i) => {
    if(e > max){
        max = e;
        maxIndex = i + 1;
    } 
});

console.log(max + '\n' + maxIndex);