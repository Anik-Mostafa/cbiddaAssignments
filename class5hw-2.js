var weather = require('weather-js');

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  //console.log(req.url);


// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
  /res.wr
});



res.end(); //end the response
}).listen(8080);
