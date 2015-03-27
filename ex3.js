var fs = require('fs')
var args = process.argv;
var file = args.slice(2,args.length)[0];

var text = fs.readFileSync(file);
var sentences = text.toString().match(/\n/g);

console.log(sentences.length);
