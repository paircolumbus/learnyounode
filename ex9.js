var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var responses = [null, null, null];

var callback_generator = function(order) {
  return function(response) { // oh lord what am i doing
    response.setEncoding('utf8');
    response.pipe(bl(function(err, data) {
      if (err) {
        console.log("Got error: " + err);
      }
      responses[order] = data.toString();

      if (responses[0] && responses[1] && responses[2]) {
        console.log(responses[0]);
        console.log(responses[1]);
        console.log(responses[2]);
      }
    }));
  };
};


var custom_get = function(url, order, response_handle) {
  http.get(url, function(response) {
    responses[order] = response_handle(response);
  });
};

for (var i = 0; i < urls.length; i++) {
  custom_get(urls[i], i, callback_generator(i));
}
