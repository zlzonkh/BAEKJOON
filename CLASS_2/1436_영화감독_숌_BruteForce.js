const problemNum = 1436;
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
let count = 0;
let curNum = 665;
while (count < N) {
  curNum++;
  if (curNum.toString().search("666") >= 0) count++;
}
console.log(curNum);
