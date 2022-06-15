//#region CONFIG

let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

//#endregion

var X = lines.shift().split(" ");
var A = (parseFloat(X[0]*X[2]/2)).toFixed(3);
var B = (parseFloat(X[2]*X[2]*3.14159)).toFixed(3);
var C = (parseFloat(X[0]*X[2]/2+X[1]*X[2]/2)).toFixed(3);
var D = (parseFloat(X[1]*X[1])).toFixed(3);
var E = (parseFloat(X[0]*X[1])).toFixed(3);

console.log(`TRIANGULO: ${A}`);
console.log(`CIRCULO: ${B}`);
console.log(`TRAPEZIO: ${C}`);
console.log(`QUADRADO: ${D}`);
console.log(`RETANGULO: ${E}`);