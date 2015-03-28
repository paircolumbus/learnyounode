var http = require('http'),
    port = process.argv[2],
    url = require('url'),
    strftime = require('strftime')

function parsetime(time) {
  var h = new Date(time).getHours();
  var m = new Date(time).getMinutes();
  var s = new Date(time).getSeconds();
  var obj = { "hour": h, "minute": m, "second": s }
  return JSON.stringify(obj);
}

function unixtime(time) {
  var d = new Date(time).getTime();
  var obj = { "unixtime": d }
  return JSON.stringify(obj);
}

var server = http.createServer(function(req,res){
  var ul = url.parse(req.url, true);
  var time = ul.query['iso'];

  if(ul.pathname === '/api/parsetime'){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(parsetime(time));
  } else if (ul.pathname === '/api/unixtime'){
    res.write(unixtime(time));
  }
  res.end();
}).listen(port);
