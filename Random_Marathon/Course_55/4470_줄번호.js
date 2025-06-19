const problemNum = 4470;
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
const output = input.map((e, i) => {
    return i + 1 + ". " + e;
});

console.log(output.join("\n"));
