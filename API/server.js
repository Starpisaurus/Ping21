var express = require('express');
var bodyParser = require('body-parser');
var test = require('./ctrl/test');
var ejs = require('ejs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
   
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bienvenue sur l\'accueil du site de MusikToolKit');
    
});

app.get('/users/:userId/profile', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.userId);
});

app.get('/counter/:nulber', function(req,res){
    var users = ['Edouard','Pierre','Pierre','Matthieu','Nadège'];
    res.status(200).send('counter.ejs', {counter : req.params.number, users : users});
});

app.use(function(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Désolé, cette page est introuvable');
});

//Test for POST method
//app.use('/test', test);

app.listen(8080);

console.log('Server running...');