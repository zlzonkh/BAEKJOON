const problemNum = 30501;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1);
let output = "";

for (let name of input) {
  if (name.split("").indexOf("S") >= 0) {
    output = name;
    break;
  }
}
console.log(output);
