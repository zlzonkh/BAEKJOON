const problemNum = 1541;
const input =
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim() + "+";
let output = 0;
let minus = false;
let curNumStr = "";
input.split("").forEach((char) => {
  if (char === "+" || char === "-") {
    if (minus) output -= Number(curNumStr);
    else {
      output += Number(curNumStr);
      if (char === "-") minus = true;
    }
    curNumStr = "";
  } else {
    curNumStr += char;
  }
});

console.log(output);
