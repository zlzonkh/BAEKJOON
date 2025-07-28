const problemNum = 10174;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .replaceAll(" ", "...")
  .trim()
  .split("\n")
  .slice(1);
const output = input.map((line) => {
  const arr = line.split("").map((e) => e.toLowerCase());
  for (let i = 0; i <= arr.length / 2; i++)
    if (arr[i] !== arr[arr.length - i - 1]) return "No";
  return "Yes";
});

console.log(output.join("\n"));
