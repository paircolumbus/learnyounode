var http = require('http'),
    url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4],
    str = '',
    count = 2

getter(process.argv[2])

function getter(url,callback){

  http.get(url, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      str += data;
    });

    response.on('end', function(){
      count++;
      if (count <= 4) {
        console.log(str)
        str = ''
        getter(process.argv[count]);
      } else {
        console.log(str)
      }
    });
  });
}
