var filterFunction = require('./read-directory-module.js')

var inputPath = process.argv[2];
var extension = process.argv[3];

filterFunction(inputPath, extension, function(err, list) {
  if(err) 
    return console.error('There was an error:', err);

  list.forEach(function(file) {
    console.log(file);
  });
});
