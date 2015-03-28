var net = require('net'),
    port = process.argv[2],
    strftime = require('strftime')

var server = net.createServer(function(socket){
  var data = strftime('%Y-%m-%d %H:%M');
  socket.end(data+'\n');
}); 
server.listen(port);
