var http = require('http');

var url = process.argv[2];

var req = http.get(url, function(res) {
  res.setEncoding('utf8');

  res.on('data', function (chunk) {
    console.log(chunk);
  });
});


req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
