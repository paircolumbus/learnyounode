module.exports = function (dirName, fileExtension, callback) {

    const fs = require('fs')

    fs.readdir(dirName, function (err, data) {
        if (err) return callback(err)
        
        const re = new RegExp("\." + fileExtension + "$")
        callback(err, data.filter((item) => re.test(item)))

    })
}