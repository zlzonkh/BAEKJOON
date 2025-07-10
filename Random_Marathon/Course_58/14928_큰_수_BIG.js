const problemNum = 14928;
const input = BigInt(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);

console.log((input % BigInt(20000303)).toString());
