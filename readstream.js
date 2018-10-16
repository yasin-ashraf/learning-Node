var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream('readme.txt','utf8');
readstream.on('data',function(chunk){
    console.log('chunk received');
    console.log(chunk);
});