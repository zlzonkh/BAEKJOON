const problemNum = 5046;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

class hotel {
  constructor(p, a) {
    this.p = p;
    this.a = a;
  }
}

const [N, B, H, W] = input[0].split(" ").map(Number);
const hotels = [];
for (let i = 1; i <= H; i++)
  hotels.push(
    new hotel(Number(input[i * 2 - 1]), input[i * 2].split(" ").map(Number))
  );

let cost = B + 1;

for (let hotel of hotels) {
  for (let e of hotel.a) {
    if (e >= N && hotel.p * N <= B) {
      cost = Math.min(cost, hotel.p * N);
    }
  }
}

console.log(cost > B ? "stay home" : cost);
