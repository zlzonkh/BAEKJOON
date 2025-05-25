const problemNum = 2490;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));
const output = input.map((e) => {
  let bae = 0;
  e.forEach((f) => {
    if (f === "0") bae++;
  });
  switch (bae) {
    case 0:
      return "E";
    case 1:
      return "A";
    case 2:
      return "B";
    case 3:
      return "C";
    case 4:
      return "D";
  }
});

console.log(output.join("\n"));
