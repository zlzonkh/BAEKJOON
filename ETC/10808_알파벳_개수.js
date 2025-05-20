const problemNum = 10808;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("");
const count = Array.from({ length: 26 }, () => 0);
input.forEach((e) => {
  count[e.charCodeAt(0) - "a".charCodeAt(0)]++;
});

console.log(count.join(" "));
