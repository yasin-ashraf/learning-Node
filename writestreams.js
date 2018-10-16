var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream('readme.txt','utf8');
var writestream = fs.createWriteStream('writeme.txt','utf8');
readstream.on('data',function(chunk){
    console.log('chunk received');
    writestream.write(chunk);
});
