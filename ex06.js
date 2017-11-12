const directoryFilter = require('./directoryFilter')

const [directory, fileExtension] = process.argv.splice(2)

directoryFilter(directory, fileExtension, (err, data) => data.forEach(f => console.log(f)))
