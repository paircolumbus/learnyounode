const http = require('http')
const url = require('url')

const port = process.argv[2]

const connectionListener = (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const action = getAction(parsedUrl.pathname)

    if (req.method === 'GET' && action) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(action.call(this, parsedUrl.query)))
    }
    
    res.statusCode = 404
    res.end('Action not found.')
}

const getAction = path => {
    const matches = path.match(/\/api\/(.*)/)

    if (matches.length > 1) {
        return actions[matches[1]]
    }
    return
}

const parseDateTime = (dateTime) => new Date(dateTime)

const parseTime = (params) => {
    const dateTime = parseDateTime(params.iso)
    return {
        hour: dateTime.getHours(),
        minute: dateTime.getMinutes(),
        second: dateTime.getSeconds()
    }
}

const unixTime = (params) => {
    return {
        unixtime: parseDateTime(params.iso).getTime()
    }
}

const actions = {
    parsetime: parseTime,
    unixtime: unixTime,
}

const server = http.createServer(connectionListener)

server.listen(port)
