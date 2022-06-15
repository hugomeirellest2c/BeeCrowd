//#region CONFIG

let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

//#endregion

var A = lines.shift();
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var X = (B+(C*0.15)).toFixed(2);

console.log(`TOTAL = R$ ${X}`);