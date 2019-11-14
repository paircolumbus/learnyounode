const net = require('net')
const port = process.argv[2]

const server = net.createServer(function listener(socket) {
    const date = new Date()
    const dateString = date.getFullYear() + "-" +
        (date.getMonth()+1).toString().padStart(2,'0') + "-" +
        date.getDate().toString().padStart(2,'0') + " " +
        date.getHours().toString().padStart(2,'0') + ":" +
        date.getMinutes().toString().padStart(2,'0') + "\n"

    socket.end(dateString)
})

server.listen(port)