const problemNum = 3699;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const T = Number(input[0]);
const output = [];
let cursor = 1;
for (let testCase = 0; testCase < T; testCase++) {
  const [h, l] = input[cursor].split(" ").map(Number);
  const cars = new Array(h * l).fill(null);
  let time = 0;
  let pos = Array(h).fill(0);
  for (let i = 0; i < h; i++) {
    input[cursor + i + 1]
      .split(" ")
      .map(Number)
      .forEach((e, j) => {
        if (e !== -1) cars[e] = [i, j];
      });
  }
  cars
    .filter((e) => e !== null)
    .forEach((e) => {
      time += Math.min(Math.abs(pos[e[0]] - e[1]), l - e[1] + pos[e[0]]) * 5;
      pos[e[0]] = e[1];
      time += 10 * e[0] * 2;
    });
  cursor += h + 1;
  output.push(time);
}

console.log(output.join("\n"));
