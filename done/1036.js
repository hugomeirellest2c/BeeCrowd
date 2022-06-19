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

var A = parseFloat(value[0]);
var B = parseFloat(value[1]);
var C = parseFloat(value[2]);

var delta = Math.sqrt((B*B)-4*A*C);

if(A>0 && B>0 && C>0 && delta>0){

    var R1 = parseFloat(((-B)+delta)/(2*A)).toFixed(5);
    var R2 = parseFloat(((-B)-delta)/(2*A)).toFixed(5);

    console.log(`R1 = ${R1}`);
    console.log(`R2 = ${R2}`);

} else {

    console.log(`Impossivel calcular`);

}