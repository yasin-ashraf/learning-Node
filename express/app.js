const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

var jsonParser = bodyParser.json();

app.post('/saveuser',jsonParser,function(req,res){
    console.log(req.body);  // Data will be stored in req.body.
});

app.get('/',function(req,res){
    res.send('Hi there');
});

app.get('/home',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact',function(req,res){
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id',function(req,res){
    var info ={age:26,job:'Coder',hobbies:["eating","fighting","footballing"]};
    res.render('profile',{profile:req.params.id,info:info,rq:req.query});
});
app.listen(3000);