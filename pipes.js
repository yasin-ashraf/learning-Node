var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream('readme.txt','utf8');
var writestream = fs.createWriteStream('writeme.txt','utf8');
//pipe streams the data from readstream and pipes it to a writestream
readstream.pipe(writestream);

//pipes to send back data to a user - in httpserver.js file