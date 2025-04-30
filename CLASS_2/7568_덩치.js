const problemNum = 7568;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" ").map(Number));
const output = [];

input.forEach((curMan) => {
  let grade = 1;
  input.forEach((compareMan) => {
    if (curMan[0] < compareMan[0] && curMan[1] < compareMan[1]) {
      grade++;
    }
  });
  output.push(grade);
});

console.log(output.join(" "));
