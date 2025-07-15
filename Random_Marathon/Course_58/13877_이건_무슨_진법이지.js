const problemNum = 13877;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" "));
const output = input.map((e) => {
  const line = [Number(e[0])];
  line.push(
    e[1].indexOf("8") !== -1 || e[1].indexOf("9") !== -1
      ? 0
      : Number.parseInt(e[1], 8)
  );
  line.push(Number(e[1]));
  line.push(Number.parseInt(e[1], 16));
  return line.join(" ");
});

console.log(output.join("\n"));
