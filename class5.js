
// greetings.js
var exports = module.exports = {};

exports.addition = function(a,b) {
return a+b;
};

exports.subtraction = function(a,b) {
return a-b;
};
exports.muliplication = function(a,b) {
// return a*b;
};

exports.division = function(a,b) {
return a/b;
};

// export.student = {
//   name : "John",
//   age : 20;
// }
// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   console.log(req.url);
//   res.write('<h1>hello</h1>'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080
