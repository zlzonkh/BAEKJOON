const problemNum = 15829;
const [_, input] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');
const [r, M] = [31, 1234567891];
let hashValue = 0;

// getRemainderOfPow의 시간복잡도를 O(nlogn)으로 줄여보려고 시도했지만
// 부분 정답의 최댓값인 1234567890끼리 곱하면 2^31보다 커지기 때문에
// BigInt를 쓰지 않으면 정확성이 깨져버린다 ㄱ-
const getRemainderOfPow = function(n, exponent, divider){
    if(exponent === 0) return 1;
    const half = getRemainderOfPow(n, Math.floor(exponent / 2), divider) % divider;
    const result = (half * half) % divider;
    return (exponent % 2 === 0) ? result : (result * (n % divider) % divider);
}

input.split('').forEach((e, i) => {
    let charNum = e.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    hashValue += ((charNum % M) * getRemainderOfPow(r, i, M)) % M;
});

hashValue %= M;

console.log(hashValue);