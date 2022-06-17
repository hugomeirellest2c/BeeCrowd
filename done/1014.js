//#region CONFIG

let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

//#endregion

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var X = (A/B).toFixed(3);

console.log(`${X} km/l`);