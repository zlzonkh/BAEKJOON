const problemNum = 3135;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const [A, B] = input[0].split(" ").map(Number);
const bookmarks = [A];
input.slice(2).forEach((e) => bookmarks.push(Number(e)));
const counts = bookmarks.map((e, i) => Math.abs(e - B) + (i === 0 ? 0 : 1));
const output = Math.min(...counts);

console.log(output);
