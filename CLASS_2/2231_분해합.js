const problemNum = 2231;
const N = Number(
    require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
);

let output = 0;

function getDigitSum(n){
    let result = n;
    n.toString().split('').forEach(e => result += Number(e));
    return result
}

for(let i = 1; i < N; i++) {
    if(getDigitSum(i) === N) {
        output = i;
        break;
    }
};

console.log(output);