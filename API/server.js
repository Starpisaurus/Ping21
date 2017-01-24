var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ipServer = "localhost";
var databaseServer = "mongodb://" + ipServer + ":27017/musictoolkit";
var sha1 = require('sha1');

//Controllers
//var dbController = require('./ctrl/dbController.js');
var usersController = require('./ctrl/usersController.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/users', usersController);

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bienvenue sur l\'API du site de MusikToolKit');

});

app.listen(3333);

console.log('Server running...');