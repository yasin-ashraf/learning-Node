var adder = function(a,b){
    return `The sum of these two numbers are ${a+b}`;
};

var subtracter = function(a,b){
    return `The difference of these two numbers are ${a-b}`;    
};

var wordCounter = function(arr){
    return `The size of this Array is ${arr.length}`;
};

module.exports.adder = adder;
module.exports.subtracter = subtracter;
module.exports.wordCounter = wordCounter;