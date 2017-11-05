const http = require('http')

const port = process.argv[2]

const connectionListener = (request, response) => {
    if (request.method === 'POST') {
        let body = ''
        request.on('data', (data, err) => body += data.toString())
        request.on('end', () => response.write(body.toUpperCase()))
    }
}

const server = http.createServer(connectionListener)

server.listen(port)
