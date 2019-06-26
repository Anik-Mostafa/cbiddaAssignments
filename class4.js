const testFolder = './tests/';
const fs = require('fs');
var path = require('path');

function readFileByExt(com){
fs.readdir(testFolder, (err, files) => {

    for(i=0;i<files.length;i++){
      if(path.extname(files[i])==com){
        console.log(files[i]);
      }
    }

});
}
readFileByExt(".js");
readFileByExt(".txt");



// var ext = path.extname('/Users/Refsnes/demo_path.js');
// console.log(ext);
