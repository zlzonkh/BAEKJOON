const problemNum = 2966;
const correctAnswer = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n")[1];
const output = [];

const answers = [
  ["A", "B", "C"],
  ["B", "A", "B", "C"],
  ["C", "C", "A", "A", "B", "B"],
];

const ids = ["Adrian", "Bruno", "Goran"];

let scores = [0, 0, 0];
let maxScore = 0;

correctAnswer.split("").forEach((correct, i) => {
  answers.forEach((answer, j) => {
    if (correct === answer[i % answer.length]) scores[j]++;
  });
});

maxScore = Math.max(...scores);
output.push(maxScore);

scores.forEach((e, i) => {
  if (maxScore === e) output.push(ids[i]);
});

console.log(output.join("\n"));
