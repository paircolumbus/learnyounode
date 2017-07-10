var pa = process.argv;
var total = 0;
for (var i = 2; i < process.argv.length; i++){
    total += parseInt(pa[i], 10);
}
console.log(total);
