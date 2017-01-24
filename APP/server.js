var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var gulp = require('gulp');
require('./gulpfile');

gulp.start('build');

var port = (process.argv[2] == 'prod') ? 80 : 8000 ;
var port = (process.argv[3] != null) ? process.argv[3] : 8000 ;

app.set('port', port);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// application -------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'app')));

app.post('/status', function (req, res) {
    res.status(200).send('OK');
});

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: path.join(__dirname, 'app') });
});

app.listen(app.get('port'), function(err, req, res, next) {
    if(err){
        console.log(err);
    } else {
        console.log('Server started @ ' + new Date() + ': http://localhost:' + app.get('port') + '/');
    }
    
});
 