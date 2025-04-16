const problemNum = 14681
const input = require('fs').readFileSync(process.platform === "linux" ? 0 : "./testcase/" + problemNum + ".txt").toString();
let [a, b] = input.trim().split('\n').map(Number);
if (a > 0 && b > 0) console.log(1);
else if (a < 0 && b > 0) console.log(2);
else if (a < 0 && b < 0) console.log(3);
else console.log(4);