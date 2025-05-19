const problemNum = 28235;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim();
let output = "";

switch (input) {
  case "SONGDO":
    output = "HIGHSCHOOL";
    break;
  case "CODE":
    output = "MASTER";
    break;
  case "2023":
    output = "0611";
    break;
  case "ALGORITHM":
    output = "CONTEST";
    break;
  default:
    break;
}

console.log(output);
