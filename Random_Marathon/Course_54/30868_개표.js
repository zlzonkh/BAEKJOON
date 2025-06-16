const problemNum = 30868;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);
const output = input.map((e) => {
  let str = "";
  str += "++++ ".repeat(Math.floor(e / 5));
  str += "|".repeat(e % 5);
  return str;
});

console.log(output.join("\n"));
