var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  console.log(req.url);
/////////////////////////////////////////////////add/////////////////////////////////////////////////////
    if(req.url.search('add')>-1){

      var x =req.url.toString();


      for(let i=1;i<x.length;i++){
        if(x[i]=='a'){
          var one = x.substring(1, i);
        }
        else if(x[i]=='d'){
          var two = x.substring(i+2, x.length);
          break;
        }
      }

      console.log(parseInt(one)+parseInt(two));

    }
/////////////////////////////////////////////////sub/////////////////////////////////////////////////////
if(req.url.search('sub')>-1){

  var x =req.url.toString();
  for(let i=1;i<x.length;i++){
    if(x[i]=='s'){
      var one = x.substring(1, i);
    }
    else if(x[i]=='u'){
      var two = x.substring(i+2, x.length);
      break;
    }
  }

  console.log(parseInt(one)-parseInt(two));

}
/////////////////////////////////////////////////mul/////////////////////////////////////////////////////
if(req.url.search('mul')>-1){

  var x =req.url.toString();
  for(let i=1;i<x.length;i++){
    if(x[i]=='m'){
      var one = x.substring(1, i);
    }
    else if(x[i]=='u'){
      var two = x.substring(i+2, x.length);
      break;
    }
  }

  console.log(parseInt(one)*parseInt(two));

}
/////////////////////////////////////////////////div/////////////////////////////////////////////////////
if(req.url.search('div')>-1){

  var x =req.url.toString();
  for(let i=1;i<x.length;i++){
    if(x[i]=='d'){
      var one = x.substring(1, i);
    }
    else if(x[i]=='i'){
      var two = x.substring(i+2, x.length);
      break;
    }
  }

  console.log(parseInt(one)/parseInt(two));

}


  res.write('<h1> Welcome</h1>'); //write a response to the client
  res.end(); //end the response
}).listen(8080);
