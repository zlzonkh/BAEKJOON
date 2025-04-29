const problemNum = 1181;
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

const arr = [...new Set(input)];

arr.sort((a, b) => {
  if (a.length === b.length) return a.localeCompare(b);
  else return a.length - b.length;
});

console.log(arr.join("\n"));
