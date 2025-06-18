const problemNum = 28701;
const N = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);
const output = [];
const arr = Array.from({ length: N }, (e, i) => i + 1);
const sum = arr.reduce((sum, e) => sum + e);
output.push(sum);
output.push(sum ** 2);
output.push(arr.reduce((sum, e) => sum + e ** 3));

console.log(output.join("\n"));
