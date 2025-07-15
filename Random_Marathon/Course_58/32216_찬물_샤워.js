const problemNum = 32216;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const [n, k, T] = input[0].split(" ").map(Number);
const d = input[1].split(" ").map(Number);

let t = T;
let output = 0;

d.forEach((e, i) => {
  if (t < k) t = t + d[i] + Math.abs(t - k);
  else if (t > k) t = t + d[i] - Math.abs(t - k);
  else t = t + d[i];

  output += Math.abs(k - t);
});

console.log(output);
