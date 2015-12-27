var fs = require('fs');
var bl = require('bl');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/parsetime', function(req, res){
  var inTime = req.query.iso;
  if (inTime){
    var time = new Date(inTime);

    var obj = {};
    obj.hour = time.getHours();
    obj.minute = time.getMinutes();
    obj.second = time.getSeconds();

    res.send(obj);

  } else {
    res.send('error');
  }

});

app.get('/api/unixtime', function(req, res){
  var inTime = req.query.iso;
  if (inTime){
    var time = new Date(inTime);

    var obj = {
      unixtime: time.getTime()
    };

    res.send(obj);

  } else {
    res.send('error');
  }

});

app.listen(process.argv[2], function(){
  console.log('listening on ' + process.argv[2]);
});
