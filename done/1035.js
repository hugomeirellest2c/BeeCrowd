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

var value = lines.shift().split(" ");

var A = parseInt(value[0]);
var B = parseInt(value[1]);
var C = parseInt(value[2]);
var D = parseInt(value[3]);

if(B>C&&D>A&&C+D>A+B&&C>0&&D>0){
    console.log(`Valores aceitos`);
} else {
    console.log(`Valores nao aceitos`);
}