const fs = require('fs');
var sValue='';
for(let i=1;i<=100;i++){
  sValue=sValue+i+"\n";
}
fs.writeFileSync("test.txt",sValue);
