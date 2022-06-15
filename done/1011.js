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
var X = ((4/3) * 3.14159 * A * A * A).toFixed(3);

console.log(`VOLUME = ${X}`);