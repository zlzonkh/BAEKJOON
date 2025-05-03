const problemNum = 9012;
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
const output = input.map((str) => {
  let isVPS = true;
  let stack = [];
  for (const char of str.split("")) {
    if (char === "(") stack.push("(");
    else if (char === ")") {
      if (stack.length === 0) {
        isVPS = false;
        break;
      }
      stack.pop();
    }
  }
  if (stack.length > 0) isVPS = false;
  return isVPS ? "YES" : "NO";
});

console.log(output.join("\n"));
