var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};
var Yasin = new Person('Yasin');
var Ramsy = new Person('Ramsy');
var Sachin = new Person('Sachin');

var people = [Yasin,Ramsy,Sachin];

util.inherits(Person,events.EventEmitter);

people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(`${person.name} said : ${mssg}`);
    });
});

Yasin.emit('speak','Hi there');
Ramsy.emit('speak','Hi Yasin');
Sachin.emit('speak','Hi guys');