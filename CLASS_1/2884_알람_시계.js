const problemNum = 2884;
let [H, M] = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split(' ')
    .map(Number);

if(M >= 45) M -= 45;
else{
    M = 60 - (45 - M);
    H -= 1;
    if(H < 0) H = 23;
}

console.log([H, M].join(' '));