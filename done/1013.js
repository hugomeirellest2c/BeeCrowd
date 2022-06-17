//#region CONFIG

let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

//#endregion

var L = lines.shift().split(" ");
var A = parseInt(L[0]);
var B = parseInt(L[1]);
var C = parseInt(L[2]);

var Y = parseInt((A+B+Math.abs(A-B))/2);
var X = parseInt((C+Y+Math.abs(C-Y))/2);

console.log(`${X} eh o maior`);