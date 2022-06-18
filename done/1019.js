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
var hours = 0;
var minutes = 0;
var seconds = 0;

while(value>=3600){
    value = value-3600;
    hours = hours+1;
}
while(value>=60){
    value = value-60;
    minutes = minutes+1;
}
while(value>=1){
    value = value-1;
    seconds = seconds+1;
}

console.log(`${hours}:${minutes}:${seconds}`);