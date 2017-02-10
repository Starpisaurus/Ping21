'use strict'

var express = require('express');
var router = express.Router();
var sha1 = require('sha1');
var dbController = require('../database/dbController.js');

router.post('/register', function (req, res) {
    console.log(req.body);

    var user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        register_date: new Date(),
        email: req.body.email,
        password: sha1(req.body.password)
    };
    
    var status = 500;

    dbController.findUser({
        email: user.email
    }, function (results) {
        console.log(results);
        if (results && results.length == 0) {
            dbController.addUser(user);
            status = 200;
        } else {
            status = 409;
        }
        res.status(status).send();
    })


});

router.post('/login', function (req, res) {
    var user = {
        email: req.body.email,
    };
    var password = sha1(req.body.password);
    console.log(user)
    dbController.findUser(user, function (results) {

        var status = 500;
        var data = {};
        if (results) {
            console.log('prout');
            console.log(results);
            if (results.length == 1) {
                if (results[0].password == password) {
                    status = 200;
                    data = results[0];
                    delete data.password;
                    console.log(user);
                } else {
                    console.log('Password incorrect');
                    status = 401;
                }
            } else {    
                console.log("User doesn't exists in database");
                status = 404;
            }
            res.status(status).json(data);
        } else {
            console.log(results);
        }
    });

});


module.exports = router;