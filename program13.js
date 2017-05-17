var http = require('http');
var urlParser = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {  
  if(req.method === 'GET') {
    var parsedQuery = parsedRequestQuery(req);
    console.log('parsedQuery', parsedQuery, req.url)
    var timeResponse = getTime(parsedQuery.endpoint, parsedQuery.time)
    var responseString = JSON.stringify(timeResponse);
    res.end(responseString);
  } else {
    return res.end('Please send a GET.\n')
  }
}); 

server.listen(Number(process.argv[2]))

function parsetime(timeObject) {
  return {
    "hour": timeObject.getHours(),
    "minute": timeObject.getMinutes(),
    "second": timeObject.getSeconds()
  }
}

function unixtime(timeObject) {
  return {
    "unixtime": timeObject.getTime()
  }
}

function getTime(endpoint, time) {
  var timeObject = new Date(time);
  if(endpoint === '/api/parsetime') {
    return parsetime(timeObject);
  } else if(endpoint === '/api/unixtime') {
    return unixtime(timeObject);
  }
}

function parsedRequestQuery(request) {
  var parsedURL = urlParser.parse(request.url, true);
  return { endpoint: parsedURL.pathname, time: parsedURL.query.iso};
}

//**********************
//* Official solution: *
//**********************

var http = require('http')  
var url = require('url')  
  
function parsetime (time) {  
  return {  
    hour: time.getHours(),  
    minute: time.getMinutes(),  
    second: time.getSeconds()  
  }  
}  
  
function unixtime (time) {  
  return { unixtime : time.getTime() }  
}  
  
var server = http.createServer(function (req, res) {  
  var parsedUrl = url.parse(req.url, true)  
  var time = new Date(parsedUrl.query.iso)  
  var result  
  
  if (/^\/api\/parsetime/.test(req.url))  
    result = parsetime(time)  
  else if (/^\/api\/unixtime/.test(req.url))  
    result = unixtime(time)  
  
  if (result) {  
    res.writeHead(200, { 'Content-Type': 'application/json' })  
    res.end(JSON.stringify(result))  
  } else {  
    res.writeHead(404)  
    res.end()  
  }  
})  
server.listen(Number(process.argv[2]))
