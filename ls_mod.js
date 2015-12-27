var fs = require('fs');
var filterList = require('./ls_mod_function');

fs.readdir(process.argv[2], filterList);
