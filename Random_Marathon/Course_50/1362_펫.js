const problemNum = 1362;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));
const output = [];

let [o, w] = [0, 0];
let caseNum = 1;
let isDead = false;
input.forEach((line) => {
  switch (line[0]) {
    case "F":
      w += Number(line[1]);
      break;
    case "E":
      w -= Number(line[1]);
      if (w <= 0) isDead = true;
      break;
    case "#":
      if (isDead) output.push(`${caseNum++} RIP`);
      else if (o / 2 < w && w < o * 2) output.push(`${caseNum++} :-)`);
      else output.push(`${caseNum++} :-(`);
      break;
    case "0":
      break;
    default:
      if (!isNaN(Number(line[0]))) {
        isDead = false;
        [o, w] = [line[0], line[1]].map(Number);
      }
      break;
  }
});

console.log(output.join("\n"));
