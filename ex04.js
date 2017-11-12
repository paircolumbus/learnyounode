const fs = require('fs')

const filePath = process.argv[2];

const getNewLines = (filePath, callback) => {
    fs.readFile(filePath, 'utf-8', (e, d) => {
        callback(d.match(/\n/g))
    })
}

const printNewLines = newLines => console.log(newLines.length)

getNewLines(filePath, printNewLines)
