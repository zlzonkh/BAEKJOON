const problemNum = 2738;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
const output = [];

const matrixSize = input[0].split(' ').map(Number);
for(let i = 0; i < matrixSize[0]; i++){
    const arrA = input[i + 1].split(' ').map(Number);
    const arrB = input[i + matrixSize[0] + 1].split(' ').map(Number);
    let outputLine = []
    for(let j = 0; j < matrixSize[1]; j++){
        outputLine.push(arrA[j] + arrB[j]);
    }
    output.push(outputLine.join(' '));
}

console.log(output.join('\n'));
