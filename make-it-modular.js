const mymodule = require('./mymodule')
const fileExtension = process.argv[3]

mymodule(process.argv[2], process.argv[3],
    function callback(err, data) {
        console.log(data.join('\n'))
    }
)