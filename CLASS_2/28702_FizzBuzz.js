const problemNum = 28702;
const prevStr = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
let output = "";
prevStr.forEach((e, i) => {
  if (e !== "Fizz" && e !== "Buzz" && e !== "FizzBuzz") {
    let next = Number(e) + (3 - i);
    if (next % 15 === 0) output = "FizzBuzz";
    else if (next % 3 === 0) output = "Fizz";
    else if (next % 5 === 0) output = "Buzz";
    else output = next.toString();
  }
});

console.log(output);
