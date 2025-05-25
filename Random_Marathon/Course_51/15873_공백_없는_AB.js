const problemNum = 15873;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("")
  .map(Number);

let output = 0;
switch (input.length) {
  case 2:
    output = input[0] + input[1];
    break;
  case 3:
    output = 10 + (input[1] === 0 ? input[2] : input[0]);
    break;
  case 4:
    output = 20;
}

console.log(output);
