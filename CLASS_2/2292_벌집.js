const problemNum = 2292;
const N = Number(
    require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
);

let layer = 1;
let layerFloor = 1;

while(N >= layerFloor){
    if(layer === 1) layerFloor++
    else layerFloor = (layerFloor + (6 * (layer - 1)));

    layer++;
}

console.log(layer - 1);