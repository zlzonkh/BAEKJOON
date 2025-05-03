const problemNum = 10828;
const inputs = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const output = [];
const stack = [];

function isEmpty(stack) {
  return stack.length === 0;
}

inputs.forEach((e, i) => {
  if (i === 0) return;
  let input = e.split(" ");
  switch (input[0]) {
    case "push":
      stack.push(Number(input[1]));
      break;

    case "pop":
      output.push(isEmpty(stack) ? -1 : stack.pop());
      break;

    case "size":
      output.push(stack.length);
      break;

    case "empty":
      output.push(isEmpty(stack) ? 1 : 0);
      break;

    case "top":
      output.push(isEmpty(stack) ? -1 : stack[stack.length - 1]);
      break;

    default:
      break;
  }
});

console.log(output.join("\n"));
