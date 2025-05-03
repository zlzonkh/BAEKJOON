const problemNum = 4949;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const output = input.slice(0, input.length - 1).map((str) => {
  const bracketsStack = [];
  let isBalanced = true;
  // 조기 탈출이 가능한 for-of문으로 최적화 가능
  str.split("").forEach((char) => {
    switch (char) {
      case "(":
        bracketsStack.push("(");
        break;
      case ")":
        if (bracketsStack.pop() !== "(") isBalanced = false;
        break;
      case "[":
        bracketsStack.push("[");
        break;
      case "]":
        if (bracketsStack.pop() !== "[") isBalanced = false;
        break;
      default:
        break;
    }
  });
  return bracketsStack.length === 0 && isBalanced ? "yes" : "no";
});

console.log(output.join("\n"));
