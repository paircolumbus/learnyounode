var http = require('http'),
    url = process.argv[2],
    str = ''

http.get(url, function(response){
  response.setEncoding('utf8');
  response.on('data',function(data){
    str += data;
  });

  response.on('end',function(){
    console.log(str.length);
    console.log(str);
  });
})
