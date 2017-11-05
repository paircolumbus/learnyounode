const fs = require('fs')

const filePath = process.argv[2];

const fileContents = fs.readFileSync(filePath, {encoding: 'utf-8'});

const numberOfNewLines = fileContents.match(/\n/g)

console.log(numberOfNewLines.length)
