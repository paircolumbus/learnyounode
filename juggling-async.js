const http = require('http')
let fullData = ["", "", ""]
let done = [false, false, false]

function finish() {
    console.log(fullData[0])
    console.log(fullData[1])
    console.log(fullData[2])
}

function callback(response,id) {
    response.setEncoding('utf8')
    response.on('data', (data) => {
        fullData[id] += data
        })
    response.on('end', () => {
        done[id] = true
        if (done.every(d => d)) {
            finish()
        }
    })
}

http.get(process.argv[2], (response) => { callback(response,0) })
http.get(process.argv[3], (response) => { callback(response,1) })
http.get(process.argv[4], (response) => { callback(response,2) })