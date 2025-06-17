const problemNum = 11094;
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
const output = [];
const checkStr = "Simon says".split("");

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split("");
  let escape = false;
  if (arr.length < checkStr.length) continue;
  for (let j = 0; j < checkStr.length; j++) {
    if (arr[j] !== checkStr[j]) {
      escape = true;
      continue;
    }
  }
  if (!escape) output.push(input[i].slice(checkStr.length));
}

console.log(output.join("\n"));
