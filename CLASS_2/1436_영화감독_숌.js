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
let curNum = 666;
let isInterrupted = false;

for (let i = 0; i < N; i++) {
  const curNumStr = curNum.toString();
  const includeDigit = curNumStr.length - curNumStr.search("666") - 3;
  const prevNum = curNum;

  if (includeDigit > 0) {
    curNum = Number(
      curNumStr
        .slice(0, curNumStr.length - includeDigit)
        .padEnd(curNumStr.length, "0")
    );
    for (let j = 0; j < 10 ** includeDigit; j++) {
      i++;
      if (i >= N) {
        isInterrupted = true;
        console.log(curNum);
        break;
      }
      curNum += 1;
    }
    curNum = prevNum + 2000;
  } else curNum = prevNum + 1000;
}

if (!isInterrupted) console.log(curNum - 1000);
