const problemNum = 8393;
const input = Number(
    require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
);
let output = 0;

for(let i = 1; i <= input; i++){
    output += i;
}

console.log(output);
