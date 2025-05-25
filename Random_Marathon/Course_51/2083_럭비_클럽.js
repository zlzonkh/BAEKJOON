const problemNum = 2083;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
input.pop();

const output = input.map((e) => {
  const line = e.split(" ");
  let str = line[0];
  str += " ";
  str += Number(line[1]) > 17 || Number(line[2]) >= 80 ? "Senior" : "Junior";
  return str;
});

console.log(output.join("\n"));
