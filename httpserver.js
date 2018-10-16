const http = require('http');
const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'json'});
        res.write('Hello world');
        res.end('Bye');
    }

    if(req.url == '/api/v1/catalogue'){
        res.write(JSON.stringify([1,2,34,5]));
    }
});

server.listen(3000,'127.0.0.1');
console.log('listening at 3000.....');