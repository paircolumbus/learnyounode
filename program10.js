var net = require('net');
var dateFormat = require('dateformat')


var now = new Date();
var formattedDate = dateFormat(now, "yyyy-mm-dd HH:MM\n");

var server = net.createServer(function(socket) {
  socket.end(formattedDate);
});

server.listen(Number(process.argv[2]));
