const problemNum = 1264;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
const output = input.slice(0, -1).map((str) => {
  return str.split("").reduce((count, char) => {
    if (vowels.has(char)) return count + 1;
    else return count;
  }, 0);
});

console.log(output.join("\n"));
