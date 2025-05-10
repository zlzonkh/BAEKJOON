const problemNum = 17219;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, _] = input[0].split(" ").map(Number);
const passwords = {};
input.slice(1, N + 1).forEach((e) => {
  const [site, password] = e.split(" ");
  passwords[site] = password;
});

const output = input.slice(N + 1).map((site) => passwords[site]);

console.log(output.join("\n"));
