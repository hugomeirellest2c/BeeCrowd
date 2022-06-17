//#region CONFIG

let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

//#endregion

var L1 = lines.shift().split(" ");
var L2 = lines.shift().split(" ");

var X = parseFloat(Math.sqrt(((L2[0]-L1[0])*(L2[0]-L1[0]))+(L2[1]-L1[1])*(L2[1]-L1[1]))).toFixed(4);

console.log(`${X}`);