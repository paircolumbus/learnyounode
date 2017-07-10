var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
  var path = url.parse(req.url, true).pathname;
  var time = url.parse(req.url, true).query.iso;
  var date = new Date(time);
  res.writeHead(200, {'Content-Type': 'application/json'});
  if (path == '/api/parsetime') {
    res.write(JSON.stringify({
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }));
  } else if (path == '/api/unixtime') {
    res.write(JSON.stringify({ 'unixtime': date.getTime() }));
  } else {
    res.write("ERROR: Invalid path");
  }
  res.end();
});
server.listen(process.argv[2]);
