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

var valor = parseFloat(lines.shift()).toFixed(2);
var N100 = 0;
var N050 = 0; 
var N020 = 0; 
var N010 = 0; 
var N005 = 0; 
var N002 = 0; 
var M100 = 0;
var M050 = 0; 
var M025 = 0; 
var M010 = 0; 
var M005 = 0; 
var M001 = 0;

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
    M100 = M100+1;
}
while(valor >= 0.50){
    valor = valor-0.50;
    M050 = M050+1;
}
while(valor >= 0.25){
    valor = valor-0.25;
    M025 = M025+1;
}
while(valor >= 0.10){
    valor = valor-0.10;
    M010 = M010+1;
}
while(valor >= 0.05){
    valor = valor-0.05;
    M005 = M005+1;
}
while(valor >= 0.01){
    valor = valor-0.01;
    M001 = M001+1;
}

console.log(`NOTAS:`);
console.log(`${N100} nota(s) de R$ 100.00`);
console.log(`${N050} nota(s) de R$ 50.00`);
console.log(`${N020} nota(s) de R$ 20.00`);
console.log(`${N010} nota(s) de R$ 10.00`);
console.log(`${N005} nota(s) de R$ 5.00`);
console.log(`${N002} nota(s) de R$ 2.00`);
console.log(`MOEDAS:`);
console.log(`${M100} moeda(s) de R$ 1.00`);
console.log(`${M050} moeda(s) de R$ 0.50`);
console.log(`${M025} moeda(s) de R$ 0.25`);
console.log(`${M010} moeda(s) de R$ 0.10`);
console.log(`${M005} moeda(s) de R$ 0.05`);
console.log(`${M001} moeda(s) de R$ 0.01`);