module.exports = function(dir, ext, callback) {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dir, function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data.filter(function(e) {
      return path.extname(e).slice(1) == ext;
    }));
  });
};
