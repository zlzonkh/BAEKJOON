const problemNum = 13300;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const K = Number(input[0].split(" ")[1]);
const students = input.slice(1).map((e) => e.split(" ").map(Number));
const stutentsCount = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

students.forEach((e) => {
  stutentsCount[e[0]][e[1] - 1]++;
});

let output = 0;
stutentsCount.forEach((e) => {
  e.forEach((f) => {
    output += Math.ceil(f / K);
  });
});

console.log(output);
