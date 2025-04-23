const problemNum = 2292;
const N = Number(
    require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
);
const layerFloorTable = [0, 1, 2];

let layerFloor = function(n){
    if(n >= layerFloorTable.length){
        layerFloorTable.push(layerFloorTable[n - 1] + 6 * (n - 2));
    }
    return layerFloorTable[n];
}

let layer = 1;
while(layerFloor(layer) <= N){
    layer++;
}

console.log(layer - 1);