const fs = require('fs');
var x = fs.readFileSync('test.txt');
var splits = x.toString().split('\n', 100);
//var x1 = parseInt(x.toString());
var out=0;
for(i=0;i<splits.length;i++){

  out=out+parseInt(splits[i]);
}
//console.log(out);
var test1 = fs.readFileSync('test1.txt').toString();
var test2 = fs.readFileSync('test2.txt').toString();
var test3 = fs.readFileSync('test3.txt').toString();
console.log(test1,test2,test3);
// console.log(test2);
// console.log(test2);
