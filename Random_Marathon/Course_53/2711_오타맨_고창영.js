const problemNum = 2711;
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
const output = input.map((e) => {
  const idx = Number(e.split(" ")[0]);
  let str = e.split(" ")[1];
  return str.slice(0, idx - 1) + str.slice(idx, str.length + 1);
});

console.log(output.join("\n"));
