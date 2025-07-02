const problemNum = 5430;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const output = [];

const T = Number(input[0]);
for (let i = 1; i <= 3 * T; i += 3) {
  const cmd = input[i].split("");
  const arr =
    input[i + 1] !== "0"
      ? input[i + 2].replace("[", "").replace("]", "").split(",").map(Number)
      : [];

  let isReverced = false;
  let head = 0;
  let tail = arr.length - 1;
  let error = false;
  for (let j = 0; j < cmd.length; j++) {
    if (cmd[j] === "R") isReverced = !isReverced;
    else {
      if (head > tail) {
        error = true;
        break;
      }
      if (!isReverced) head++;
      else tail--;
    }
  }

  const resultArr = arr.slice(head, tail + 1);
  if (isReverced) resultArr.reverse();

  if (error) output.push("error");
  else output.push("[" + resultArr.join(",") + "]");
}

console.log(output.join("\n"));
