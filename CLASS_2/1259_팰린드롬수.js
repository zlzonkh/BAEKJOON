const problemNum = 1259;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .slice(0, -1);
let output = [];

input.forEach(line => {
    let isPalindrome = true;
    for(let i = 0; i < line.length / 2; i++){
        if(line[i] !== line[line.length - (i + 1)]) {
            isPalindrome = false;
            break;
        };
    }
    output.push(isPalindrome ? 'yes' : 'no');
})

console.log(output.join('\n'));