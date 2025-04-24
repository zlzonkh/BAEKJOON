const problemNum = 2798;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\n');

const [_, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);

let curMax = 0;
for(let i = 0; i < cards.length; i++){
    for(let j = i + 1; j < cards.length; j++){
        for(let k = j + 1; k < cards.length; k++){
            if(cards[i] + cards[j] + cards[k] <= M && curMax < cards[i] + cards[j] + cards[k]){
                curMax = cards[i] + cards[j] + cards[k];
            }
        }
    }
}

console.log(curMax);