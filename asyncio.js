var fs = require('fs');

var file = fs.readFile(process.argv[2], function(err, buffer){
  if (!err){
    var str = buffer.toString();

    var arr = str.split('\n');

    console.log(arr.length - 1);
  }
});
