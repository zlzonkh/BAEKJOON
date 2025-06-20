const problemNum = 17362;
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
const cycle = [1, 2, 3, 4, 5, 4, 3, 2];

const output = cycle[input % 8 ? (input % 8) - 1 : 7];

console.log(output);
