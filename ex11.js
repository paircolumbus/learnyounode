var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  var stream = fs.createReadStream(process.argv[3], { autoClose: true });
  stream.pipe(res);
});
server.listen(process.argv[2]);
