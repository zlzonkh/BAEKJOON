const problemNum = 14563;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);
const output = input.map((e) => {
  const dividers = [];
  for (let i = 1; i <= e / 2; i++) {
    if (e % i === 0) dividers.push(i);
  }
  const dividersSum = dividers.reduce((sum, e) => sum + e, 0);
  if (dividersSum === e) return "Perfect";
  else if (dividersSum > e) return "Abundant";
  else return "Deficient";
});

console.log(output.join("\n"));
