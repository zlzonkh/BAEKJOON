const problemNum = 1212;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim();
const output = input
  .split("")
  .map((e) => parseInt(e, 8).toString(2).padStart(3, "0"));
output[0] = input === "0" ? "0" : output[0].replace(/^0+/, "");
console.log(output.join(""));
