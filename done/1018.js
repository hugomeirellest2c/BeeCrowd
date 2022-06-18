//#region CONFIG

let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

//#endregion

var valor = lines.shift();
var valorAux = valor;
var N100 = 0;
var N050 = 0; 
var N020 = 0; 
var N010 = 0; 
var N005 = 0; 
var N002 = 0; 
var N001 = 0;

while(valor >= 100){
    valor = valor-100;
    N100 = N100+1;
}
while(valor >= 50){
    valor = valor-50;
    N050 = N050+1;
}
while(valor >= 20){
    valor = valor-20;
    N020 = N020+1;
}
while(valor >= 10){
    valor = valor-10;
    N010 = N010+1;
}
while(valor >= 5){
    valor = valor-5;
    N005 = N005+1;
}
while(valor >= 2){
    valor = valor-2;
    N002 = N002+1;
}
while(valor >= 1){
    valor = valor-1;
    N001 = N001+1;
}

console.log(`${valorAux}`);
console.log(`${N100} nota(s) de R$ 100,00`);
console.log(`${N050} nota(s) de R$ 50,00`);
console.log(`${N020} nota(s) de R$ 20,00`);
console.log(`${N010} nota(s) de R$ 10,00`);
console.log(`${N005} nota(s) de R$ 5,00`);
console.log(`${N002} nota(s) de R$ 2,00`);
console.log(`${N001} nota(s) de R$ 1,00`);