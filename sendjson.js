const http = require('http');
var fs = require('fs');
const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text'});
        res.write('Hello world');
        var readstream = fs.createReadStream('readme.txt','utf8');
        readstream.pipe(res); //http response is a writestream
    }else if(req.url == '/api/v1/catalogue'){
        var catalogue = {
            name:'Ctalage-1',
            id:562,
            shopId:568
        };
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(catalogue));
    }else if(req.url === '/home'){
        res.writeHead(200,{'Content-Type':"text/html"});
        fs.createReadStream('/index.html').pipe(res);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream('/404.html').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log('listening at 3000.....');