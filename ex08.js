const http = require('http')

const url = process.argv[2]

http.get(url, res => {
    let rawData = ''

    res.setEncoding('utf-8')
    
    res.on('data', chunk => rawData += chunk)

    res.on('end', () => {
        console.log(rawData.length)
        console.log(rawData)
    })
})
