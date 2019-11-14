const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const filePath = process.argv[3]

const server = http.createServer(function listener(req, res) {
    const stream = fs.createReadStream(filePath)
    let text = ""
    stream.on('data', (chunk) => {
        text += chunk
    })
    stream.on('end', () => {
        res.end(text)
    })
})

server.listen(port)