// minX, minY, maxX, maxY를 처음부터 BigInt로 쓰지 않고, 넓이와 높이만 BigInt로 사용하는게 더 나을듯

const problemNum = 29332;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1);

let [minX, minY, maxX, maxY] = [
  -100000000001, -100000000001, 100000000001, 100000000001,
].map(BigInt);
input.forEach((e) => {
  const line = e.split(" ");
  const [x, y] = line.slice(0, 2).map(BigInt);
  const d = line[2];

  switch (d) {
    case "L":
      maxX = x < maxX ? x : maxX;
      break;
    case "R":
      minX = x > minX ? x : minX;
      break;
    case "U":
      minY = y > minY ? y : minY;
      break;
    case "D":
      maxY = y < maxY ? y : maxY;
      break;
  }
});
let output = "";
if (
  minX === BigInt(-100000000001) ||
  maxX === BigInt(100000000001) ||
  minY === BigInt(-100000000001) ||
  maxY === BigInt(100000000001)
)
  output = "Infinity";
else
  output = ((maxX - minX - BigInt(1)) * (maxY - minY - BigInt(1))).toString();
console.log(output);
