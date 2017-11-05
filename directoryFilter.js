const fs = require('fs')

module.exports = (directoryName, fileExtension, callback) => {
    const findMatchingFiles = (files, fileExtension) => files.filter(f => f.endsWith(`.${fileExtension}`))
    
    const getMatchingFilesFromDirectory = (directory, fileExtension, callback) => {
        fs.readdir(directory, (err, data) => {
            if (err) {
                return callback(err)
            }
            callback(err, findMatchingFiles(data, fileExtension))
        })
    }

    getMatchingFilesFromDirectory(directoryName, fileExtension, callback)
}
