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
var B = lines.shift();

var X = (A*B/12).toFixed(3);

console.log(`${X}`);