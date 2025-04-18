const problemNum = 2738;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const matrixA = input.slice(1, N + 1).map(line => line.split(' ').map(Number));
const matrixB = input.slice(N + 1).map(line => line.split(' ').map(Number));

const result = matrixA.map((row, i) => 
    row.map((val, j) => val + matrixB[i][j]).join(' ')
);

console.log(result.join('\n'));
