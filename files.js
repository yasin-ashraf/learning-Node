var fs = require('fs');
//read from a file
fs.readFile('readme.txt','utf8',function(err,data){
    if (err) console.log(err);
    else console.log(data);
});

var readme = fs.readFileSync('readme.txt','utf8');
console.log(readme);
//write to a file
fs.writeFileSync('writeme.txt',readme);

//delete file
fs.unlink('writeme.txt');

//create directory
fs.mkdirSync('stuffs');
fs.mkdir('stuffs',function(){
    fs.readFile('readme.txt','utf8',function(err,data){
        fs.writeFile('./stuffs/writeme.txt',data);
    });
});
// delete directory
fs.unlink('./stuffs/writeme.txt');
fs.rmdirSync('stuffs');