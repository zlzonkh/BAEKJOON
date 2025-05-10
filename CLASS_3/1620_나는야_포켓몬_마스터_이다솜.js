const problemNum = 1620;
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\n");
const output = [];

const [N, M] = input[0].split(" ").map(Number);
const pokemons = [];
const pokemonNumbers = {};

for (let i = 1; i <= N; i++) {
  pokemons.push(input[i]);
  pokemonNumbers[input[i]] = i;
}

for (let i = N + 1; i <= N + M; i++) {
  if (isNaN(Number(input[i]))) output.push(pokemonNumbers[input[i]]);
  else output.push(pokemons[Number(input[i]) - 1]);
}

console.log(output.join("\n"));
