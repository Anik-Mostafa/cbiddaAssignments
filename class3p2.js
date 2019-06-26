const fs = require('fs');
fs.readFile("test1.txt", function(err, data){
  setTimeout(function(){
    console.log(data.toString());
    fs.readFile("test2.txt", function(err, data){
      console.log(data.toString());
      fs.readFile("test3.txt", function(err, data){
        console.log(data.toString());
      })
    })

  },2000)
;
})

//Asyncronus means parallel
console.log("this is a test");
