module.exports = function(err, list){
  if (!err){
    list.forEach(function(str){
      var re = new RegExp('.' + process.argv[3], "g");
      if (re.test(str)){
        console.log(str);
      }
    });
  }
};
