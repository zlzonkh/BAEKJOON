const problemNum = 5717;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = [];
let i = 0;
while(true){
    let [a, b] = input[i].split(' ').map(Number);
    if((a === 0) && (b === 0)) break;
    output.push(a + b);
    i++;
}
console.log(output.join('\n'));