const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(){
        this.emit('eventEmitted',{id:1,message:'Hi there'});
    }
}

module.exports = Logger;