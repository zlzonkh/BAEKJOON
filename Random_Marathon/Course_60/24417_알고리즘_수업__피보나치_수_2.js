const problemNum = 24417;
const input = Number(
  require("fs")
    .readFileSync(
      process.platform === "linux"
        ? "/dev/stdin"
        : "./testcase/" + problemNum + ".txt"
    )
    .toString()
    .trim()
);
const output = [];

let [a, b] = [1, 1];
for (let i = 2; i < input; i++) {
  let tmp = b;
  b = (a + b) % 1000000007;
  a = tmp;
}
output.push(b);
output.push(input - 2);

console.log(output.join(" "));
