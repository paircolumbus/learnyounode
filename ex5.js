var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, data) {
  if (err) {throw err;}
  var ext = process.argv[3];
  var relevant_files = data.filter(function(e) {
    return path.extname(e).slice(1) == ext;
  });
  for (var i = 0; i < relevant_files.length; i++) {
    console.log(relevant_files[i]);
  }
});
