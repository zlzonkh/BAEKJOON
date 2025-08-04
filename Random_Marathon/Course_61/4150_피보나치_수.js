const problemNum = 4150;
const input = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);
let [a, b] = [BigInt(1), BigInt(1)];
for (let i = 1; i < input; i++) [a, b] = [b, a + b];
console.log(a.toString());
