var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var filePath = process.argv[3];

http.createServer(function (req, res) {
  var readStream = fs.createReadStream(filePath);

  readStream.on('open', function() {
    readStream.pipe(res);
  });

  readStream.on('error', function(err) {
    res.end(err);
  });
}).listen(port);


//**********************
//* Official solution: *
//**********************

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
   
  fs.createReadStream(process.argv[3]).pipe(res)
})  

server.listen(Number(process.argv[2]))