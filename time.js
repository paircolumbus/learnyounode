var net = require('net');
var server = net.createServer(function (socket){
	socket.end(getTime());
});
server.listen(process.argv[2]);

function getTime() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var seconds = now.getSeconds();

	if (month.toString().length == 1) {
		var month = '0' + month;
	}
	if (day.toString().length == 1) {
		var day = '0' + day;
	}
	if (hour.toString().length == 1) {
		var hour = '0' + hour;
	}
	if (minute.toString().length == 1) {
		var minute = '0' + minute;
	}
	if (seconds.toString().length == 1) {
		var seconds = '0' + seconds;
	}

	return year + '-' + month + '-' + day + " " + hour + ":" + minute;
}