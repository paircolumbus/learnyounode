const http = require('http')
const fs = require('fs')

const [port, fileName] = process.argv.slice(2)

const connectionListener = (request, response) => copyFileToStream(fileName, response)

const copyFileToStream = (fileName, dest) => fs.createReadStream(fileName).pipe(dest)

const server = http.createServer(connectionListener)

server.listen(port)
