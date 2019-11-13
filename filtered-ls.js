const fs = require('fs')

const dirName = process.argv[2]
const fileExtension = process.argv[3]

fs.readdir(dirName,
    function callback (err, list) {
        if (err) throw err
                
        const re = new RegExp("\." + fileExtension + "$")
        const filteredList = list.filter((item) => re.test(item))
        
        console.log(filteredList.join('\n'))
        })
        