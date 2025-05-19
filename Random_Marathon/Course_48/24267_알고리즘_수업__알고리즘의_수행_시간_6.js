const problemNum = 24267;
const n = Number(
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
output.push((BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6));
output.push(3);

console.log(output.join("\n"));
