const Logger = require('./second-logger');

const logger = new Logger();

logger.on('eventEmitted',function(arg){
    console.log('onEventEmitted',arg);
});

// This will raise an event in second-logger.js and corresponding listener here.
logger.log();

const http = require('http');
const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.write('Hello world');
        res.end();
    }

    if(req.url == '/api/v1/catalogue'){
        res.write(JSON.stringify([1,2,34,5]));
    }
});

server.listen(3001);
console.log('listening at 3000.....');