const problemNum = 24263;
const n = Number(require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
);
let output = [];

output.push(n);
output.push(1);

console.log(output.join('\n'));
