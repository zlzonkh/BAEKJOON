const problemNum = 10809;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim();
let output = new Array(26).fill(-1);

input.split('').forEach((char, i) => {
    if(output[char.charCodeAt(0) - 'a'.charCodeAt(0)] === -1) 
        output[char.charCodeAt(0) - 'a'.charCodeAt(0)] = i;
});

console.log(output.join(' '));