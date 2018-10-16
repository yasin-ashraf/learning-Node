const Logger = require('./second-logger');

const logger = new Logger();

logger.on('eventEmitted',function(arg){
    console.log('onEventEmitted',arg);
});

// This will raise an event in second-logger.js and corresponding listener here.
logger.log();