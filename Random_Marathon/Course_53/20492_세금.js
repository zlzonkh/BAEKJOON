const problemNum = 20492;
const prise = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
    .split("\n")
);
const output = [];
output.push(prise * 0.78);
output.push(prise - prise * 0.2 * 0.22);

console.log(output.join("\n"));
