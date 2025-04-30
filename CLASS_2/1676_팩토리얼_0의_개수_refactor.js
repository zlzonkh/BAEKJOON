const problemNum = 1676;
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
let output = 0;
let divisior = 5;

while (N >= divisior) {
  output += Math.floor(N / divisior);
  divisior *= 5;
}

console.log(output);
