//#region CONFIG

let input = '';
try {
    input = require('fs').readFileSync('/dev/stdin', 'utf8');
} catch (e) {
    input = require('fs').readFileSync('./dev/stdin', 'utf8');
}

var lines = input.split('\n');

//#endregion

var value = lines.shift();
var years = 0;
var months = 0;
var days = 0;

while(value>=365){
    value = value-365;
    years = years+1;
}
while(value>=30){
    value = value-30;
    months = months+1;
}
while(value>=1){
    value = value-1;
    days = days+1;
}

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);