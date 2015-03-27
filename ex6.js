var dir = process.argv[2],
    ext = process.argv[3],
    filtered = require('./ex6-module.js')

filtered(dir,ext,function(err,list){
  if(err) throw err;
  list.forEach(function(file){
    console.log(file);
  })
});
