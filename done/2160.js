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

var value = lines.shift();

var X = value.length;
var saida = "YES";

if(X>80){
    saida = "NO";
}

console.log(`${saida}`);