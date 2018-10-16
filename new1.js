var time = 0;
setTimeout(() => {
    console.log("3 seconds has passed!");
}, 3000);

var timer = setInterval(function(){
    time+=2;
    console.log( time + " seconds has passed!");
    if(time > 10){
        clearInterval(timer);
    }
},2000);  

// Function Expression
var sayBye = function(){ //this is called anonymous function.
    console.log("Bye");
};

// function as a parameter
function callFunction(fun){
    fun();
}

callFunction(sayBye);


//
var wordCounter = function(arr){
    return 'The number of elements in array is ' + arr.length;
};

console.log(wordCounter(['cricket','football','hockey']));