const fs = require('fs')
const file = fs.readFileSync(process.argv[2],'utf8')
console.log(file.match(/\n/g).length)