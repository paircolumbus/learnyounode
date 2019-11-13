const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const filePath = process.argv[3]

const server = http.createServer(function listener(req, res) {
    let output = ""
    req.on('data', (chunk) => {
        output += String(chunk).toUpperCase()
    })
    req.on('end', () => {
        res.end(output)
    })
})

server.listen(port)