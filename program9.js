var concatStream = require('concat-stream')
var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];

var cache = function(index, data) {
  results[index] = data;
  if(results.length === urls.length) {
    results.forEach(function(item) {
      console.log(item);
    });
  }
};

urls.forEach(function(url, index) {
  http.get(url, function(res) {
    res.setEncoding('utf8');
    res.pipe(concatStream(function (data) {
      cache(index, data);
    }))
    .on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });
  });
});
