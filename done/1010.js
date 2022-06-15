//#region CONFIG

let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

//#endregion

var A = lines.shift().split(" ");
var B = lines.shift().split(" ");

var X = (A[1]*A[2]+B[1]*B[2]).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${X}`);