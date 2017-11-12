const http = require('http')

const urls = process.argv.slice(2)

const fetchUrls = (urls, callback) => {
    let responses = {}

    urls.forEach(url => {
        http.get(url, res => {
            let rawData = ''

            res.setEncoding('utf-8')
            
            res.on('data', chunk => rawData += chunk)

            res.on('end', () => {
                responses[url] = rawData
                callback(responses)
            })
        })
    })
}

fetchUrls(urls, responses => {
    if (Object.keys(responses).length === urls.length) {
        urls.forEach(url => console.log(responses[url]))
    }
})
