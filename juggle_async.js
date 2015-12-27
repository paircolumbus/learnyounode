var http = require('http');
var bl = require('bl');

(function(){
  var completeCount = 0;
  var dataArr = ['','',''];

  http.get(process.argv[2], function(response){
    response.pipe(bl(function(err, data){
      dataArr[0] = data.toString();
      completeCount++;
      if (completeCount === 3){
        printResults();
      }
    }));
  });

  http.get(process.argv[3], function(response){
    response.pipe(bl(function(err, data){
      dataArr[1] = data.toString();
      completeCount++;
      if (completeCount === 3){
        printResults();
      }
    }));
  });

  http.get(process.argv[4], function(response){
    response.pipe(bl(function(err, data){
      dataArr[2] = data.toString();
      completeCount++;
      if (completeCount === 3){
        printResults();
      }
    }));
  });



  function printResults(){
    dataArr.forEach(function(text){
      console.log(text);
    });
  }
})();
