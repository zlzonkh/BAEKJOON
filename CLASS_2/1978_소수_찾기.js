const problemNum = 1978;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
let output = 0;

function isPrime(n){
    if (n === 1) return false;
    for(let i = 2; i ** 2 <= n; i++){
        if(n % i === 0) return false;
    }
    return true;
}

let numList = input[1].split(' ').map(Number);
numList.forEach(e => { if(isPrime(e)) output++ });

console.log(output);