var concatStream = require('concat-stream')
var http = require('http');

var url = process.argv[2];

var req = http.get(url, function(res) {
  res.setEncoding('utf8');

  res.pipe(concatStream(function (data) {
    console.log(data.length);
    console.log(data);
  }));

});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
