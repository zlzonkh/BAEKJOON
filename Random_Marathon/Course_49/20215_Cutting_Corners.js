const problemNum = 20215;
const [w, h] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(w + h - Math.sqrt(w ** 2 + h ** 2));
