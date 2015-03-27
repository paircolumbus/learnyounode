var fs = require('fs'),
    dir = process.argv[2],
    ext = process.argv[3]

function checkDir(callback){
  fs.readdir(dir, function(err,list){
    if(err) throw err;
    callback(list)
  });
}

function filter(list){
  var filtered = list.filter(onlyExt);

  for(file in filtered){
    console.log(filtered[file]);
  }
}

function onlyExt(file){
  return file.match('.'+ext) != null;
}

checkDir(filter);
