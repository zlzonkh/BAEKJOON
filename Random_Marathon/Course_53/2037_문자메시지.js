const problemNum = 2037;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const [p, w] = input[0].split(" ").map(Number);
const str = input[1];

const pressCount = [
  1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4,
];

const btn = [
  2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9,
];

let prevBtn = 0;
let curBtn = 0;
let t = 0;

str.split("").forEach((e) => {
  if (e === " ") {
    t += p;
    curBtn = 1;
  } else {
    t += pressCount[e.charCodeAt(0) - "A".charCodeAt(0)] * p;
    curBtn = btn[e.charCodeAt(0) - "A".charCodeAt(0)];
  }

  if (curBtn !== 1 && curBtn === prevBtn) t += w;
  prevBtn = curBtn;
});

console.log(t);
