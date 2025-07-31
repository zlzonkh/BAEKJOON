const problemNum = 1384;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const output = [];

let cursor = 0;
let groupNum = 1;
while (input[cursor] !== "0") {
  const groupSize = Number(input[cursor++]);
  const names = input
    .slice(cursor, cursor + groupSize)
    .map((e) => e.split(" ")[0]);
  let nasty = false;
  output.push("Group " + groupNum++);
  for (let i = 0; i < groupSize; i++) {
    input[cursor++]
      .split(" ")
      .slice(1)
      .forEach((e, j) => {
        if (e === "N") {
          output.push(
            names[(groupSize + i - j - 1) % groupSize] +
              " was nasty about " +
              names[i]
          );
          nasty = true;
        }
      });
  }
  if (!nasty) output.push("Nobody was nasty");
  output.push("");
}

console.log(output.join("\n"));
