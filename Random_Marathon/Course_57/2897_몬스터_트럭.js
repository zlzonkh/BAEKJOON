const problemNum = 2897;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
const field = input.slice(1).map((e) => e.split(""));
const output = [0, 0, 0, 0, 0];
const dx = [0, 0, 1, 1];
const dy = [0, 1, 0, 1];

for (let i = 0; i < R - 1; i++) {
  for (let j = 0; j < C - 1; j++) {
    const counts = [0, 0, 0];
    for (let k = 0; k < 4; k++) {
      switch (field[i + dx[k]][j + dy[k]]) {
        case "#":
          counts[0]++;
          break;
        case "X":
          counts[1]++;
          break;
        case ".":
          counts[2]++;
          break;
      }
    }
    if (!(counts[0] >= 1)) output[counts[1]]++;
  }
}

console.log(output.join("\n"));
