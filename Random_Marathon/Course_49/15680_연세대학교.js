const problemNum = 15680;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim();
let output = input === "0" ? "YONSEI" : "Leading the Way to the Future";

console.log(output);
