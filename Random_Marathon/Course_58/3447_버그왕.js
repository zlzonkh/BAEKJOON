const problemNum = 3447;
let input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim();

while (input.indexOf("BUG") !== -1) {
  input = input.replaceAll("BUG", "");
}

console.log(input);
