const fs = require('fs')

const [directory, fileExtension] = process.argv.splice(2)

const findMatchingFiles = (files, fileExtension) => files.filter(f => f.endsWith(`.${fileExtension}`))

const getMatchingFilesFromDirectory = (directory, fileExtension, callback) => {
    fs.readdir(directory, (err, data) => callback(findMatchingFiles(data, fileExtension)))
}

const printMatchingFiles = files => files.forEach(f => console.log(f))

getMatchingFilesFromDirectory(directory, fileExtension, printMatchingFiles)
