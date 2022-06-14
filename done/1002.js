let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

let A = parseFloat(lines.shift());

A = (A*A*3.14159).toFixed(4);

console.log(`A=${A}`);