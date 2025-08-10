const problemNum = 6996;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

function compare(A, B) {
  const ACount = new Array(26).fill(0);
  const BCount = new Array(26).fill(0);

  A.split("").forEach((e) => ACount[e.charCodeAt(0) - "a".charCodeAt(0)]++);
  B.split("").forEach((e) => BCount[e.charCodeAt(0) - "a".charCodeAt(0)]++);

  for (let j = 0; j < ACount.length; j++) {
    if (ACount[j] !== BCount[j]) return false;
  }
  return true;
}

const N = Number(input[0]);
const cases = input.slice(1);
const output = [];
for (let i = 0; i < N; i++) {
  const [A, B] = cases[i].split(" ");
  let str =
    A + " & " + B + " are " + (compare(A, B) ? "" : "NOT ") + "anagrams.";
  output.push(str);
}

console.log(output.join("\n"));
