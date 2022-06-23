//#region CONFIG

const { Console } = require('console');

let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

//#endregion

var value = lines.shift().split(' ');

var value = value.sort(function(a, b){
    return b - a;
});

var value = value.reverse()

var A = parseInt(value[0]);
var B = parseInt(value[1]);
var C = parseInt(value[2]);
var D = parseInt(value[3]);

var minimo = Math.min(value)

if(A+B>C||A+B>D||B+C>D||A+C>D){
    var X = 'S'
} else {
    var X = 'N'
}

console.log(`${X}`);