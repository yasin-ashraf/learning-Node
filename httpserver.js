const http = require('http');
var fs = require('fs');
const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'json'});
        res.write('Hello world');
        var readstream = fs.createReadStream('readme.txt','utf8');
        readstream.pipe(res); //http response is a writestream
    }

    if(req.url == '/api/v1/catalogue'){
        res.write(JSON.stringify([1,2,34,5]));
    }
});

server.listen(3000,'127.0.0.1');
console.log('listening at 3000.....');