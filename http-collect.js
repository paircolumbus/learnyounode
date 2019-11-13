const http = require('http')
let fullResult = ''

http.get(process.argv[2], (response) => {
        response.setEncoding('utf8')
        response.on('data', (data) => {
            fullResult += data
            })
        response.on('end', () => {
            console.log(fullResult.length)
            console.log(fullResult)
        })
    })