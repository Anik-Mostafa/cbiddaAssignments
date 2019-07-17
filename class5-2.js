const calculator= require('./new/class5.js');

console.log( JSON.stringify(calculator.student));

var x = JSON.stringify(calculator.student);
console.log(JSON.parse(x).name);
