const problemNum = 15829;
const [_, input] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
const [r, M] = [31, 1234567891];
let hashValue = 0;

const getRemainderOfPow = function(n, exponent, divider){
    if(exponent === 0) return 1;
    else if(exponent === 1) return n % divider;
    else {
        return (getRemainderOfPow(n, exponent - 1, divider) * (n % divider)) % divider;
    }
}

input.split('').forEach((e, i) => {
    let charNum = e.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    hashValue += ((charNum % M) * getRemainderOfPow(r, i, M)) % M;
});

hashValue %= M;

console.log(hashValue);