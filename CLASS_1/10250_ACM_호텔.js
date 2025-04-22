const problemNum = 10250;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n')
    .slice(1);
let output = [];

input.forEach(e => {
    const [H, _, N] = e.split(' ').map(Number);
    const room = Math.ceil((N / H));
    const floor = (N % H === 0) ? H : N % H;
    output.push(floor.toString() + room.toString().padStart(2, '0'));
})

console.log(output.join('\n'));