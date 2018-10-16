var url = "http://www.yasinashraf.com";
const EventEmitter = require('events');
var event = new EventEmitter();

function log(message){
    console.log(message);
}
event.on('messageLoggedWithArginLoggerModule',function(arg){
    console.log('message logged with emiiter with args in Logger Module',arg);
});

module.exports.log = log;
module.exports.eventEmitter = event;
