const net = require('net')
const listenPort = process.argv[2]

const getCurrentDateTime = () => {
    const date = new Date()
    return [date.getFullYear(), padLeftZeros(date.getMonth() + 1), padLeftZeros(date.getDate())].join('-') + ' ' +
        [padLeftZeros(date.getHours()), padLeftZeros(date.getMinutes())].join(':')
}

const padLeft = (val, length, character) => {
    let paddedString = val.toString()
    while (paddedString.length < length) {
        paddedString = character + paddedString
    } 
    return paddedString
}

const padLeftZeros = (val, length = 2) => padLeft(val, length, '0')

const server = net.createServer(socket => {
    socket.end(`${getCurrentDateTime()}\n`, 'utf-8')
})

server.listen(listenPort)
