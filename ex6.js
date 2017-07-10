var filterer = require('./ex6_module.js');

var relevant_files = filterer(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    throw err;
  }
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
})
