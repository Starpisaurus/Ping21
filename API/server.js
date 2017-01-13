var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ipServer = "137.174.194.70";
var databaseServer = "mongodb://" + ipServer + ":27017/musictoolkit";

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bienvenue sur l\'accueil du site de MusikToolKit');

});

app.get('/register', function (req, res) {
    var user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        register_date: new Date(),
        email: req.body.email,
        password: sha1(req.body.password)
    };

    MongoClient.connect(databaseServer, function (err, db) {
        if (!err) {
            db.collection("users").find({email: user.email}).toArray(function (error, results) {
                if (error) throw error;
                if(results.length == 0){
                    db.collection("users").insert(user, function(error, results){
                        
                    });
                }                
            });
        }
    });

});

app.listen(3333);

console.log('Server running...');