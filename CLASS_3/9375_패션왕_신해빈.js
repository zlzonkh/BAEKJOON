const problemNum = 9375;
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
const output = [];

input.forEach((e, i) => {
  if (!isNaN(Number(e))) {
    const categoryCount = new Map();
    for (let j = 1; j <= Number(e); j++) {
      let category = input[i + j].split(" ")[1];
      categoryCount.set(category, (categoryCount.get(category) || 0) + 1);
    }
    let result = 1;
    categoryCount.forEach((count) => (result *= count + 1));
    output.push(result - 1);
  }
});

console.log(output.join("\n"));
