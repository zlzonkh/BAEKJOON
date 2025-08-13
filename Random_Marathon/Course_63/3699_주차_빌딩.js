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
  let time = 0;
  for (let i = 0; i < h; i++) {
    let pos = 0;
    let floor = input[cursor + i + 1].split(" ").map(Number);
    let cars = floor.filter((e) => e !== -1).sort((a, b) => a - b);
    time += 10 * 2 * i * cars.length;
    for (let e of cars) {
      const carPos = floor.indexOf(e);
      time += Math.min(Math.abs(pos - carPos), l - Math.abs(pos - carPos)) * 5;
      pos = carPos;
    }
  }
  cursor += h + 1;
  output.push(time);
}

console.log(output.join("\n"));
