var url = process.argv[2];
var http = require('http');
var bl = require('bl');

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function(err, data) {
    if (err) {
      console.log("Got error: " + err);
    }
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
