const logger = require('./logger');

function Hello(name){
    console.log("Hello "+ name);
}

var message = "Yasin";
Hello(message);

logger.log('this is a log message');

const path = require('path');

var pathObj = path.parse(__filename);

logger.log(pathObj);

const os = require('os');
var osMem = os.totalmem();
var osFreeMem = os.freemem();

console.log(`Total Memory: ${osMem}`);
console.log(`Free Memory: ${osFreeMem}`);


var total = (osMem + osFreeMem);
logger.log(`Toal of these two = ${total}`);

const fs = require('fs');
var files = fs.readdirSync('./');
logger.log(`Sync Result = ${files}`);

fs.readdir('./',function(err,files){
    if(err) logger.log(err)
    else logger.log(`Async Result: ${files}`);
});

// fs.readdir('$',function(err,files){
//     if(err) log(err)
//     else log(`Error Result: ${files}`);
// });

const EventEmitter = require('events');
var event = new EventEmitter();

event.on('messageLogged',function(){
    logger.log('message logged with emiiter');
});
event.emit("messageLogged");

var event2 = new EventEmitter();
event2.on('messageLoggedWithArg',function(arg){
    console.log('message logged with emiiter with args',arg);
});
event2.emit("messageLoggedWithArg",{id:1,message:'This is an argument',hitUrl:'https://nodejs.org'});

//raised an event which is subscribed in logger.js
const event3 = logger.eventEmitter;
event3.emit("messageLoggedWithArginLoggerModule",{id:2,message:'This is an argument looged from first-app.js',hitUrl:'https://nodejs.org'});
