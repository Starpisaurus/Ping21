var express = require('express');
var bodyParser = require('body-parser');



//Controllers
var dbController = require('./database/dbController.js');
var usersController = require('./routes/usersController.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/users', usersController);
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bienvenue sur l\'API du site de MusikToolKit');

});

app.listen(3333);

console.log('Server running...');