// replaceAll이라는 기능으로 간단하게 풀 수 있다

const problemNum = 14405;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("");
let output = "";
let checkNext = false;
const possibleSound = ["pi", "ka", "chu"];
let stack = [];
for (let i = 0; i < input.length; i++) {
  stack.push(input[i]);
  if (stack.length === 2) {
    if (stack.join("") === "pi" || stack.join("") === "ka") {
      stack = [];
    } else if (stack.join("") === "ch") {
      checkNext = true;
    } else {
      output = "NO";
      break;
    }
  } else if (checkNext) {
    if (input[i] === "u") {
      checkNext = false;
      stack = [];
    } else {
      output = "NO";
      break;
    }
  }
}

if (stack.length > 0) output = "NO";
else if (output !== "NO" && input.length > 0) output = "YES";

console.log(output);
