var fs = require('fs');
var bl = require('bl');


var http = require('http');
var server = http.createServer(function (req, res){
  var buffer = fs.createReadStream(process.argv[3]);
  buffer.pipe(bl(function(err, data){
    res.write(data);
    res.end();
  }));
});
server.listen(process.argv[2]);
