var fs = require('fs')
var file = process.argv[2];

function fileReader(callback) {
  fs.readFile(file, 'utf8', function(err,data){
    if(err) throw err;
    callback(data);
  });
}

function lengthGetter(data) {
  var ns = data.match(/\n/g);
  console.log(ns.length);
}

fileReader(lengthGetter);
