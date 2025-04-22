const problemNum = 2920;
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim();

switch(input){
    case '1 2 3 4 5 6 7 8':
        console.log('ascending');
        break;
    case '8 7 6 5 4 3 2 1':
        console.log('descending');
        break;
    default:
        console.log('mixed');
}
