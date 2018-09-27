const log = require('./logger');

function Hello(name){
    console.log("Hello "+ name);
}

var message = "Yasin";
Hello(message);

log('this is a log message');

const path = require('path');

var pathObj = path.parse(__filename);

log(pathObj);

const os = require('os');
var osMem = os.totalmem();
var osFreeMem = os.freemem();

console.log(`Total Memory: ${osMem}`);
console.log(`Free Memory: ${osFreeMem}`);


var total = (osMem + osFreeMem);
log(`Toal of these two = ${total}`);

const fs = require('fs');
var files = fs.readdirSync('./');
log(files);
