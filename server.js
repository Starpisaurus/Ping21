var express = require('express');
var bodyParser = require('body-parser');
var test = require('./ctrl/test');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/route', function(req,res){
   
   res.status(200).send("Bonjour, ça marche bien");
    
});

app.use('/test', test);

app.listen(3333);

console.log('Server running...');