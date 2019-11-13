const http = require('http')
const port = process.argv[2]

const server = http.createServer(function listener(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' }) 

    const path = req.url.split("?")[0]
    const key = req.url.split("?")[1].split("=")[0]
    const value = req.url.split("=")[1]

    let output = ""
    
    const date = new Date(value)

    if (path == "/api/parsetime")
        res.end(JSON.stringify({hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }))
    else if (path == "/api/unixtime")
        res.end(JSON.stringify({unixtime: date.getTime()}))
    else 
        res.writeHead(404)
})

server.listen(port)