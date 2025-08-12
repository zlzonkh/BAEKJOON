const problemNum = 16172;
const [S, K] = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const filterd = S.replaceAll(/[0-9]/g, "");
const output = filterd.indexOf(K) === -1 ? 0 : 1;

console.log(output);
