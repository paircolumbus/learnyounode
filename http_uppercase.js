var fs = require('fs');
var bl = require('bl');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res){
  req.on('end', function(){
    res.send();
  });

  req.on('data', function(text){
    res.write(text.toString().toUpperCase());
  });

});

app.listen(process.argv[2], function(){
  console.log('listening on ' + process.argv[2]);
});
